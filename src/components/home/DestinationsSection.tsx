// src/components/home/DestinationsSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { homeDestinations } from '@/data/homeDestinations';
import type { HomeDestinationItem } from '@/types';

interface Tab {
  id: keyof typeof homeDestinations;
  label: string;
}

export default function DestinationsSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof homeDestinations>('highlights');

  const tabs: Tab[] = [
    { id: 'highlights', label: 'Highlights' },
    { id: 'cities', label: 'Cities' },
    { id: 'historic-sites', label: 'Historic Sites' },
    { id: 'national-parks', label: 'National Parks' },
    { id: 'nomadic-camps', label: 'Nomadic Camps' },
    { id: 'regions', label: 'Regions' },
    { id: 'food-and-drink', label: 'Food and Drink' },
  ];

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      food: 'bg-purple-600',
      region: 'bg-gray-600',
      history: 'bg-orange-600',
      culture: 'bg-blue-500',
      adventure: 'bg-red-600',
      urban: 'bg-slate-700',
      nature: 'bg-green-600',
    };
    return colors[category.toLowerCase()] || 'bg-gray-600';
  };

  const getCardClasses = (index: number): string => {
    const isTall = index === 1 || index === 3 || index === 5;
    
    // Desktop grid positions
    const desktopPositions = [
      'lg:col-start-1 lg:row-start-1',           // card-1
      'lg:col-start-2 lg:row-start-1 lg:row-span-2', // card-2 (tall)
      'lg:col-start-3 lg:row-start-1',           // card-3
      'lg:col-start-1 lg:row-start-2 lg:row-span-2', // card-4 (tall)
      'lg:col-start-2 lg:row-start-3',           // card-5
      'lg:col-start-3 lg:row-start-2 lg:row-span-2', // card-6 (tall)
    ];

    // Tablet grid positions
    const tabletPositions = [
      'md:col-start-1 md:row-start-1',          // card-1
      'md:col-start-2 md:row-start-1 md:row-span-2', // card-2 (tall)
      'md:col-start-1 md:row-start-2',          // card-3
      'md:col-start-2 md:row-start-3 md:row-span-2', // card-4 (tall)
      'md:col-start-1 md:row-start-3',          // card-5
      'md:col-start-1 md:row-start-4',          // card-6
    ];

    return `${desktopPositions[index]} ${tabletPositions[index]} ${isTall ? 'tall-card' : ''}`;
  };

  return (
    <section className="py-8 px-4 lg:px-32 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
            DESTINATIONS
          </h2>
          <h3 className="text-4xl font-bold text-black">
            Unmissable places
          </h3>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex justify-center min-w-max px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-4 text-base font-light cursor-pointer transition-all duration-200 whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-black border-transparent hover:text-blue-600'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto] gap-10 mb-12">
          {homeDestinations[activeTab]?.slice(0, 6).map((card, index) => (
            <div
              key={card.id}
              className={`
                bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl
                transition-all duration-300 hover:-translate-y-2 group
                ${getCardClasses(index)}
              `}
            >
              {/* Card Image */}
              <div className={`relative w-full overflow-hidden ${
                index === 1 || index === 3 || index === 5 ? 'h-80' : 'h-72'
              }`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <span className={`
                  absolute top-5 left-5 text-white px-3 py-1 rounded text-xs 
                  font-semibold uppercase z-10 ${getCategoryColor(card.category)}
                `}>
                  {card.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {card.title}
                </h3>
                <p className={`text-sm text-gray-600 mb-4 line-clamp-3 ${
                  index === 1 || index === 3 || index === 5 ? 'line-clamp-6' : 'line-clamp-3'
                }`}>
                  {card.description}
                </p>
                
                {/* Card Footer */}
                <div className="text-xs text-gray-500 flex items-center">
                  <span>⏱️</span>
                  <span className="ml-1">{card.minutes} minutes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Commented out as in original */}
        {/* 
        <div className="text-center">
          <Link 
            href="/destinations" 
            className="inline-block px-6 py-3 border-2 border-blue-900 rounded text-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition-all duration-200"
          >
            View all destinations
          </Link>
        </div>
        */}
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}