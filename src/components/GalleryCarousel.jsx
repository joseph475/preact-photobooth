import { h } from 'preact';
import { useState } from 'preact/hooks';

/**
 * GalleryCarousel Component
 * 
 * A full-width carousel that displays multiple images at once.
 * 
 * @param {Object} props
 * @param {Array} props.images - Array of image objects with src, alt, caption, and subcaption properties
 * @param {number} props.itemsPerSlide - Number of images to show per slide (default: 5)
 * @param {string} props.title - Optional title for the carousel section
 */
const GalleryCarousel = ({ 
  images, 
  itemsPerSlide = 5, 
  title = "Gallery"
}) => {
  // Calculate how many "pages" of images we have
  const totalSlides = Math.ceil(images.length / itemsPerSlide);
  
  // State for current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance carousel functionality removed as requested

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      (prevSlide + 1) % totalSlides
    );
  };

  // Get current images to display
  const getCurrentImages = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return images.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          {title}
        </h2>
      )}
      
      <div className="relative w-full">
        {/* Main Carousel */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Generate slides */}
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const slideImages = images.slice(
                slideIndex * itemsPerSlide, 
                slideIndex * itemsPerSlide + itemsPerSlide
              );
              
              return (
                <div key={slideIndex} className="w-full flex-shrink-0 flex space-x-4 px-4">
                  {slideImages.map((image) => (
                    <div 
                      key={image.id} 
                      className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="relative h-64 md:h-80">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 text-center border-t">
                        <h3 className="text-xl font-bold text-gray-800">{image.caption}</h3>
                        <p className="text-sm text-gray-600 uppercase tracking-wider">{image.subcaption}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add empty placeholders if needed to fill the row */}
                  {slideImages.length < itemsPerSlide && 
                    Array.from({ length: itemsPerSlide - slideImages.length }).map((_, i) => (
                      <div key={`empty-${i}`} className="flex-1"></div>
                    ))
                  }
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-20 hover:bg-opacity-75 transition-colors"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-20 hover:bg-opacity-75 transition-colors"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicator dots */}
        {totalSlides > 1 && (
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCarousel;
