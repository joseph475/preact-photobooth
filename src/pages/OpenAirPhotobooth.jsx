import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Footer from '../components/Footer';
import OurBooths from '../components/OurBooths';
import ServiceSection from '../components/ServiceSection';
import GalleryCarousel from '../components/GalleryCarousel';

const OpenAirPhotobooth = () => {
  // Gallery images for the carousel
  const galleryImages = [
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
    }
  ];
  
  // FAQ items with collapsible functionality
  const faqItems = [
    {
      question: "How much space does the Open-Air Photobooth require?",
      answer: "Our Open-Air Photobooth is designed to be flexible with space requirements. Typically, we recommend an area of about 8x8 feet to accommodate the booth setup, backdrop, and allow guests to comfortably pose for photos."
    },
    {
      question: "Do you provide backdrops and props with the Open-Air Photobooth?",
      answer: "Yes, we offer a variety of backdrop options and props to enhance your photo experience. Our standard package includes a selection of fun props, while premium packages feature higher quality props and more elaborate backdrop options."
    },
    {
      question: "Can guests share photos directly to social media?",
      answer: "Absolutely! Our Open-Air Photobooth is equipped with instant social media sharing capabilities. Guests can easily share their photos via email, text, or directly to platforms like Instagram and Facebook."
    },
    {
      question: "How long does it take to set up the Open-Air Photobooth?",
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
              Open-Air Photobooth Experience
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Our Open-Air Photobooth creates a fun, interactive experience for your guests with high-quality photos, customizable backdrops, and instant prints.
            </p>
            <a href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
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
                What is an Open-Air Photobooth?
              </h2>
              
              <p className="text-lg mb-8 text-center">
                An Open-Air Photobooth is a modern, spacious alternative to traditional enclosed photo booths. It features a professional DSLR camera, studio lighting, and a customizable backdrop, allowing for larger group photos and more creative possibilities. With instant printing and digital sharing options, it's perfect for weddings, corporate events, and parties.
              </p>
              
              <hr className="border-gray-300 my-16 max-w-2xl mx-auto" />
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
                Open-Air Photobooth Features
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
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Spacious Design</h3>
                  <p className="text-gray-700">
                    Accommodate large groups and create dynamic, creative photos with our open-concept design. Unlike traditional enclosed booths, our Open-Air Photobooth allows for more movement and interaction.
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
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Professional Equipment</h3>
                  <p className="text-gray-700">
                    Our Open-Air Photobooth uses professional-grade DSLR cameras and studio lighting to ensure every photo is of the highest quality. The result is crisp, well-lit images that capture the true essence of your event.
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
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Instant Sharing</h3>
                  <p className="text-gray-700">
                    Share photos instantly via email, text, or social media with our integrated digital platform. Guests can immediately access their photos and share their experience with friends and family who couldn't attend.
                  </p>
                </div>
              </div>
              
              {/* Additional Feature Row */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-purple-600 mb-4">Customizable Experience</h3>
                  <p className="text-gray-700 text-lg">
                    Tailor the Open-Air Photobooth experience to match your event theme and style. From custom photo templates and branded overlays to themed props and backdrops, we can create a unique photo experience that perfectly complements your occasion.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    Our team works with you to design a photo experience that reflects your vision and creates lasting memories for your guests.
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
                <h1 className="text-gray-800 text-5xl md:text-6xl lg:text-7xl font-bold mb-10">Capture The Moment</h1>
              </div>
              <div className="px-hero-wrap" data-delay="" data-animation="">
                <div className="px-hero px-font-m px-font-normal mx-auto" style="color: inherit;">
                  <span className="text-gray-800 text-xl md:text-2xl lg:text-3xl" style="line-height: 1.6;">
                    Our Open-Air Photobooth creates memories that last a lifetime. With high-quality prints and digital sharing options, your guests will have tangible keepsakes from your special event. Perfect for weddings, corporate events, birthday parties, and more!
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
                    alt="Professional Open-Air Photobooth Setup" 
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Professional Setup & Service
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Our team handles everything from delivery and setup to operation and teardown. We arrive early to ensure everything is perfectly arranged and tested before your event begins. Our professional attendants are there to assist your guests and ensure everyone has a great photo experience.
                </p>
                <a href="/contact" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gallery Carousel Section */}
        <GalleryCarousel 
          images={galleryImages} 
          title="Our Open-Air Photobooth in Action"
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
                        className={`w-5 h-5 text-purple-600 transform transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
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
        <div className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to book your Open-Air Photobooth?
            </h2>
            <a href="/contact" className="inline-block bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg">
              BOOK YOUR BOOTH NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OpenAirPhotobooth;
