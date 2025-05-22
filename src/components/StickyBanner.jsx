import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

const StickyBanner = () => {
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef(null);
  const bannerHeight = useRef(0);
  
  useEffect(() => {
    if (bannerRef.current) {
      bannerHeight.current = bannerRef.current.offsetHeight;
    }
    
    const handleScroll = () => {
      // Make the banner sticky after scrolling past the hero section
      // Assuming hero section is 100vh
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (scrollPosition > viewportHeight - 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={bannerRef}
      className={`w-full transition-all duration-300 ${
        isSticky ? 'fixed top-16 left-0 right-0 z-20' : 'relative'
      }`}
    >
      <div className="relative h-[30vh] overflow-hidden">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Photo Booth Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/60 to-black/60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold text-center px-4">
            VANCOUVER'S PREMIER PHOTO BOOTH RENTAL
          </h2>
        </div>
      </div>
      
      {/* Add a spacer div when the banner becomes sticky to prevent content jump */}
      {isSticky && (
        <div style={{ height: '30vh' }} className="w-full"></div>
      )}
    </div>
  );
};

export default StickyBanner;
