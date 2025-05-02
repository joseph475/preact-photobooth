import { h } from 'preact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceSection from '../components/ServiceSection';

const GlamBooth = () => {
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
    "2 Hours of 360 Glam Booth Experience",
    "Props (cool/funny glasses, bubble gun, fake money, etc.)",
    "Standard 360 Platform (max of 3 people)",
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
    "Deluxe 360 Platform (max of 3 people)",
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
    "3 Hours of 360 Glam Booth Experience",
    "Props (cool/funny glasses, bubble gun, fake money, etc.)",
    "Standard backdrop",
    "Deluxe 360 Platform (max of 3 people)",
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-pink-700 to-red-500 py-20 overflow-hidden">
        {/* Decorative Elements - Camera Icons */}
        <div className="absolute top-4 left-4 opacity-20 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
          </svg>
        </div>
        <div className="absolute top-12 right-12 opacity-20 animate-pulse" style="animation-delay: 1s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
          </svg>
        </div>
        
        {/* Sparkle Elements */}
        <div className="absolute top-10 left-1/4 animate-ping" style="animation-duration: 3s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-1/4 animate-ping" style="animation-duration: 2.5s; animation-delay: 0.5s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Decorative line above title */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white mb-3 font-bold tracking-wider uppercase relative inline-block">
            <span className="relative z-10">360° GLAM VIDEO BOOTH EXPERIENCE</span>
            <span className="absolute -top-2 -right-2 text-pink-300 opacity-30 text-6xl md:text-7xl" style="z-index: 1;">°</span>
          </h1>
          
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-6">
            A 360 Glam Booth can be a great addition to any event, providing a unique and immersive experience, entertainment, shareable content, branding opportunities, and can also be a source of data collection.
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
        <div className="pt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-blue-500 text-center">360 VIDEO BOOTH PACKAGES</h2>
            </div>
          </div>
        </div>
        
        <ServiceSection 
          title="PARTY GLAM BOOTH EXPERIENCE"
          description={partyDescription}
          imageUrl="/images/2.jpeg"
          buttonText="GET A QUOTE"
          buttonLink="/contact"
        />
        
        <ServiceSection 
          title="LUX GLAM BOOTH EXPERIENCE"
          description={luxDescription}
          imageUrl="/images/9.jpg"
          buttonText="GET A QUOTE"
          buttonLink="/contact"
          isReversed={true}
        />
        
        <ServiceSection 
          title="VIP GLAM BOOTH EXPERIENCE"
          description={vipDescription}
          imageUrl="/images/6.jpeg"
          buttonText="GET A QUOTE"
          buttonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default GlamBooth;
