import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Footer from '../components/Footer';
import OurBooths from '../components/OurBooths';
import ServiceSection from '../components/ServiceSection';
import GalleryCarousel from '../components/GalleryCarousel';
import { listImages } from '../services/cloudinaryService';

const JackSpot = () => {
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
            // Fetch images from the open-air folder in Cloudinary
            const result = await listImages('open-air');
            
            console.log('Open Air: Cloudinary images result:', result);
            
            if (result && result.resources && result.resources.length > 0) {
              // Map the Cloudinary resources to our gallery format
              const cloudinaryImages = result.resources.map((resource, index) => {
                // Try to extract a caption from the resource
                let caption = 'Open Air Photobooth';
                
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
            console.error('Error fetching Cloudinary images for Open Air Photobooth:', error);
            // Fall back to local images
          }
        }
        
        // Fallback to local images if Cloudinary fetch fails or is not configured
        const fallbackImages = [
          {
            id: 1,
            src: "/images/1.jpeg",
            alt: "Chopard Event",
            caption: "Chopard"
          },
          {
            id: 2,
            src: "/images/2.jpeg",
            alt: "Sephora Event",
            caption: "NARS"
          },
          {
            id: 3,
            src: "/images/3.jpeg",
            alt: "Eclipse Event",
            caption: "THE CENTRE OF YOUR WORLD"
          },
          {
            id: 4,
            src: "/images/4.jpeg",
            alt: "Graduation Event",
            caption: "GRAD '22"
          },
          {
            id: 5,
            src: "/images/5.jpeg",
            alt: "Corporate Event",
            caption: "Corporate"
          },
          {
            id: 6,
            src: "/images/6.jpeg",
            alt: "Wedding Event",
            caption: "Wedding"
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
  
  // FAQ items with collapsible functionality
  const faqItems = [
    {
      question: "How much space does the THE JACKSPOT require?",
      answer: "Our THE JACKSPOT is designed to be flexible with space requirements. Typically, we recommend an area of about 8x8 feet to accommodate the booth setup, backdrop, and allow guests to comfortably pose for photos."
    },
    {
      question: "Do you provide backdrops and props with the THE JACKSPOT?",
      answer: "Yes, we offer a variety of backdrop options and props to enhance your photo experience. Our standard package includes a selection of fun props, while premium packages feature higher quality props and more elaborate backdrop options."
    },
    {
      question: "Can guests share photos directly to social media?",
      answer: "Absolutely! Our THE JACKSPOT is equipped with instant social media sharing capabilities. Guests can easily share their photos via email, text, or directly to platforms like Instagram and Facebook."
    },
    {
      question: "How long does it take to set up the THE JACKSPOT?",
      answer: "Our team typically requires about 1-1.5 hours for setup to ensure everything is perfectly arranged and tested before your event begins. We handle all aspects of setup and teardown so you can focus on enjoying your event."
    },
    {
      question: "Can the photo template be customized for our event?",
      answer: "Yes, we offer customized photo templates for all our packages. We can incorporate your event theme, colors, logos, and even special messages to create a personalized keepsake for your guests."
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
      <div className="relative bg-cover bg-center h-screen flex items-center" style="background-image: url('/images/event-booth.jpg')">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              THE JACKSPOT
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Step into <span className="text-2xl font-bold text-blue-500">THE JACKSPOT</span> — our signature open-air photo booth that’s designed to turn heads and light up every event. With its sleek circular shape and vibrant LED glow, this modern booth adds the perfect blend of style, fun, and high-quality photo memories.
            </p>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Whether you're hosting a wedding, birthday, corporate event, or celebration of any kind, THE JACKSPOT creates an interactive experience your guests won’t forget. Its open design means more space for group shots, striking poses, and plenty of laughs — all captured in stunning detail.
            </p>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Let your event shine with THE JACKSPOT — where great moments are made, and every smile is in the spotlight.
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
                What is a THE JACKSPOT?
              </h2>
              
              <p className="text-lg mb-8 text-center">
                <span className="text-2xl font-bold text-blue-500">JACKSpot</span> is a sleek, modern twist on the classic enclosed booth. Designed with a professional DSLR camera, studio-quality lighting, and a customizable backdrop, it offers plenty of space — perfect for group shots and creative poses. With quick prints and easy digital sharing, it's an ideal choice for weddings, parties, corporate events, and more.
              </p>
              
              <hr className="border-gray-300 my-16 max-w-2xl mx-auto" />
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
                THE JACKSPOT Features
              </h3>
        
              {/* Features in 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Column 1: Spacious Design */}
                <div className="flex flex-col">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                    <img 
                      src="/images/event-booth.jpg" 
                      alt="Spacious Design" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Spacious Design</h3>
                  <p className="text-gray-700">
                    Our open-concept design makes it easy to capture vibrant, creative moments with larger groups. Unlike traditional enclosed booths, <span className="text-lg font-bold text-blue-500">The JACKSpot</span> offers more space for movement, interaction, and fun.
                  </p>
                </div>
                
                {/* Column 2: Professional Equipment */}
                <div className="flex flex-col">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                    <img 
                      src="/images/wedding-booth.jpg" 
                      alt="Professional Equipment" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Professional Equipment</h3>
                  <p className="text-gray-700">
                    <span className="text-lg font-bold text-blue-500">The JACKSpot</span> is equipped with professional DSLR cameras and studio lighting to deliver top-tier photo quality. Each image is sharp, bright, and beautifully captures the atmosphere of your event.
                  </p>
                </div>
                
                {/* Column 3: Instant Sharing */}
                <div className="flex flex-col">
                  <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                    <img 
                      src="/images/corporate-booth.jpg" 
                      alt="Instant Sharing" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Instant Sharing</h3>
                  <p className="text-gray-700">
                    With our built-in digital sharing platform, guests can instantly send their photos via email, text, or social media. It's a quick and easy way to share the fun with friends and family—even those who couldn't be there in person.
                  </p>
                </div>
              </div>
              
              {/* Additional Feature Row */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Customizable Experience</h3>
                  <p className="text-gray-700 text-lg">
                    Customize <span className="text-lg font-bold text-blue-500">The JACKSpot</span> to suit your event’s theme and vibe. Whether it’s personalized photo templates, branded overlays, themed props, or matching backdrops, we’ll bring your vision to life with a one-of-a-kind photo experience.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    Our team will collaborate with you to craft an experience that reflects your style and leaves your guests with unforgettable memories.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/wedding-booth.jpg" 
                      alt="Customizable Experience" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Photo Examples Section with Parallax */}
        <div 
          className="py-24 bg-fixed bg-center bg-cover relative"
          style="background-image: url('/images/event-booth.jpg'); min-height: 70vh;"
        >
          <div className="absolute inset-0" style="background-color: rgba(228, 255, 238, 0.7);"></div>
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div data-padd-top="20" data-padd-bott="20" className="px-col-content px-middle text-center max-w-4xl" style="padding-top: 20px; padding-bottom: 20px;">
              <div className="px-text">
                <h1 className="text-gray-800 text-5xl md:text-6xl lg:text-7xl font-bold mb-10">Make It Picture Perfect</h1>
              </div>
              <div className="px-hero-wrap" data-delay="" data-animation="">
                <div className="px-hero px-font-m px-font-normal mx-auto" style="color: inherit;">
                  <span className="text-gray-800 text-xl md:text-2xl lg:text-3xl" style="line-height: 1.6;">
                    <span className="text-4xl font-bold text-blue-500">The JACKSpot</span> captures unforgettable moments that last a lifetime. Featuring high-quality prints and easy digital sharing, your guests leave with personalized keepsakes they’ll treasure. Ideal for weddings, corporate gatherings, birthday celebrations, and beyond!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Professional Setup Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
              <div className="md:w-1/2 relative mb-10 md:mb-0">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 bg-gray-700 text-white px-3 py-1 text-sm font-semibold rounded">
                    Professional Setup
                  </span>
                  <img 
                    src="/images/event-booth.jpg" 
                    alt="Professional THE JACKSPOT Setup" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Professional Setup & Service
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  We take care of it all—from delivery and setup to on-site operation and takedown. Our team arrives early to make sure everything is fully set up, tested, and ready to go before your event starts. Friendly, professional attendants are there throughout to guide your guests and ensure a smooth, enjoyable photo booth experience.
                </p>
                <a href="/contact" className="inline-block btn-blue btn-hover-effect">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gallery Carousel Section */}
        <GalleryCarousel 
          images={galleryImages} 
          title="Our THE JACKSPOT in Action"
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
              Ready to book your THE JACKSPOT?
            </h2>
            <a href="/contact" className="inline-block bg-transparent hover:bg-white hover:text-blue-500 text-white font-bold py-3 px-6 border border-white hover:border-transparent rounded-full transition-all duration-300 btn-hover-effect text-lg">
              BOOK YOUR BOOTH NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JackSpot;
