import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const RecentImagesCarousel = () => {
  // Images for the carousel - in a real app, these would be fetched from an API
  const recentImages = [
    { id: 1, src: '/images/7.jpg', caption: 'Wedding Photo Booth' },
    { id: 2, src: '/images/6.jpeg', caption: 'Corporate Event' },
    { id: 3, src: '/images/8.jpg', caption: 'Birthday Party' },
    { id: 4, src: '/images/10.jpg', caption: 'Anniversary Celebration' },
    { id: 5, src: '/images/11.jpg', caption: 'Graduation Party' }
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % recentImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [recentImages.length]);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? recentImages.length - 1 : prevSlide - 1
    );
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide + 1) % recentImages.length
    );
  };

  // Go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get previous slide index
  const getPrevSlideIndex = () => {
    return currentSlide === 0 ? recentImages.length - 1 : currentSlide - 1;
  };

  // Get next slide index
  const getNextSlideIndex = () => {
    return (currentSlide + 1) % recentImages.length;
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="relative h-64 md:h-96">
        {/* Carousel container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-full max-w-full mx-auto">
            {/* Previous slide (smaller and blurred) */}
            <div 
              className="w-2/5 h-64 md:h-80 mx-2 transform scale-90 transition-all duration-500 cursor-pointer opacity-70 hover:opacity-90"
              onClick={prevSlide}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={recentImages[getPrevSlideIndex()].src} 
                  alt="Previous" 
                  className="w-full h-full object-cover filter blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
            </div>
            
            {/* Current slide (larger and focused) */}
            <div className="w-3/5 h-64 md:h-96 mx-2 transform scale-110 z-20 transition-all duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={recentImages[currentSlide].src} 
                  alt={`Recent upload ${currentSlide + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-lg font-semibold">{recentImages[currentSlide].caption}</p>
                  <p className="text-white text-sm opacity-80">Recently uploaded</p>
                </div>
              </div>
            </div>
            
            {/* Next slide (smaller and blurred) */}
            <div 
              className="w-2/5 h-64 md:h-80 mx-2 transform scale-90 transition-all duration-500 cursor-pointer opacity-70 hover:opacity-90"
              onClick={nextSlide}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={recentImages[getNextSlideIndex()].src} 
                  alt="Next" 
                  className="w-full h-full object-cover filter blur-sm"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-30 hover:bg-opacity-75 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-30 hover:bg-opacity-75 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
        {recentImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentImagesCarousel;
