import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const ScrollToTop = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    const shouldBeVisible = window.pageYOffset > 300;
    setIsVisible(shouldBeVisible);
    
    // Notify parent component about visibility change
    if (onVisibilityChange) {
      onVisibilityChange(shouldBeVisible);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[150] transition-all duration-300 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ touchAction: 'manipulation' }}
    >
      <button
        onClick={scrollToTop}
        className="bg-gray-600 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
        style={{ cursor: 'pointer' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
