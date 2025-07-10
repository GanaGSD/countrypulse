// src/components/pages/DestinationsPage.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/data/destinations';
import type { Destination } from '@/types';

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  
  const handleDestinationClick = (destination: Destination) => {
    setSelectedDestination(destination);
    // Scroll to the detailed view section
    const detailSection = document.getElementById('destination-detail');
    if (detailSection) {
      detailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      urban: 'bg-blue-500',
      historical: 'bg-purple-600',
      nature: 'bg-green-600',
      cultural: 'bg-orange-600',
      unesco: 'bg-red-700',
    };
    return colors[category.toLowerCase()] || 'bg-gray-600';
  };
  
  return (
    <div className="min-h-screen">
      
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-black/40 to-black/40">
        <Image
          src="/api/placeholder/1600/400"
          alt="Mongolia Cultural Landscapes"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Discover Mongolia's Cultural Landscapes
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              Explore the diverse regions that have shaped Mongolia's unique heritage
            </p>
          </div>
        </div>
      </div>
      
      {/* Destinations Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">
            Destinations
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div 
                key={destination.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => handleDestinationClick(destination)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/api/placeholder/600/400"
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className={`
                    absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold 
                    uppercase text-white ${getCategoryColor(destination.category)}
                  `}>
                    {destination.category}
                  </span>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {destination.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Destination Detail Section */}
      <section id="destination-detail" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            Featured Destination
          </h2>
          
          {selectedDestination ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              
              {/* Image Column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/api/placeholder/800/600"
                    alt={selectedDestination.title}
                    fill
                    className="object-cover"
                  />
                  <span className={`
                    absolute top-4 left-4 px-3 py-2 rounded text-sm font-semibold 
                    uppercase text-white ${getCategoryColor(selectedDestination.category)}
                  `}>
                    {selectedDestination.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
                    {selectedDestination.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {selectedDestination.subtitle}
                  </p>
                  
                  {/* Highlights */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-900 mb-4">
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedDestination.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <span className="text-blue-600 mr-2 mt-1 flex-shrink-0">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="lg:col-span-3 flex flex-col">
                <div className="flex-grow">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedDestination.description}
                    </p>
                  </div>
                </div>
                
                {/* Explore More */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">
                    Explore More
                  </h4>
                  <Link 
                    href={`/destinations/${selectedDestination.id}`}
                    className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
                  >
                    Discover {selectedDestination.title}
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gray-50 rounded-lg p-12 max-w-md mx-auto">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600 text-lg">
                  Select a destination above to see detailed information
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}