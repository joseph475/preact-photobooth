import { h } from 'preact';
import { Link } from 'preact-router/match';

const OurBooths = ({ customHeading, customDescription }) => {
  // Default heading and description if not provided
  const heading = customHeading || "Our Booths";
  const description = customDescription || 
    "Whether you're an individual, small business, or Fortune 500 company—we have the perfect booth for you. Below are our three famous photo booths to make it easy for you.";

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">
          {heading}
        </h2>
        
        <p className="text-lg text-center mb-12 max-w-4xl mx-auto">
          {description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Selfie Station */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/self-serve-booth.jpg" 
                alt="Selfie Station" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <h3 className="text-2xl font-bold text-pink-600 mb-3 text-center">SELFIE STATION</h3>
                <p className="text-gray-700 mb-4">
                  Our selfie station is a modern, compact digital photo booth is not only customizable, but it also offers unlimited shots for guests to create and share content.
                </p>
              </div>
              <div className="text-center mt-auto pt-4">
                <Link href="/selfie-station" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          {/* Open-Air Photo Booth */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/corporate-booth.jpg" 
                alt="Open-Air Photo Booth" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <h3 className="text-2xl font-bold text-pink-600 mb-3 text-center">OPEN-AIR PHOTO BOOTH</h3>
                <p className="text-gray-700 mb-4">
                  Our legacy open-air photo booth prints photos in a blink and includes digital photo sharing feature as well so you can continue your party on social media.
                </p>
              </div>
              <div className="text-center mt-auto pt-4">
                <Link href="/open-air-photobooth" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          {/* AI Booth */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/360-booth.jpg" 
                alt="AI Booth" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <h3 className="text-2xl font-bold text-pink-600 mb-3 text-center">AI BOOTH</h3>
                <p className="text-gray-700 mb-4">
                  Our AI booth takes up to 4 guests upon its elevated platform as its studio grade camera rotates around them creating a truly unique experience.
                </p>
              </div>
              <div className="text-center mt-auto pt-4">
                <Link href="/ai-booth" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBooths;
