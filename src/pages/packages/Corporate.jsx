import { h } from 'preact';
import Footer from '../../components/Footer';
import OurBooths from '../../components/OurBooths';

const Corporate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center" style="background-image: url('/images/hero-bg.jpg')">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              Branded Photo Booth Experience
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Elevate the experience at events, grow your email marketing list, and create buzz on social media with our fun and easy-to-use photo booths.
            </p>
            <a href="#contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
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
                Photo Booth for Corporate Events
              </h2>
              
              <p className="text-lg mb-8 text-center">
                Think about the last business event you attended. How was it? Quit thinking so hard because we know it wasn't all that memorable. But don't let that be the case with your next event, whether it be a store opening, conferences, marketing galas or trade shows.
              </p>
              
              <p className="text-lg mb-8 text-center">
                Our photo booth rental are an excellent way of reaching out to a diverse potential audience, and Photo Booth for Corporate Event allow your business to stand out and act as a fun way of gaining more exposure and lead generation. Plus, they are a pretty cost-effective way of boosting organic traffic and brand growth.
              </p>
              
              <hr className="border-gray-300 my-16 max-w-2xl mx-auto" />
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
                Corporate Photo Booth Features
              </h3>
              
              {/* First Row: Left description, Right image */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">Brand Engagement</h3>
                  <p className="text-gray-700 text-lg">
                    Increase brand engagement at your corporate events with interactive photo experiences that create memorable connections between attendees and your brand. Our customizable photo booths can be tailored to match your company's branding, creating a cohesive and professional experience.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    With branded overlays, custom backdrops, and personalized digital experiences, your brand will be front and center in every photo taken, maximizing exposure and creating lasting impressions with your audience.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/corporate-event-hero.jpg" 
                      alt="Brand Engagement" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Second Row: Left image, Right description */}
              <div className="flex flex-col md:flex-row-reverse items-center mb-16">
                <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">Lead Generation</h3>
                  <p className="text-gray-700 text-lg">
                    Transform your corporate events into powerful lead generation opportunities. Our photo booths can be configured to collect valuable contact information before guests receive their photos, helping you build your marketing database while providing a fun experience for attendees.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    Integrate with your CRM systems for seamless data collection and follow-up, turning event attendees into qualified leads and potential customers for your business.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/corporate-product-launch.jpg" 
                      alt="Lead Generation" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Third Row: Left description, Right image */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">Social Media Amplification</h3>
                  <p className="text-gray-700 text-lg">
                    Amplify your event's reach with instant social media sharing capabilities. Our photo booths allow guests to immediately share their photos on social platforms with your custom hashtags and branding, extending your event's impact far beyond the physical venue.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    Track engagement metrics and social media impressions to measure ROI and demonstrate the extended reach of your event through our comprehensive analytics dashboard.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/corporate-holiday-party.jpg" 
                      alt="Social Media Amplification" 
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
          style="background-image: url('/images/testimonial-bg.jpg'); min-height: 600px;"
        >
          <div className="absolute inset-0" style="background-color: rgba(0, 0, 0, 0.7);"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Unforgettable Corporate Experiences
              </h2>
              <p className="text-xl mb-8">
                Our photo booths create memorable moments that elevate your brand and engage your audience.
              </p>
            </div>
            
            {/* Brand Activations & Brand Awareness */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Brand Activations */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/corporate-product-launch.jpg" 
                    alt="Brand Activations" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">BRAND ACTIVATIONS</h3>
                <p className="text-gray-300">
                  With our interactive photo booth, clients and guests will enjoy immersive entertainment while feeling like they're connected to the product and learn about your brand.
                </p>
              </div>
              
              {/* Brand Awareness */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/corporate-booth.jpg" 
                    alt="Brand Awareness" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">BRAND AWARENESS</h3>
                <p className="text-gray-300">
                  With our branded overlays engage customers, capture leads, grow a social presence, & more.
                </p>
              </div>
            </div>
            
            {/* Corporate Examples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
              {/* Corporate Events */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/8.jpg" 
                    alt="Corporate Events" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">CORPORATE EVENTS</h3>
                <p className="text-gray-300">
                  Elevate your corporate gatherings with our professional photo booth services, creating lasting memories for attendees.
                </p>
              </div>
              
              {/* Holiday Parties */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/corporate-holiday-party.jpg" 
                    alt="Holiday Parties" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">HOLIDAY PARTIES</h3>
                <p className="text-gray-300">
                  Make your holiday celebrations unforgettable with custom-themed photo experiences that capture the festive spirit.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        
        
        {/* Our Booths Section */}
        <OurBooths 
          customDescription="Whether you're an individual, small business, or Fortune 500 company—we have the perfect booth for you. Below are our three famous photo booths to make it easy for you."
        />
        
        {/* Custom Backdrops Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">
              Custom Backdrops
            </h2>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg mb-8">
                75% of the picture is your backdrop! This is your opportunity to further brand the experience for each guest. 
                Our custom printed, double sided backdrops are fully customizable and yours to keep after the event!
              </p>
              
              <p className="text-lg mb-8">
                We also have a large selection of in house backdrops available.
              </p>
              
              <a href="/contact" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
                ORDER CUSTOM BACKDROP
              </a>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="py-16 bg-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What are you waiting for? Let's get started.
            </h2>
            <a href="/contact" className="inline-block bg-white text-pink-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-lg">
              BOOK NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Corporate;
