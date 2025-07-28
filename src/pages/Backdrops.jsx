import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getOptimizedImageUrl, isCloudinaryUrl } from '../utils/imageUtils';
import { listImages } from '../services/cloudinaryService';

const Backdrops = () => {
  // State for backdrop images
  const [backdropImages, setBackdropImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Fetch backdrop images from Cloudinary
  useEffect(() => {
    const fetchBackdrops = async () => {
      try {
        setIsLoading(true);
        
        // If Cloudinary is configured, fetch images from backdrops folder
        if (process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME) {
          try {
            const backdropResult = await listImages('backdrops', { max_results: 100 });
            
            console.log('Cloudinary backdrops folder result:', backdropResult);
            
            if (backdropResult && backdropResult.resources && backdropResult.resources.length > 0) {
              const backdrops = backdropResult.resources.map((resource, index) => ({
                id: `backdrop-${index + 1}`,
                publicId: resource.public_id,
                src: resource.secure_url || getOptimizedImageUrl(resource.public_id, {
                  width: 600,
                  height: 600,
                  crop: 'fill',
                  quality: 'auto'
                }),
                name: resource.metadata?.title || resource.display_name || resource.public_id.split('/').pop().replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                created_at: resource.created_at
              }));
              
              // Sort backdrops by creation date (newest first)
              backdrops.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
              
              console.log('Processed backdrop images:', backdrops);
              
              setBackdropImages(backdrops);
              setIsLoading(false);
              return;
            }
          } catch (cloudinaryError) {
            console.error('Error fetching from Cloudinary backdrops folder:', cloudinaryError);
            // Continue to fallback
          }
        }
        
        // Fallback to local images if Cloudinary fetch fails or is not configured
        const fallbackBackdrops = [
          { id: 1, name: 'Champagne Gold Sequin', src: '/images/1.jpeg', publicId: 'backdrops/champagne-gold-sequin', created_at: '2023-05-01T12:00:00Z' },
          { id: 2, name: 'White Flower Wall', src: '/images/2.jpeg', publicId: 'backdrops/white-flower-wall', created_at: '2023-05-02T12:00:00Z' },
          { id: 3, name: 'Pink and Gold Marble', src: '/images/3.jpeg', publicId: 'backdrops/pink-gold-marble', created_at: '2023-05-03T12:00:00Z' },
          { id: 4, name: 'Gold Sequin', src: '/images/4.jpeg', publicId: 'backdrops/gold-sequin', created_at: '2023-05-04T12:00:00Z' },
          { id: 5, name: 'Rustic', src: '/images/5.jpeg', publicId: 'backdrops/rustic', created_at: '2023-05-05T12:00:00Z' },
          { id: 6, name: 'The Tropics', src: '/images/6.jpeg', publicId: 'backdrops/tropics', created_at: '2023-05-06T12:00:00Z' },
          { id: 7, name: 'White and Gold Geometric', src: '/images/7.jpg', publicId: 'backdrops/white-gold-geometric', created_at: '2023-05-07T12:00:00Z' },
          { id: 8, name: 'Black and Gold Leaves', src: '/images/8.jpg', publicId: 'backdrops/black-gold-leaves', created_at: '2023-05-08T12:00:00Z' },
          { id: 9, name: 'Black and Gold Geometric', src: '/images/9.jpg', publicId: 'backdrops/black-gold-geometric', created_at: '2023-05-09T12:00:00Z' },
          { id: 10, name: 'White Floral', src: '/images/10.jpg', publicId: 'backdrops/white-floral', created_at: '2023-05-10T12:00:00Z' },
          { id: 11, name: 'Green Screen', src: '/images/11.jpg', publicId: 'backdrops/green-screen', created_at: '2023-05-11T12:00:00Z' },
          { id: 12, name: 'Black Marble', src: '/images/1.jpeg', publicId: 'backdrops/black-marble', created_at: '2023-05-12T12:00:00Z' },
          { id: 13, name: 'White Marble', src: '/images/2.jpeg', publicId: 'backdrops/white-marble', created_at: '2023-05-13T12:00:00Z' },
          { id: 14, name: 'Water Depths', src: '/images/3.jpeg', publicId: 'backdrops/water-depths', created_at: '2023-05-14T12:00:00Z' },
          { id: 15, name: 'Brushed Smoke', src: '/images/4.jpeg', publicId: 'backdrops/brushed-smoke', created_at: '2023-05-15T12:00:00Z' },
          { id: 16, name: 'Disco', src: '/images/5.jpeg', publicId: 'backdrops/disco', created_at: '2023-05-16T12:00:00Z' },
          { id: 17, name: 'Shine Bright Like Diamonds', src: '/images/6.jpeg', publicId: 'backdrops/diamonds', created_at: '2023-05-17T12:00:00Z' },
          { id: 18, name: 'String Lights', src: '/images/7.jpg', publicId: 'backdrops/string-lights', created_at: '2023-05-18T12:00:00Z' },
          { id: 19, name: 'Gold Diamonds', src: '/images/8.jpg', publicId: 'backdrops/gold-diamonds', created_at: '2023-05-19T12:00:00Z' },
          { id: 20, name: 'Nude Aesthetic', src: '/images/9.jpg', publicId: 'backdrops/nude-aesthetic', created_at: '2023-05-20T12:00:00Z' },
          { id: 21, name: 'Splash of Gold', src: '/images/10.jpg', publicId: 'backdrops/splash-gold', created_at: '2023-05-21T12:00:00Z' },
          { id: 22, name: 'Rose Gold Swirl', src: '/images/11.jpg', publicId: 'backdrops/rose-gold-swirl', created_at: '2023-05-22T12:00:00Z' },
          { id: 23, name: 'Christmas 1', src: '/images/1.jpeg', publicId: 'backdrops/christmas-1', created_at: '2023-05-23T12:00:00Z' },
          { id: 24, name: 'Christmas 2', src: '/images/2.jpeg', publicId: 'backdrops/christmas-2', created_at: '2023-05-24T12:00:00Z' },
          { id: 25, name: 'Christmas 3', src: '/images/3.jpeg', publicId: 'backdrops/christmas-3', created_at: '2023-05-25T12:00:00Z' },
          { id: 26, name: 'Christmas 4', src: '/images/4.jpeg', publicId: 'backdrops/christmas-4', created_at: '2023-05-26T12:00:00Z' }
        ];
        
        setBackdropImages(fallbackBackdrops);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching backdrop images:', err);
        setError('Failed to load backdrop images. Please try again later.');
        setIsLoading(false);
      }
    };
    
    fetchBackdrops();
  }, []);

  // Open lightbox with selected image
  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to next/previous image in lightbox
  const navigateImage = (direction) => {
    const currentIndex = backdropImages.findIndex(img => img.id === currentImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % backdropImages.length;
    } else {
      newIndex = (currentIndex - 1 + backdropImages.length) % backdropImages.length;
    }
    
    setCurrentImage(backdropImages[newIndex]);
  };
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-br from-green-700 to-teal-500 py-20 overflow-hidden">
          {/* Decorative Frame Corners */}
          <div className="absolute top-4 left-4 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
              <path d="M4 4h6v6H4z M4 4v6h6" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
              <path d="M20 4h-6v6h6z M20 4v6h-6" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
              <path d="M4 20h6v-6H4z M4 20v-6h6" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
              <path d="M20 20h-6v-6h6z M20 20v-6h-6" />
            </svg>
          </div>
          
          {/* Photography Icons */}
          <div className="absolute top-1/4 left-8 opacity-20 animate-pulse" style="animation-duration: 4s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-8 opacity-20 animate-pulse" style="animation-duration: 3s; animation-delay: 1s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Decorative element above title */}
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center">
                <div className="h-px w-8 bg-white opacity-70"></div>
                <div className="mx-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                </div>
                <div className="h-px w-8 bg-white opacity-70"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 relative">
              <span className="relative z-10">HI THERE! GOOD TO SEE YOU HERE!</span>
              {/* Decorative background element for title */}
              <span className="absolute inset-0 bg-white opacity-5 transform -skew-x-3 rounded-lg" style="z-index: 1;"></span>
            </h1>
            
            <p className="text-white text-lg max-w-3xl mx-auto mb-6">
              Our top priority is providing you with the best possible photo booth 
              experience. That's why we are continually updating our selection 
              of backdrops to ensure that we can provide you with the 
              greatest options.
            </p>
            
            {/* Decorative element below text */}
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-white opacity-50 rounded-full"></div>
            </div>
          </div>
          
          {/* Wavy divider at bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12" fill="white">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Backdrop Gallery */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8 font-display">
              BACKDROP COLLECTION
            </h2>
            
            <div className="mb-8">
              <p className="text-center text-gray-700 mb-6">
                Browse our extensive collection of premium backdrops for your photo booth experience.
                We're constantly updating our selection to provide you with the greatest options.
              </p>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-red-500">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Retry
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {backdropImages.map((backdrop) => (
                  <div 
                    key={backdrop.id} 
                    className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox(backdrop)}
                  >
                    <img 
                      src={backdrop.src} 
                      alt={backdrop.name} 
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <div className="bg-blue-500 text-white py-2 px-4 rounded-full inline-block">
                        {backdrop.name}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white bg-blue-500 bg-opacity-80 px-4 py-2 rounded-full">
                        View Backdrop
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-blue-500 text-center">Custom Backdrop Options</h2>
              
              <p className="text-lg mb-8 text-center">
                If you don't see one that you like, please reach out to us at <a href="mailto:info@jackphotobooth.ca" className="text-blue-500 hover:underline">jackphotoboothca@gmail.com                </a>
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Custom Backdrop Features:</h3>
                
                <ul className="list-disc pl-5 space-y-3 mb-8">
                  <li>Personalized designs to match your event theme</li>
                  <li>Custom sizes available for any venue</li>
                  <li>High-quality materials for a professional look</li>
                  <li>Brand integration for corporate events</li>
                  <li>Quick turnaround times</li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="/contact" 
                    className="btn-blue inline-block text-center leading-tight"
                  >
                    <span className="block sm:inline">INQUIRE ABOUT</span>
                    <span className="block sm:inline sm:ml-1">CUSTOM BACKDROPS</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img 
              src={currentImage.src} 
              alt={currentImage.name} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex space-x-4">
              <button 
                onClick={() => navigateImage('prev')}
                className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
                aria-label="Previous backdrop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex space-x-4">
              <button 
                onClick={() => navigateImage('next')}
                className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
                aria-label="Next backdrop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {currentImage.name}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Backdrops;
