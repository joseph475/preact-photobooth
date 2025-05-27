import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { getOptimizedImageUrl } from '../utils/imageUtils';
import { searchImages, listImages } from '../services/cloudinaryService';

const RecentImagesCarousel = () => {
  // State for carousel images
  const [recentImages, setRecentImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch recent images from Cloudinary
  useEffect(() => {
    const fetchRecentImages = async () => {
      try {
        setIsLoading(true);
        
        // If Cloudinary is configured, fetch images from there
        if (process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME) {
          try {
            // Try with listImages using the asset_folder endpoint
            try {
              const listResult = await listImages('photobooth');
              
              console.log('Carousel: Cloudinary listImages result:', listResult);
              
              if (listResult && listResult.resources) {
                // Map the Cloudinary resources to our carousel format (take only the first 5)
                const cloudinaryImages = listResult.resources
                  .slice(0, 5)
                  .map((resource, index) => {
                    // Log each resource to see its structure
                    console.log('Carousel Resource:', resource);
                    
                    // Try to extract a caption from the resource
                    let caption = 'Photo Booth Image';
                    
                    // Try to get caption from display_name, context or tags
                    if (resource.display_name) {
                      caption = resource.display_name;
                    } else if (resource.context && resource.context.custom && resource.context.custom.caption) {
                      caption = resource.context.custom.caption;
                    } else if (resource.tags && resource.tags.length > 0) {
                      // Use the first tag as a caption
                      caption = resource.tags[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                    } else {
                      // Try to extract a meaningful name from the public_id
                      const parts = resource.public_id.split('/');
                      const filename = parts[parts.length - 1];
                      if (filename) {
                        caption = filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                      }
                    }
                    
                    return {
                      id: index + 1,
                      publicId: resource.public_id,
                      src: resource.secure_url || getOptimizedImageUrl(resource.public_id, {
                        width: 800,
                        height: 600,
                        crop: 'fill',
                        quality: 'auto'
                      }),
                      caption
                    };
                  });
                
                setRecentImages(cloudinaryImages);
                setIsLoading(false);
                return;
              }
            } catch (listError) {
              console.error('Carousel: Error listing images from Cloudinary:', listError);
              // Fall through to search method
            }
            
            // Fallback to search method
            const searchResult = await searchImages({
              expression: 'folder:photobooth', // Use correct syntax for folder search
              max_results: 5
            });
            
            console.log('Carousel: Cloudinary searchImages result:', searchResult);
            
            if (searchResult && searchResult.resources && searchResult.resources.length > 0) {
              // Map the Cloudinary resources to our carousel format
              const cloudinaryImages = searchResult.resources.map((resource, index) => {
                // Try to extract a caption from the resource
                let caption = 'Photo Booth Image';
                
                // Try to get caption from context or tags
                if (resource.context && resource.context.custom && resource.context.custom.caption) {
                  caption = resource.context.custom.caption;
                } else if (resource.tags && resource.tags.length > 0) {
                  // Use the first tag as a caption
                  caption = resource.tags[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                } else {
                  // Try to extract a meaningful name from the public_id
                  const parts = resource.public_id.split('/');
                  const filename = parts[parts.length - 1];
                  if (filename) {
                    caption = filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                  }
                }
                
                return {
                  id: index + 1,
                  publicId: resource.public_id,
                  src: getOptimizedImageUrl(resource.public_id, {
                    width: 800,
                    height: 600,
                    crop: 'fill',
                    quality: 'auto'
                  }),
                  caption
                };
              });
              
              setRecentImages(cloudinaryImages);
              setIsLoading(false);
              return;
            }
          } catch (cloudinaryError) {
            console.error('Error fetching from Cloudinary:', cloudinaryError);
            // Continue to fallback
          }
        }
        
        // Fallback to local images if Cloudinary fetch fails or is not configured
        const fallbackImages = [
          { id: 1, src: '/images/7.jpg', publicId: 'photobooth/7', caption: 'Wedding Photo Booth' },
          { id: 2, src: '/images/6.jpeg', publicId: 'photobooth/6', caption: 'Corporate Event' },
          { id: 3, src: '/images/8.jpg', publicId: 'photobooth/8', caption: 'Birthday Party' },
          { id: 4, src: '/images/10.jpg', publicId: 'photobooth/10', caption: 'Anniversary Celebration' },
          { id: 5, src: '/images/11.jpg', publicId: 'photobooth/11', caption: 'Graduation Party' }
        ];
        
        setRecentImages(fallbackImages);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching recent images:', err);
        setError('Failed to load recent images');
        setIsLoading(false);
      }
    };
    
    fetchRecentImages();
  }, []);

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
      {isLoading ? (
        <div className="flex justify-center items-center h-64 md:h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-64 md:h-96">
          <p className="text-red-500">{error}</p>
        </div>
      ) : recentImages.length > 0 ? (
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
                    loading="lazy"
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
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 md:h-96">
          <p className="text-gray-500">No recent images available</p>
        </div>
      )}

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
