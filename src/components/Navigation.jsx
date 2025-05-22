import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isOurBoothsOpen, setIsOurBoothsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isEventsOpen) setIsEventsOpen(false);
    if (isOurBoothsOpen) setIsOurBoothsOpen(false);
  };
  
  const toggleEventsDropdown = () => {
    setIsEventsOpen(!isEventsOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsEventsOpen(false);
    setIsOurBoothsOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-sm'
    }`}>
      <div className={`container mx-auto px-4 ${
        isScrolled ? 'py-2' : 'py-4'
      } flex justify-between items-center transition-all duration-300`}>
        {/* Logo - Left aligned */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <img 
              src="/images/logo.png" 
              alt="Jack PhotoBooth" 
              className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`} 
            />
          </Link>
        </div>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            href="/about" 
            className={`font-medium hover:text-pink-500 transition-all duration-300 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}
          >
            ABOUT US
          </Link>

          {/* Our Booths Dropdown */}
          <div className="relative group">
            <button 
              className={`font-medium hover:text-pink-500 transition-all duration-300 flex items-center ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              OUR BOOTHS <span className="ml-1 inline-block">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={isScrolled ? "10" : "12"} 
                  height={isScrolled ? "10" : "12"} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            
            {/* Added pt-2 to create padding that connects the dropdown to the button */}
            <div className="absolute top-full left-0 pt-2 w-48">
              <div className="bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block hover:block">
                <Link 
                  href="/ai-booth" 
                  className={`block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  AI BOOTH
                </Link>
                <Link 
                  href="/selfie-station" 
                  className={`block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  SELFIE STATION
                </Link>
                <Link 
                  href="/open-air-photobooth" 
                  className={`block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  OPEN-AIR PHOTOBOOTH
                </Link>
              </div>
            </div>
          </div>
          
          {/* Events Dropdown */}
          <div className="relative group">
            <button 
              onClick={toggleEventsDropdown}
              className={`font-medium hover:text-pink-500 transition-all duration-300 flex items-center ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              EVENTS <span className="ml-1 inline-block">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={isScrolled ? "10" : "12"} 
                  height={isScrolled ? "10" : "12"} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            
            {/* Added pt-2 to create padding that connects the dropdown to the button */}
            <div className="absolute top-full left-0 pt-2 w-48">
              <div className="bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block hover:block">
                <Link 
                  href="/packages/corporate" 
                  className={`block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  CORPORATE EVENTS
                </Link>
                <Link 
                  href="/packages/wedding" 
                  className={`block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  WEDDING EVENTS
                </Link>
                <Link 
                  href="/packages/graduation" 
                  className={`block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  GRADUATION EVENTS
                </Link>
                <Link 
                  href="/packages/events" 
                  className={`block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white transition-all duration-300 ${
                    isScrolled ? 'text-xs' : 'text-sm'
                  }`}
                >
                  SPECIAL EVENTS
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/backdrops" 
            className={`font-medium hover:text-pink-500 transition-all duration-300 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}
          >
            BACKDROPS
          </Link>

          <Link 
            href="/contact" 
            className={`font-medium hover:text-pink-500 transition-all duration-300 ${
              isScrolled ? 'text-sm' : 'text-base'
            }`}
          >
            CONTACT US
          </Link>
        </div>
        
        {/* Book Now Button */}
        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className={`bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition-all duration-300 ${
              isScrolled ? 'py-2 px-5 text-sm' : 'py-3 px-6'
            }`}
          >
            BOOK NOW
          </Link>
        </div>
        
        {/* Mobile menu button and Book Now */}
        <div className="flex items-center md:hidden">
          <Link 
            href="/contact" 
            className={`bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full mr-4 transition-all duration-300 ${
              isScrolled ? 'py-1.5 px-3 text-xs' : 'py-2 px-4 text-sm'
            }`}
          >
            BOOK NOW
          </Link>
          
          <button 
            className={`bg-pink-500 text-white rounded-full transition-all duration-300 ${
              isScrolled ? 'p-1.5' : 'p-2'
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`transition-all duration-300 ${
                isScrolled ? 'h-5 w-5' : 'h-6 w-6'
              }`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`transition-all duration-300 ${
                isScrolled ? 'h-5 w-5' : 'h-6 w-6'
              }`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Full screen overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-end mb-8">
              <button 
                onClick={closeMobileMenu}
                className="text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 items-center">
              <Link 
                href="/about" 
                className="text-white text-2xl font-medium hover:text-pink-500 transition-colors"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
              {/* Mobile Our Booths Dropdown */}
              <div className="w-full text-center">
                <button 
                  onClick={() => setIsOurBoothsOpen(!isOurBoothsOpen)}
                  className="text-white text-2xl font-medium hover:text-pink-500 transition-colors flex items-center justify-center w-full"
                >
                  OUR BOOTHS <span className="ml-2 inline-block">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={`transition-transform duration-300 ${isOurBoothsOpen ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                
                {isOurBoothsOpen && (
                  <div className="mt-4 flex flex-col space-y-4">
                    <Link 
                      href="/ai-booth" 
                      className="text-white text-xl font-medium hover:text-pink-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      AI BOOTH
                    </Link>
                    <Link 
                      href="/selfie-station" 
                      className="text-white text-xl font-medium hover:text-pink-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      SELFIE STATION
                    </Link>
                    <Link 
                      href="/open-air-photobooth" 
                      className="text-white text-xl font-medium hover:text-pink-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      OPEN-AIR PHOTOBOOTH
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/backdrops" 
                className="text-white text-2xl font-medium hover:text-pink-500 transition-colors"
                onClick={closeMobileMenu}
              >
                BACKDROPS
              </Link>
              
              {/* Mobile Events Dropdown */}
              <div className="w-full text-center">
                <button 
                  onClick={toggleEventsDropdown}
                  className="text-white text-2xl font-medium hover:text-pink-500 transition-colors flex items-center justify-center w-full"
                >
                  EVENTS <span className="ml-2 inline-block">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className={`transition-transform duration-300 ${isEventsOpen ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                
                {isEventsOpen && (
                  <div className="mt-4 flex flex-col space-y-4">
                    <Link 
                      href="/packages/corporate" 
                      className="text-white text-xl font-medium hover:text-pink-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      CORPORATE EVENTS
                    </Link>
                    <Link 
                      href="/packages/wedding" 
                      className="text-white text-xl font-medium hover:text-pink-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      WEDDING EVENTS
                    </Link>
                    <Link 
                      href="/packages/graduation" 
                      className="text-white text-xl font-medium hover:text-pink-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      GRADUATION EVENTS
                    </Link>
                    <Link 
                      href="/packages/events" 
                      className="text-white text-xl font-medium hover:text-pink-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      SPECIAL EVENTS
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/contact" 
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full mt-4 transition-all duration-300"
                onClick={closeMobileMenu}
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
