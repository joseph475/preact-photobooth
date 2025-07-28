import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Footer from '../components/Footer';
import OurBooths from '../components/OurBooths';
import ServiceSection from '../components/ServiceSection';
import GalleryCarousel from '../components/GalleryCarousel';
import { listImages } from '../services/cloudinaryService';

const RetroJack = () => {
  // Helper function to create feature list HTML
  const createFeatureList = (features) => {
    return (
      <ul className="list-disc pl-5 space-y-1 mb-4 text-left">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    );
  };

  const basicFeatures = [
    "2 Hours of THE RETRO JACK Experience",
    "Unlimited Photos, GIFs, and Boomerangs",
    "Customized Photo Template",
    "Digital Props",
    "QR Code for Instant Sharing",
    "Live Online Gallery",
    "1 Attendant",
    "Standard Backdrop",
    "USB with all photos",
    "Set up and tear down"
  ];

  const premiumFeatures = [
    "3 Hours of THE RETRO JACK Experience",
    "Unlimited Photos, GIFs, and Boomerangs",
    "Customized Photo Template",
    "Digital Props",
    "Physical Props",
    "QR Code for Instant Sharing",
    "Live Online Gallery",
    "1 Attendant",
    "Premium Backdrop",
    "USB with all photos",
    "Guest Book",
    "Set up and tear down"
  ];

  const deluxeFeatures = [
    "4 Hours of THE RETRO JACK Experience",
    "Unlimited Photos, GIFs, and Boomerangs",
    "Customized Photo Template",
    "Digital Props",
    "Premium Physical Props",
    "QR Code for Instant Sharing",
    "Live Online Gallery",
    "1 Attendant",
    "Premium Backdrop with Lighting",
    "USB with all photos",
    "Guest Book",
    "Photo Frames for Prints",
    "Set up and tear down"
  ];

  const basicDescription = (
    <div className="text-left">
      {createFeatureList(basicFeatures)}
      <p className="text-sm italic">
        Note: Additional hours can be added for an extra fee.
      </p>
    </div>
  );

  const premiumDescription = (
    <div className="text-left">
      {createFeatureList(premiumFeatures)}
      <p className="text-sm italic">
        Note: Additional hours can be added for an extra fee.
      </p>
    </div>
  );

  const deluxeDescription = (
    <div className="text-left">
      {createFeatureList(deluxeFeatures)}
    </div>
  );

  // State for gallery images from Cloudinary
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoadingGallery, setIsLoadingGallery] = useState(true);
  
  // Fetch images from Cloudinary
  useEffect(() => {
    const fetchCloudinaryImages = async () => {
      try {
        setIsLoadingGallery(true);
        
        // If Cloudinary is configured, fetch images from there
        if (process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME) {
          try {
            // Fetch images from the selfie-station folder in Cloudinary
            const result = await listImages('in-action');
            
            console.log('THE RETRO JACK: Cloudinary images result:', result);
            
            if (result && result.resources && result.resources.length > 0) {
                // Map the Cloudinary resources to our gallery format
                const cloudinaryImages = result.resources.map((resource, index) => {
                  // Try to extract a caption from the resource
                  let caption = 'THE RETRO JACK';
                  
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
                    src: resource.secure_url,
                    alt: caption,
                    caption: caption
                  };
                });
              
              setGalleryImages(cloudinaryImages);
              setIsLoadingGallery(false);
              return;
            }
          } catch (error) {
            console.error('Error fetching Cloudinary images for THE RETRO JACK:', error);
            // Fall back to local images
          }
        }
        
        // Fallback to local images if Cloudinary fetch fails or is not configured
        const fallbackImages = [
          {
            id: 1,
            src: "/images/1.jpeg",
            alt: "Chopard Event",
            caption: "Chopard",
            subcaption: "VANCOUVER BOUTIQUE"
          },
          {
            id: 2,
            src: "/images/2.jpeg",
            alt: "Sephora Event",
            caption: "NARS",
            subcaption: "#BRINGYOURMATTITUDE"
          },
          {
            id: 3,
            src: "/images/3.jpeg",
            alt: "Eclipse Event",
            caption: "THE CENTRE OF YOUR WORLD",
            subcaption: "eclipse BRENTWOOD"
          },
          {
            id: 4,
            src: "/images/4.jpeg",
            alt: "Graduation Event",
            caption: "GRAD '22",
            subcaption: "SPROTT SHAW COLLEGE"
          },
          {
            id: 5,
            src: "/images/5.jpeg",
            alt: "Corporate Event",
            caption: "Corporate",
            subcaption: "ANNUAL GALA"
          },
          {
            id: 6,
            src: "/images/6.jpeg",
            alt: "Wedding Event",
            caption: "Wedding",
            subcaption: "SARAH & MICHAEL"
          },
          {
            id: 7,
            src: "/images/7.jpg",
            alt: "Birthday Party",
            caption: "Birthday",
            subcaption: "SWEET SIXTEEN"
          },
          {
            id: 8,
            src: "/images/8.jpg",
            alt: "Fashion Event",
            caption: "Fashion",
            subcaption: "SUMMER COLLECTION"
          },
          {
            id: 9,
            src: "/images/9.jpg",
            alt: "Product Launch",
            caption: "Launch",
            subcaption: "NEW PRODUCT REVEAL"
          },
          {
            id: 10,
            src: "/images/10.jpg",
            alt: "Holiday Party",
            caption: "Holiday",
            subcaption: "WINTER CELEBRATION"
          }
        ];
        
        setGalleryImages(fallbackImages);
        setIsLoadingGallery(false);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setIsLoadingGallery(false);
      }
    };
    
    fetchCloudinaryImages();
  }, []);
  
  // Gallery images with categories for the filterable gallery
  const galleryImagesWithCategories = [
    { id: 1, src: '/images/1.jpeg', category: 'corporate' },
    { id: 2, src: '/images/2.jpeg', category: 'corporate' },
    { id: 3, src: '/images/3.jpeg', category: 'party' },
    { id: 4, src: '/images/4.jpeg', category: 'graduation' },
    { id: 5, src: '/images/5.jpeg', category: 'corporate' },
    { id: 6, src: '/images/6.jpeg', category: 'wedding' },
    { id: 7, src: '/images/7.jpg', category: 'party' },
    { id: 8, src: '/images/8.jpg', category: 'fashion' },
    { id: 9, src: '/images/9.jpg', category: 'corporate' },
    { id: 10, src: '/images/10.jpg', category: 'party' },
    { id: 11, src: '/images/self-serve-booth.jpg', category: 'selfie' }
  ];
  
  // Define gallery categories
  const galleryCategories = [
    { id: 'all', name: 'All Photos' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'party', name: 'Parties' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'graduation', name: 'Graduation' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'selfie', name: 'THE RETRO JACK' }
  ];
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImagesWithCategories 
    : galleryImagesWithCategories.filter(img => img.category === activeCategory);

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

  // FAQ items with collapsible functionality
  const faqItems = [
    {
      question: "Does the THE RETRO JACK print photos?",
      answer: "Yes, our THE RETRO JACK offers high-quality instant printing so guests can take home physical keepsakes from your event."
    },
    {
      question: "How much space does the THE RETRO JACK require?",
      answer: "The THE RETRO JACK is compact and portable, requiring minimal space. A 6x6 foot area is typically sufficient for the station and guests to comfortably use it."
    },
    {
      question: "Do you provide backdrops and props with the THE RETRO JACK?",
      answer: "Yes, we offer a variety of backdrop options and both digital and physical props depending on your package selection."
    },
    {
      question: "Can guests share photos directly to social media?",
      answer: "Absolutely! Guests can easily share their photos, GIFs, and Boomerangs via email, text, or directly to social media platforms like Instagram and TikTok using our QR code system."
    },
    {
      question: "Is an attendant required for the THE RETRO JACK?",
      answer: "The THE RETRO JACK is extremely user-friendly and can be set up for self-service. However, we include an attendant with all packages to ensure everything runs smoothly and to assist guests if needed."
    }
  ];

  // State to track which FAQ item is open
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ item open/close
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center" style="background-image: url('/images/20250701_200610.jpg')">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              THE RETRO JACK
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Modern photo booth kiosk that allows people to create and share personalized content using Photos, GIFs, or Boomerang!
            </p>
            <a href="/contact" className="inline-block btn-blue btn-hover-effect">
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Introduction Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                What is a THE RETRO JACK?
              </h2>
              
              <p className="text-lg mb-8 text-center">
                Our THE RETRO JACK is a game changer for any events and brand activations. This modern, compact digital photo booth is not only customizable, but it also offers unlimited shots for guests to create and share content.
              </p>
              
              <p className="text-lg mb-8 text-center">
                All the images, GIFs and Boomerangs captured are instantly accessible via a live gallery. For easy, contactless sharing, simply scan a QR code to email or text the photos and videos.
              </p>
              
              <p className="text-lg mb-12 text-center">
                THE RETRO JACK is so user friendly, an attendant isn't required. You can set it up yourself or let us do it all for you.
              </p>
              
              <hr className="border-gray-300 my-16 max-w-2xl mx-auto" />
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
                THE RETRO JACK Features
              </h3>
        
              {/* First Row: 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Column 1: Video, GIF & Boomerang */}
                <div className="flex flex-col">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                    <img 
                      src="/images/20250701_200610.jpg" 
                      alt="Video, GIF & Boomerang Features" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Video, GIF & Boomerang</h3>
                  <p className="text-gray-700">
                    Featuring multiple creative options, this THE RETRO JACK can capture images, trendy GIFs and fun Boomerangs that guests will love to share.
                  </p>
                </div>
                
                {/* Column 2: Social Media Sharing */}
                <div className="flex flex-col">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                    <img 
                      src="/images/social media sharing.jpg" 
                      alt="Social Media Sharing" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Social Media Sharing</h3>
                  <p className="text-gray-700">
                    Our QR code system makes sharing quick and contactless, allowing guests to instantly access and share their content on platforms like Instagram and TikTok.
                  </p>
                </div>
                
                {/* Column 3: Fully Branded Experience */}
                <div className="flex flex-col">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                    <img 
                      src="/images/Screenshot 2025-07-20 220138.jpg" 
                      alt="Fully Branded Experience" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Fully Branded Experience</h3>
                  <p className="text-gray-700">
                    From the THE RETRO JACK itself to the start screen and photo overlays, our creative team can customize everything to promote your brand and create memorable experiences.
                  </p>
                </div>
              </div>
              
              {/* Second Row: Creative VideoFX only */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Creative VideoFX</h3>
                  <p className="text-gray-700 text-lg">
                    Allow your guests to be creative and record powerful videos with THE RETRO JACK's VideoFX feature.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    Whether it's applying filters, overlays, or animations, this feature takes video recording to the next level, ensuring your guests have a truly remarkable and interactive time at your event.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/7.jpg" 
                      alt="Creative VideoFX" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fully Branded Experience Section with Parallax */}
        <div 
          className="py-24 bg-fixed bg-center bg-cover relative"
          style="background-image: url('/images/corporate-event-hero.jpg'); min-height: 70vh;"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-90"></div>
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  FULLY BRANDED EXPERIENCE
                </h2>
                <p className="text-white text-lg mb-6">
                  THE RETRO JACK is a great way to promote a company and create brand awareness. It offers a unique and engaging way for companies to promote their brand and create memorable experiences for their customers and employees. Watch this video to see what it can do for your next event!
                </p>
                <a href="/contact" className="inline-block bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                  GET STARTED
                </a>
              </div>
              <div className="md:w-1/2 relative">
                <div className="rounded-lg overflow-hidden shadow-2xl relative">
                  <img 
                    src="/images/Screenshot 2025-07-20 221306.jpg" 
                    alt="Branded THE RETRO JACK Example" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white bg-opacity-80 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all duration-300">
                      <svg className="w-10 h-10 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Gallery Carousel Section */}
        <GalleryCarousel 
          images={galleryImages} 
          title="Our THE RETRO JACK in Action"
          itemsPerSlide={5}
        />
        
        {/* FAQ Section - Collapsible */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="border rounded-lg overflow-hidden shadow-sm">
                {faqItems.map((item, index) => (
                  <div key={index} className={`border-b ${index === faqItems.length - 1 ? 'border-b-0' : ''}`}>
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                      <svg 
                        className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="p-4 bg-white border-t border-gray-100">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Booths Section */}
        <OurBooths 
          customHeading="Explore Our Other Booths"
          customDescription="Discover our range of photo booth options to find the perfect fit for your event. Each booth offers unique features and experiences to make your celebration unforgettable."
        />
        
        {/* Call to Action Section */}
        <div className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What are you waiting for? Let's get started.
            </h2>
            <a href="/contact" className="inline-block bg-transparent hover:bg-white hover:text-blue-500 text-white font-bold py-3 px-6 border border-white hover:border-transparent rounded-full transition-all duration-300 btn-hover-effect text-lg">
              BOOK YOUR BOOTH NOW
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
    </div>
  );
};

export default RetroJack;
