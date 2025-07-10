'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 70;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full h-[75px] z-50
        bg-white shadow-sm
        transition-transform duration-300 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-4">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-16 h-16 group">
            <Image
              src="/potenslogob.svg"
              alt="Country Pulse Logo"
              width={64}
              height={64}
              className="absolute transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/potenslogoa.png"
              alt="Country Pulse Logo Hover"
              width={64}
              height={64}
              className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-200 ${
            isMenuOpen ? 'opacity-0' : ''
          }`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                href="/destinations" 
                className="text-gray-800 font-semibold text-lg px-4 py-2 rounded-md hover:text-red-600 transition-colors duration-200"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link 
                href="/experiences" 
                className="text-gray-800 font-semibold text-lg px-4 py-2 rounded-md hover:text-red-600 transition-colors duration-200"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link 
                href="/magazine" 
                className="text-gray-800 font-semibold text-lg px-4 py-2 rounded-md hover:text-red-600 transition-colors duration-200"
              >
                Magazine
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`
          md:hidden absolute top-[75px] left-0 right-0 
          bg-white/98 shadow-lg
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}>
          <ul className="flex flex-col">
            <li>
              <Link 
                href="/destinations" 
                className="block w-full px-6 py-4 text-gray-800 font-semibold border-l-4 border-transparent hover:border-red-600 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link 
                href="/experiences" 
                className="block w-full px-6 py-4 text-gray-800 font-semibold border-l-4 border-transparent hover:border-red-600 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link 
                href="/magazine" 
                className="block w-full px-6 py-4 text-gray-800 font-semibold border-l-4 border-transparent hover:border-red-600 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Magazine
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}