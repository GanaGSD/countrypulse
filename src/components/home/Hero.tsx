// src/components/home/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { slides } from '@/data/hero';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative h-full w-full">
        
        {/* Slides Container */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`
                absolute top-0 left-0 w-full h-full
                transition-opacity duration-1000 ease-in-out
                bg-cover bg-center bg-no-repeat
                ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
              style={{
                backgroundImage: slide.type === 'image' ? `url(${slide.src})` : 'none',
              }}
            >

              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 z-10" />

              {/* Slide Content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 w-4/5 max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/destinations" 
                    className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors duration-200 shadow-lg"
                  >
                    Explore Destinations
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-5 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white border-none rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <span className="text-xl leading-none">❮</span>
          </button>

          <button
            className="absolute top-1/2 right-5 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white border-none rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <span className="text-xl leading-none">❯</span>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`
                w-2.5 h-2.5 rounded-full border-none cursor-pointer
                transition-all duration-300 p-0 m-0
                ${index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
                }
              `}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}