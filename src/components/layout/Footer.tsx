import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Country Pulse</h3>
            <p className="text-gray-300 leading-relaxed">
              Your guide to exploring cultures, destinations, and experiences around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/destinations" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link 
                  href="/experiences" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* More Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/culture" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Culture & Customs
                </Link>
              </li>
              <li>
                <Link 
                  href="/magazine" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Magazine
                </Link>
              </li>
              <li>
                <Link 
                  href="/resources" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social/Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Follow us for updates and travel inspiration
              </p>
              <div className="flex space-x-4">
                {/* Social media links can be added here */}
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-xs">IG</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                  <span className="text-xs">TW</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Country Pulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}