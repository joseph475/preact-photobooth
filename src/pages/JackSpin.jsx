import { h } from 'preact';
import { useState } from 'preact/hooks';
import Footer from '../components/Footer';
import OurBooths from '../components/OurBooths';
import ServiceSection from '../components/ServiceSection';
import GalleryCarousel from '../components/GalleryCarousel';

const JackSpin = () => {
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

  const partyFeatures = [
    "2 Hours of JackSpin (360 Booth) Experience",
    "Props (cool/funny glasses, bubble gun, fake money, etc.)",
    "Standard AI Platform (max of 3 people)",
    "1 Director",
    "Up to 15 seconds of HD video output",
    "Custom Branded Overlay",
    "Slow-motion & Boomerang Effects",
    "Microsite Gallery",
    "Instant Sharing (text, email, QR Code)",
    "Luxury red carpet set up which includes red rope stanchions to keep people inside and outside the platform safe",
    "Set up and tear down"
  ];

  const luxFeatures = [
    "Props (cool/funny glasses, bubble gun, fake money, etc.)",
    "Deluxe AI Platform (max of 3 people)",
    "1 Director",
    "Up to 15-30 seconds of HD video output",
    "Custom Branded Overlay",
    "Custom branding for Intro / Outro",
    "Slow-motion & Boomerang Effects",
    "Soundtrack Integration",
    "Microsite Gallery",
    "Instant Sharing (text, email, QR Code)",
    "We provide our own Internet for instant upload and sharing on microsite",
    "Professional Video Lighting",
    "Luxury red carpet set up which includes red rope stanchions to keep people inside and outside the platform safe",
    "Set up and tear down"
  ];

  const vipFeatures = [
    "3 Hours of JackSpin (360 Booth) Experience",
    "Props (cool/funny glasses, bubble gun, fake money, etc.)",
    "Standard backdrop",
    "Deluxe AI Platform (max of 3 people)",
    "1 Director",
    "1 Video Technician",
    "Up to 15-30 seconds of HD video output",
    "Custom Branded Overlay",
    "Custom branding for Intro / Outro",
    "Slow-motion & Boomerang Effects",
    "Soundtrack Integration",
    "Microsite Gallery",
    "Instant Sharing (text, email, QR Code)",
    "We provide our own Internet for instant upload and sharing on microsite",
    "Professional Video Lighting",
    "Luxury red carpet set up which includes red rope stanchions to keep people inside and outside the platform safe",
    "Live display of videos on TV (guests love this!)",
    "Set up and tear down"
  ];

  const partyDescription = (
    <div className="text-left">
      {createFeatureList(partyFeatures)}
      <p className="text-sm italic">
        Note: this package does not include internet connection and backdrop. If you want the guests to get copy of the videos right away, you have to provide us with a reliable internet connection at the venue.
      </p>
    </div>
  );

  const luxDescription = (
    <div className="text-left">
      {createFeatureList(luxFeatures)}
      <p className="text-sm italic">
        Note: This package does not include a backdrop.
      </p>
    </div>
  );

  const vipDescription = (
    <div className="text-left">
      {createFeatureList(vipFeatures)}
    </div>
  );
  
  // FAQ items with collapsible functionality
  const faqItems = [
    {
      question: "What is JackSpin (360 Booth)?",
      answer: "JackSpin (360 Booth) is an innovative photo and video experience that uses artificial intelligence to create stunning visual effects. It captures videos and transforms them with special effects, custom overlays, and branded elements to create shareable content that elevates any event."
    },
    {
      question: "How much space does JackSpin (360 Booth) require?",
      answer: "JackSpin (360 Booth) requires approximately 10x10 feet of space for optimal setup, including the platform, camera equipment, and space for guests to move. We'll work with your venue to ensure proper placement and setup."
    },
    {
      question: "Can JackSpin (360 Booth) be customized for my brand or event?",
      answer: "Absolutely! We offer extensive customization options including branded overlays, custom intros and outros, soundtrack integration, and themed props. Our team works with you to create a cohesive experience that aligns with your brand or event theme."
    },
    {
      question: "How do guests receive their videos?",
      answer: "Guests can instantly access their videos through our QR code system, which allows them to email, text, or directly share their content to social media platforms like Instagram, TikTok, Facebook, and Snapchat."
    },
    {
      question: "Do you provide staff to operate JackSpin (360 Booth)?",
      answer: "Yes, all our packages include at least one professional director who guides guests through the experience and ensures everything runs smoothly. Our VIP package includes an additional video technician for enhanced service."
    }
  ];

  // State to track which FAQ item is open
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Toggle FAQ item open/close
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
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

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center" style="background-image: url('/images/event-booth.jpg')">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              JACKSPIN section
            </h1>
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              under construction
            </h1>
            <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">
              (SPINNING SOON)
            </h1>
            {/* <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              JackSpin (360 Booth)
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Step into <span className="text-2xl font-bold text-blue-500">JackSpin (360 Booth)</span> — our signature open-air photo booth that’s designed to turn heads and light up every event. With its sleek circular shape and vibrant LED glow, this modern booth adds the perfect blend of style, fun, and high-quality photo memories.
            </p>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Whether you're hosting a wedding, birthday, corporate event, or celebration of any kind, JackSpin (360 Booth) creates an interactive experience your guests won’t forget. Its open design means more space for group shots, striking poses, and plenty of laughs — all captured in stunning detail.
            </p>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Let your event shine with JackSpin (360 Booth) — where great moments are made, and every smile is in the spotlight.
            </p>
            <a href="/contact" className="inline-block btn-blue">
              GET A QUOTE
            </a> */}
          </div>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Introduction Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                What is JackSpin (360 Booth)?
              </h2>
              
              <p className="text-lg mb-8 text-center">
                <span className="text-2xl font-bold text-blue-500">JackSpin (360 Booth)</span> is a sleek, modern twist on the classic enclosed booth. Designed with a professional DSLR camera, studio-quality lighting, and a customizable backdrop, it offers plenty of space — perfect for group shots and creative poses. With quick prints and easy digital sharing, it's an ideal choice for weddings, parties, corporate events, and more.
              </p>
              
              <hr className="border-gray-300 my-16 max-w-2xl mx-auto" />
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                    WE DON'T JUST CAPTURE MEMORIES, WE CREATE THEM.
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    Looking to rent a JACKSpot photobooth for your event in Vancouver? Look no further! We're excited to share with you our most recent hottest trending photo and video experiences: JackSpin (360 Booth).
                  </p>
                  <p className="text-gray-700 text-lg mb-6">
                    Our JACKSpot photobooth takes up to 4 guests upon its elevated platform as its studio grade camera rotates around them creating a truly unique experience.
                  </p>
                  <p className="text-gray-700 text-lg">
                    Each session is ready in under 30 seconds to be instantly shared over a variety of social media platforms including Facebook, Instagram, Snapchat and TikTok.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/wedding-couple.jpg" 
                      alt="JACKSpot Experience"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JACKSpot Features Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <div className="flex flex-wrap -mx-4">
                {/* Left Column Features */}
                <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
                  <div className="mb-16">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">SLOW MOTION VIDEO</h3>
                    <p className="text-gray-700 text-center">
                      Our JACKSpot captures Slow-Motion video then it'll speed up and slow down the footage at set intervals in order to capture eye-catching final video.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">INSTANT SHARING</h3>
                    <p className="text-gray-700 text-center">
                      Guests can share their footage immediately by scanning the QR code or Emailing it.
                    </p>
                  </div>
                </div>
                
                {/* Center Column - Image */}
                <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0 flex items-center justify-center">
                  <img 
                    src="/images/360-video-booth-rental-vancouver.webp"
                    alt="JACKSpot"
                    className="max-w-full h-auto"
                  />
                </div>
                
                {/* Right Column Features */}
                <div className="w-full md:w-1/3 px-4">
                  <div className="mb-16">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">CUSTOMIZABLE</h3>
                    <p className="text-gray-700 text-center">
                      We work with you to design custom overlays and video FX with the soundtracks to create a jaw dropping final footage.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">ON-SITE ATTENDANTS</h3>
                    <p className="text-gray-700 text-center">
                      Our professional team will direct your guests to take perfect shot every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Services Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center">
                EVENT SERVICES
              </h2>
              
              <div className="flex flex-wrap -mx-4">
                {/* Brand Marketing Activations */}
                <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
                  <div className="h-64 mb-6 overflow-hidden rounded-lg">
                    <img 
                      src="/images/3.jpeg" 
                      alt="Brand Marketing Activations" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    BRAND MARKETING ACTIVATIONS
                  </h3>
                  <p className="text-gray-700 text-center">
                    Make your brand stand out at your next event with a JACKSpot activation! Capture amazing content with backgrounds and props customized to your brand while getting tons of impressions leveraging your fan's social media accounts!
                  </p>
                </div>
                
                {/* Corporate & Fundraiser Events */}
                <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
                  <div className="h-64 mb-6 overflow-hidden rounded-lg">
                    <img 
                      src="/images/4.jpeg" 
                      alt="Corporate & Fundraiser Events" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    CORPORATE & FUNDRAISER EVENTS
                  </h3>
                  <p className="text-gray-700 text-center mb-6">
                    Want to create a unique experience for your next corporate party? Look no further! JACKSpot photobooths are the hottest trend right now! Our custom branded overlays are designed to best fit the needs of your event.
                  </p>
                  <div className="text-center">
                    <a href="/contact" className="inline-block btn-blue">
                      GET A QUOTE
                    </a>
                  </div>
                </div>
                
                {/* Weddings & Private Events */}
                <div className="w-full md:w-1/3 px-4">
                  <div className="h-64 mb-6 overflow-hidden rounded-lg">
                    <img 
                      src="/images/5.jpeg" 
                      alt="Weddings & Private Events" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    WEDDINGS & PRIVATE EVENTS
                  </h3>
                  <p className="text-gray-700 text-center">
                    Capture amazing moments of your wedding or private event and give your guests content that they will remember. Our JACKSpot software will allow guests to upload to their social media instantly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Examples Section with Parallax */}
        <div 
          className="py-24 bg-fixed bg-center bg-cover relative"
          style="background-image: url('/images/wedding-decor.jpg'); min-height: 70vh;"
        >
          <div className="absolute inset-0" style="background-color: rgba(228, 255, 238, 0.7);"></div>
          <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
            <div data-padd-top="20" data-padd-bott="20" className="px-col-content px-middle text-center max-w-4xl" style="padding-top: 20px; padding-bottom: 20px;">
              <div className="px-text">
                <h1 className="text-gray-800 text-5xl md:text-6xl lg:text-7xl font-bold mb-10">Cutting-Edge Technology</h1>
              </div>
              <div className="px-hero-wrap" data-delay="" data-animation="">
                <div className="px-hero px-font-m px-font-normal mx-auto" style="color: inherit;">
                  <span className="text-gray-800 text-xl md:text-2xl lg:text-3xl" style="line-height: 1.6;">
                    JackSpin (360 Booth) uses the latest in artificial intelligence and video processing technology to create stunning visual effects that will amaze your guests. From slow-motion to boomerang effects, custom overlays to branded intros and outros, JackSpin (360 Booth) delivers a premium experience that elevates any event.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gallery Carousel Section */}
        <GalleryCarousel 
          images={galleryImages} 
          title="JackSpin (360 Booth) in Action"
          itemsPerSlide={5}
        />
        
        {/* FAQ Section - Collapsible */}
        <div className="py-16 bg-gray-50">
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
                        className={`w-5 h-5 text-blue-500 transform transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
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
              Ready to book your JACKSpot Experience?
            </h2>
            <a href="/contact" className="inline-block bg-transparent hover:bg-white text-white hover:text-blue-500 font-bold py-3 px-6 border border-white hover:border-transparent rounded-full transition-all duration-300 text-lg">
              BOOK YOUR BOOTH NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JackSpin;
