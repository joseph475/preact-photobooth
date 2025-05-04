import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';

const Navigation = () => {
  const [isPhotoBoothOpen, setIsPhotoBoothOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const togglePhotoBoothDropdown = () => {
    setIsPhotoBoothOpen(!isPhotoBoothOpen);
    if (isMoreOpen) setIsMoreOpen(false);
  };

  const toggleMoreDropdown = () => {
    setIsMoreOpen(!isMoreOpen);
    if (isPhotoBoothOpen) setIsPhotoBoothOpen(false);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdowns when toggling mobile menu
    if (isPhotoBoothOpen) setIsPhotoBoothOpen(false);
    if (isMoreOpen) setIsMoreOpen(false);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-md shadow-md' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-[98%] xl:max-w-[1600px]">
        {/* Left section - first 3 tabs */}
        <div className="hidden md:flex space-x-8 flex-1">
          <Link href="/" className="font-medium hover:text-blue-500 transition-colors">HOME</Link>
          <Link href="/about" className="font-medium hover:text-blue-500 transition-colors">ABOUT US</Link>
          <div className="relative">
            <button 
              onClick={togglePhotoBoothDropdown}
              className="font-medium hover:text-blue-500 transition-colors flex items-center"
            >
              PHOTO BOOTH PACKAGES ▼
              <span className="ml-1"></span>
            </button>
            
            {isPhotoBoothOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md py-2 w-48">
                <Link href="/packages/wedding" className="block px-4 py-2 hover:bg-gray-100">WEDDING</Link>
                <Link href="/packages/events" className="block px-4 py-2 hover:bg-gray-100">EVENTS</Link>
                <Link href="/packages/corporate" className="block px-4 py-2 hover:bg-gray-100">CORPORATE EVENTS</Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Middle section - logo */}
        <div className="flex justify-center">
          <Link href="/" className="text-2xl font-bold">
            <img src="/images/logo.png" alt="Jack PhotoBooth" className="h-20" />
          </Link>
        </div>
        
        {/* Right section - remaining tabs */}
        <div className="hidden md:flex space-x-8 flex-1 justify-end">
          <Link href="/360-glam-booth" className="font-medium hover:text-blue-500 transition-colors">360 GLAM BOOTH</Link>
          <Link href="/backdrops" className="font-medium hover:text-blue-500 transition-colors">BACKDROPS</Link>
          <div className="relative">
            <button 
              onClick={toggleMoreDropdown}
              className="font-medium hover:text-blue-500 transition-colors flex items-center"
            >
              MORE ▼
              <span className="ml-1"></span>
            </button>
            
              {isMoreOpen && (
                <div className="absolute top-full right-0 bg-white shadow-md py-2 w-48">
                  <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">CONTACT US</Link>
                  <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100">GALLERY</Link>
                  <Link href="/test-facebook-auth" className="block px-4 py-2 hover:bg-gray-100">FB AUTH TEST</Link>
                </div>
              )}
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="py-2 px-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 font-medium hover:text-blue-500 transition-colors"
              onClick={closeMobileMenu}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="block py-2 font-medium hover:text-blue-500 transition-colors"
              onClick={closeMobileMenu}
            >
              ABOUT US
            </Link>
            
            {/* Mobile Photo Booth Dropdown */}
            <div className="py-2">
              <button 
                onClick={togglePhotoBoothDropdown}
                className="w-full text-left font-medium hover:text-blue-500 transition-colors flex items-center justify-between"
              >
                PHOTO BOOTH PACKAGES
                <span className="ml-1">{isPhotoBoothOpen ? '▲' : '▼'}</span>
              </button>
              
              {isPhotoBoothOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                  <Link 
                    href="/packages/wedding" 
                    className="block py-1 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    WEDDING
                  </Link>
                  <Link 
                    href="/packages/events" 
                    className="block py-1 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    EVENTS
                  </Link>
                  <Link 
                    href="/packages/corporate" 
                    className="block py-1 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    CORPORATE EVENTS
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/360-glam-booth" 
              className="block py-2 font-medium hover:text-blue-500 transition-colors"
              onClick={closeMobileMenu}
            >
              360 GLAM BOOTH
            </Link>
            <Link 
              href="/backdrops" 
              className="block py-2 font-medium hover:text-blue-500 transition-colors"
              onClick={closeMobileMenu}
            >
              BACKDROPS
            </Link>
            
            {/* Mobile More Dropdown */}
            <div className="py-2">
              <button 
                onClick={toggleMoreDropdown}
                className="w-full text-left font-medium hover:text-blue-500 transition-colors flex items-center justify-between"
              >
                MORE
                <span className="ml-1">{isMoreOpen ? '▲' : '▼'}</span>
              </button>
              
              {isMoreOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                  <Link 
                    href="/contact" 
                    className="block py-1 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    CONTACT US
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="block py-1 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    GALLERY
                  </Link>
                  <Link 
                    href="/test-facebook-auth" 
                    className="block py-1 hover:text-blue-500"
                    onClick={closeMobileMenu}
                  >
                    FB AUTH TEST
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
