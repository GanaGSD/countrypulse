// src/components/home/Magazine.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  readingTime: number;
  isFavorite?: boolean;
}

export default function MagazineSection() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (articleId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(articleId)) {
      newFavorites.delete(articleId);
    } else {
      newFavorites.add(articleId);
    }
    setFavorites(newFavorites);
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'handicrafts and design': 'bg-red-600',
      'unesco': 'bg-purple-600',
      'shopping': 'bg-orange-600',
      'nature': 'bg-green-600',
    };
    return colors[category.toLowerCase()] || 'bg-gray-600';
  };

  const featuredArticle: Article = {
    id: 'featured-1',
    title: 'Carved in History: The Ancient Art of Mongolian Stone Craft',
    category: 'Handicrafts and design',
    categoryColor: 'bg-red-600',
    image: '/api/placeholder/800/600',
    readingTime: 2,
  };

  const articles: Article[] = [
    {
      id: 'article-1',
      title: 'Orkhon Valley: Mongolia\'s Ancient Cultural Landscape',
      category: 'UNESCO',
      categoryColor: 'bg-purple-600',
      image: '/api/placeholder/200/200',
      readingTime: 4,
    },
    {
      id: 'article-2',
      title: 'The shopping guide: seven markets for authentic Mongolian crafts',
      category: 'Shopping',
      categoryColor: 'bg-orange-600',
      image: '/api/placeholder/200/200',
      readingTime: 5,
    },
    {
      id: 'article-3',
      title: '9 places in Mongolia where waking at sunset up feels like a dream',
      category: 'Nature',
      categoryColor: 'bg-green-600',
      image: '/api/placeholder/200/200',
      readingTime: 4,
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-4">
          <div className="max-w-4xl">
            <h2 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
              MAGAZINE
            </h2>
            <h3 className="text-2xl lg:text-4xl font-bold text-blue-900 leading-tight">
              The source of inspiration for your adventures
            </h3>
          </div>
          <Link 
            href="/magazine" 
            className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-600 transition-colors duration-200 self-end"
          >
            View all 
            <span className="ml-2 text-lg">→</span>
          </Link>
        </div>

        {/* Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Featured Article */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-96 lg:h-[400px]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
              
              {/* Category Badge */}
              <span className={`
                absolute top-4 left-4 px-3 py-2 rounded text-xs font-semibold 
                uppercase text-white ${getCategoryColor(featuredArticle.category)}
              `}>
                {featuredArticle.category}
              </span>
              
              {/* Favorite Button */}
              <button
                className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
                onClick={() => toggleFavorite(featuredArticle.id)}
                aria-label="Add to favorites"
              >
                <span className={`text-xl leading-none ${
                  favorites.has(featuredArticle.id) ? 'text-red-500' : 'text-gray-500'
                }`}>
                  {favorites.has(featuredArticle.id) ? '♥' : '♡'}
                </span>
              </button>
            </div>
            
            {/* Article Content */}
            <div className="p-6">
              <h4 className="text-xl font-semibold text-blue-900 mb-4 leading-tight">
                {featuredArticle.title}
              </h4>
              <div className="flex items-center text-gray-600 text-sm">
                <span className="flex items-center">
                  <span className="mr-1">⏱️</span>
                  {featuredArticle.readingTime} minutes
                </span>
              </div>
            </div>
          </div>

          {/* Article List */}
          <div className="flex flex-col gap-6">
            {articles.map((article) => (
              <div 
                key={article.id}
                className="grid grid-cols-[100px_1fr_40px] sm:grid-cols-[120px_1fr_40px] gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative w-full h-24 sm:h-30 rounded overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Article Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className={`
                      inline-block px-2 py-1 rounded text-xs font-semibold 
                      uppercase text-white mb-2 ${getCategoryColor(article.category)}
                    `}>
                      {article.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-900 leading-tight mb-2">
                      {article.title}
                    </h4>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {article.readingTime} minutes
                    </span>
                  </div>
                </div>
                
                {/* Favorite Button */}
                <button
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-200 self-start mt-2"
                  onClick={() => toggleFavorite(article.id)}
                  aria-label="Add to favorites"
                >
                  <span className={`text-lg leading-none ${
                    favorites.has(article.id) ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    {favorites.has(article.id) ? '♥' : '♡'}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}