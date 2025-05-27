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

          
          {/* The JACKSpot */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/360-booth.jpg" 
                alt="The JACKSpot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <h3 className="text-2xl font-bold text-blue-500 mb-3 text-center">THE JACKSPOT</h3>
                <p className="text-gray-700 mb-4">
                  Our AI booth takes up to 4 guests upon its elevated platform as its studio grade camera rotates around them creating a truly unique experience.
                </p>
              </div>
              <div className="text-center mt-auto pt-4">
                <Link href="/jackspot" className="inline-block btn-blue-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* THE RETRO JACK */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <div className="h-64 overflow-hidden">
              <img 
                src="/images/self-serve-booth.jpg" 
                alt="THE RETRO JACK" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <h3 className="text-2xl font-bold text-blue-500 mb-3 text-center">THE RETRO JACK</h3>
                <p className="text-gray-700 mb-4">
                  Our THE RETRO JACK is a modern, compact digital photo booth is not only customizable, but it also offers unlimited shots for guests to create and share content.
                </p>
              </div>
              <div className="text-center mt-auto pt-4">
                <Link href="/retrojack" className="inline-block btn-blue-sm">
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
                <h3 className="text-2xl font-bold text-blue-500 mb-3 text-center">JACKSpin (360 Booth)</h3>
                <p className="text-gray-700 mb-4">
                  Our JACKSpin (360 Booth) prints photos in a blink and includes digital photo sharing feature as well so you can continue your party on social media.
                </p>
              </div>
              <div className="text-center mt-auto pt-4">
                <Link href="/jackspim" className="inline-block btn-blue-sm">
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
