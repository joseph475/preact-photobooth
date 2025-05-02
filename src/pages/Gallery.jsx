import { h } from 'preact';
import { useState } from 'preact/hooks';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import RecentImagesCarousel from '../components/RecentImagesCarousel';

const Gallery = () => {
  // Define gallery categories
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'party', name: 'Parties' },
    { id: '360', name: '360° Glam Booth' }
  ];

  // Define gallery images with categories
  const galleryImages = [
    { id: 1, src: '/images/1.jpeg', category: 'wedding' },
    { id: 2, src: '/images/2.jpeg', category: 'wedding' },
    { id: 3, src: '/images/3.jpeg', category: 'party' },
    { id: 4, src: '/images/4.jpeg', category: 'party' },
    { id: 5, src: '/images/5.jpeg', category: 'corporate' },
    { id: 6, src: '/images/6.jpeg', category: 'corporate' },
    { id: 7, src: '/images/7.jpg', category: 'wedding' },
    { id: 8, src: '/images/8.jpg', category: 'wedding' },
    { id: 9, src: '/images/9.jpg', category: 'party' },
    { id: 10, src: '/images/10.jpg', category: 'corporate' },
    { id: 11, src: '/images/11.jpg', category: '360' },
    { id: 12, src: '/images/wedding-booth.jpg', category: 'wedding' },
    { id: 13, src: '/images/corporate-booth.jpg', category: 'corporate' },
    { id: 14, src: '/images/event-booth.jpg', category: 'party' },
    { id: 15, src: '/images/360-booth.jpg', category: '360' },
    { id: 16, src: '/images/mirror-booth.jpg', category: 'party' },
    { id: 17, src: '/images/self-serve-booth.jpg', category: 'corporate' }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

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
    const currentIndex = filteredImages.findIndex(img => img.id === currentImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setCurrentImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-700 to-blue-500 py-20 overflow-hidden">
        {/* Decorative Elements - Gallery Icons */}
        <div className="absolute top-4 left-4 opacity-20 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
            <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
          </svg>
        </div>
        <div className="absolute top-12 right-12 opacity-20 animate-pulse" style="animation-delay: 1s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
            <path d="M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
            <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"/>
          </svg>
        </div>
        
        {/* Existing Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-4 left-1/4 text-white opacity-20 text-9xl font-elegant">memories</div>
          <div className="absolute bottom-0 right-1/4 text-white opacity-20 text-8xl font-modern">captured</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Decorative line above title */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white mb-3 font-creative tracking-wider uppercase relative inline-block">
            <span className="relative z-10">Our Gallery</span>
            <span className="absolute -top-2 -right-2 text-blue-300 opacity-30 text-6xl md:text-7xl" style="z-index: 1;">•</span>
          </h1>
          
          <p className="text-white text-lg max-w-2xl mx-auto mb-6">
            Browse through our collection of memorable moments captured at various events
          </p>
          
          {/* Decorative line below description */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Wavy divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12" fill="white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,40.17,263.46,67.29,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Recent Images Carousel */}
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-[98%] xl:max-w-[1600px]">
            <h2 className="text-3xl md:text-4xl text-center text-blue-500 mb-8 font-modern">
              Recently Uploaded
            </h2>
            <div className="w-full mx-auto">
              <RecentImagesCarousel />
            </div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map(image => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={image.src} 
                      alt={`Gallery image ${image.id}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white bg-blue-500 bg-opacity-80 px-4 py-2 rounded-full">
                      View Image
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl text-blue-500 mb-6 font-modern">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Book our photo booth services for your next event and let us capture those special moments for you and your guests.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </main>
      
      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img 
              src={currentImage.src} 
              alt={`Gallery image ${currentImage.id}`} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex space-x-4">
              <button 
                onClick={() => navigateImage('prev')}
                className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
                aria-label="Previous image"
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
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
