"use client"
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed md:top-15 left-0 md:right-20 z-40 ">
        <div className="flex justify-end px-4 sm:px-6 py-4">
          
          <button
            onClick={toggleMenu}
            className="w-10 h-10 md:w-15 md:h-15 sm:w-12 sm:h-12 rounded-full bg-stone-500 text-white flex items-center justify-center hover:bg-stone-400 transition-colors"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <span className='flex flex-col gap-1.5'>
                <span className="block w-7 h-0.5 bg-white"/>
                <span className="block w-7 h-0.5 bg-white"/>
                <span className="block w-5 h-0.5 bg-white"/>
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Close button in top right */}
          <div className="absolute md:top-11 md:right-10">
            <button
              onClick={toggleMenu}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <nav className="space-y-8">
              <a 
                href="#" 
                className="block text-3xl sm:text-4xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#" 
                className="block text-3xl sm:text-4xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#" 
                className="block text-3xl sm:text-4xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                Places
              </a>
              <a 
                href="#" 
                className="block text-3xl sm:text-4xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                Culture
              </a>
              <a 
                href="#" 
                className="block text-3xl sm:text-4xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

