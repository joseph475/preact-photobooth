import { h, Fragment } from 'preact';
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
  
  // Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
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
    <Fragment>
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
                src="/images/logo1.png" 
                alt="Jack PhotoBooth" 
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`} 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center space-x-6">
            <Link 
              href="/about" 
              className={`font-medium hover:text-blue-500 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              ABOUT US
            </Link>

            {/* Our Booths Dropdown */}
            <div className="relative group">
              <button 
                className={`font-medium hover:text-blue-500 transition-all duration-300 flex items-center ${
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
                    href="/jackspot" 
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 ${
                      isScrolled ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    THE JACKSPOT
                  </Link>
                  <Link 
                    href="/retrojack" 
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 ${
                      isScrolled ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    THE RETRO JACK
                  </Link>
                  <Link 
                    href="/jackspin" 
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 ${
                      isScrolled ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    JACKSpin (360 Booth)
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Events Dropdown */}
            <div className="relative group">
              <button 
                onClick={toggleEventsDropdown}
                className={`font-medium hover:text-blue-500 transition-all duration-300 flex items-center ${
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
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 ${
                      isScrolled ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    CORPORATE EVENTS
                  </Link>
                  <Link 
                    href="/packages/wedding" 
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 ${
                      isScrolled ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    WEDDING EVENTS
                  </Link>
                  <Link 
                    href="/packages/events" 
                    className={`block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 ${
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
              className={`font-medium hover:text-blue-500 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              BACKDROPS
            </Link>
            <Link 
              href="/gallery" 
              className={`font-medium hover:text-blue-500 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              GALLERY
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium hover:text-blue-500 transition-all duration-300 ${
                isScrolled ? 'text-sm' : 'text-base'
              }`}
            >
              CONTACT US
            </Link>
          </div>
          
          {/* Tablet Navigation - Only visible on tablet */}
          <div className="hidden md:flex xl:hidden items-center space-x-3 lg:space-x-5">
            <Link 
              href="/about" 
              className={`font-medium hover:text-blue-500 transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } lg:text-sm`}
            >
              ABOUT
            </Link>

            {/* Our Booths Dropdown - Tablet */}
            <div className="relative group">
              <button 
                className={`font-medium hover:text-blue-500 transition-all duration-300 flex items-center ${
                  isScrolled ? 'text-xs' : 'text-sm'
                } lg:text-sm`}
              >
                BOOTHS <span className="ml-1 inline-block">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width={isScrolled ? "8" : "10"} 
                    height={isScrolled ? "8" : "10"} 
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
              
              <div className="absolute top-full left-0 pt-2 w-40 lg:w-44">
                <div className="bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block hover:block">
                  <Link 
                    href="/jackspot" 
                    className="block px-3 py-1.5 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 text-xs lg:text-sm"
                  >
                    THE JACKSPOT
                  </Link>
                  <Link 
                    href="/retrojack" 
                    className="block px-3 py-1.5 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 text-xs lg:text-sm"
                  >
                    THE RETRO JACK
                  </Link>
                  <Link 
                    href="/jackspin" 
                    className="block px-3 py-1.5 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 text-xs lg:text-sm"
                  >
                    JACKSpin
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Events Dropdown - Tablet */}
            <div className="relative group">
              <button 
                className={`font-medium hover:text-blue-500 transition-all duration-300 flex items-center ${
                  isScrolled ? 'text-xs' : 'text-sm'
                } lg:text-sm`}
              >
                EVENTS <span className="ml-1 inline-block">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width={isScrolled ? "8" : "10"} 
                    height={isScrolled ? "8" : "10"} 
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
              
              <div className="absolute top-full left-0 pt-2 w-40 lg:w-44">
                <div className="bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block hover:block">
                  <Link 
                    href="/packages/corporate" 
                    className="block px-3 py-1.5 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 text-xs lg:text-sm"
                  >
                    CORPORATE
                  </Link>
                  <Link 
                    href="/packages/wedding" 
                    className="block px-3 py-1.5 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 text-xs lg:text-sm"
                  >
                    WEDDING
                  </Link>
                  <Link 
                    href="/packages/events" 
                    className="block px-3 py-1.5 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 text-xs lg:text-sm"
                  >
                    SPECIAL
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/backdrops" 
              className={`font-medium hover:text-blue-500 transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } lg:text-sm`}
            >
              BACKDROPS
            </Link>
            <Link 
              href="/gallery" 
              className={`font-medium hover:text-blue-500 transition-all duration-300 ${
                isScrolled ? 'text-xs' : 'text-sm'
              } lg:text-sm`}
            >
              GALLERY
            </Link>
          </div>

          {/* Book Now Button */}
          <div className="hidden xl:block">
            <Link 
              href="/contact" 
              className={`${isScrolled ? 'btn-blue-sm' : 'btn-blue'}`}
            >
              BOOK NOW
            </Link>
          </div>
          
          {/* Book Now Button - Tablet */}
          <div className="hidden md:block xl:hidden">
            <Link 
              href="/contact" 
              className="btn-blue-xs lg:btn-blue-sm"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              className={`bg-blue-500 text-white rounded-full transition-all duration-300 ${
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
      </nav>
      
      {/* Mobile Menu - Full screen overlay - Rendered outside the nav for better stacking */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black z-[9999] flex flex-col" 
          style={{ 
            backgroundColor: '#000000', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            width: '100vw', 
            height: '100vh' 
          }}
        >
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
                className="text-white text-2xl font-medium hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
              {/* Mobile Our Booths Dropdown */}
              <div className="w-full text-center">
                <button 
                  onClick={() => setIsOurBoothsOpen(!isOurBoothsOpen)}
                  className="text-white text-2xl font-medium hover:text-blue-500 transition-colors flex items-center justify-center w-full"
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
                      href="/jackspot" 
                      className="text-white text-xl font-medium hover:text-blue-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      THE JACKSPOT
                    </Link>
                    <Link 
                      href="/retrojack" 
                      className="text-white text-xl font-medium hover:text-blue-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      THE RETRO JACK
                    </Link>
                    <Link 
                      href="/jackspin" 
                      className="text-white text-xl font-medium hover:text-blue-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      JACKSpin (360 Booth)
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/backdrops" 
                className="text-white text-2xl font-medium hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                BACKDROPS
              </Link>
              <Link 
                href="/gallery" 
                className="text-white text-2xl font-medium hover:text-blue-500 transition-colors"
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
              {/* Mobile Events Dropdown */}
              <div className="w-full text-center">
                <button 
                  onClick={toggleEventsDropdown}
                  className="text-white text-2xl font-medium hover:text-blue-500 transition-colors flex items-center justify-center w-full"
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
                      className="text-white text-xl font-medium hover:text-blue-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      CORPORATE EVENTS
                    </Link>
                    <Link 
                      href="/packages/wedding" 
                      className="text-white text-xl font-medium hover:text-blue-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      WEDDING EVENTS
                    </Link>
                    <Link 
                      href="/packages/events" 
                      className="text-white text-xl font-medium hover:text-blue-500 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      SPECIAL EVENTS
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/contact" 
                className="btn-blue mt-4"
                onClick={closeMobileMenu}
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Navigation;
