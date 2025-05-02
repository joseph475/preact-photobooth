import { h } from 'preact';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-800 to-teal-500 py-20 overflow-hidden">
        {/* Decorative Elements - Event Icons */}
        <div className="absolute top-4 left-4 opacity-20 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
          </svg>
        </div>
        <div className="absolute top-12 right-12 opacity-20 animate-pulse" style="animation-delay: 1s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </div>
        
        {/* Existing Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-4 left-1/4 text-white opacity-20 text-9xl font-elegant">celebrate</div>
          <div className="absolute bottom-0 right-1/4 text-white opacity-20 text-8xl font-modern">moments</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Decorative line above title */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white mb-3 font-creative tracking-wider uppercase relative inline-block">
            <span className="relative z-10">Event Packages</span>
            <span className="absolute -top-2 -right-2 text-indigo-300 opacity-30 text-6xl md:text-7xl" style="z-index: 1;">✦</span>
          </h1>
          
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-6">
            Turn your special event into an unforgettable experience with our premium photo booth services
          </p>
          
          {/* Decorative line below description */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Wavy divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12" fill="white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Introduction Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-elegant text-teal-600 mb-6">
                Create Lasting Memories at Your Next Event
              </h2>
              
              <p className="text-lg mb-8">
                Whether you're planning a corporate gathering, birthday celebration, graduation party, or any special occasion, 
                our photo booth experiences add that perfect touch of fun and excitement. We offer customizable packages 
                designed to match your event's theme and atmosphere, ensuring your guests leave with cherished memories.
              </p>
              
              <div className="flex justify-center mb-12 relative">
                <div className="rounded-lg shadow-xl w-full max-w-2xl transform -rotate-1 overflow-hidden">
                  <img 
                    src="/images/7.jpg" 
                    alt="Event Photo Booth" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 text-teal-600 text-5xl font-stylish transform rotate-6">
                  celebrate
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Event Types Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-indigo-700 mb-12 font-modern">
              Perfect for Any Occasion
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Holiday Parties */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-red-100 flex items-center justify-center">
                  <span className="text-red-700 text-xl font-bold">Holiday Parties</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-stylish text-red-700 mb-3">Holiday Parties</h3>
                  <p className="text-gray-700 mb-4">
                    Add festive fun to your holiday celebrations with our interactive photo booth.
                  </p>
                </div>
              </div>
              
              {/* Birthday Celebrations */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-700 text-xl font-bold">Birthday Celebrations</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-stylish text-teal-600 mb-3">Birthday Celebrations</h3>
                  <p className="text-gray-700 mb-4">
                    Make your birthday party unforgettable with our fun and interactive photo booth.
                  </p>
                </div>
              </div>
              
              {/* Graduation Parties */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-700 text-xl font-bold">Graduation Parties</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-stylish text-purple-600 mb-3">Graduation Parties</h3>
                  <p className="text-gray-700 mb-4">
                    Celebrate academic achievements with a photo booth that captures the joy of graduation day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Packages Section */}
        <div className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 text-indigo-600 text-9xl font-stylish">fun</div>
            <div className="absolute bottom-1/4 right-1/4 text-teal-500 text-9xl font-creative">party</div>
          </div>
          
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-indigo-700 mb-12 font-modern">
              Our Event Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Digital Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 transform -rotate-1 border border-gray-200">
                <div className="bg-gray-200 py-4">
                  <h3 className="text-2xl font-stylish text-center text-gray-800">Basic Digital Package</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-indigo-600">2 Hour Rental</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Self-Serve Photo Booth</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Standard Backdrop</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Unlimited Digital Photos</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Instant Sharing (text/email/QR Code)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Live Gallery Website</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-stylish py-2 px-6 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Entertainment Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 border-2 border-teal-500">
                <div className="bg-teal-600 py-4">
                  <h3 className="text-2xl font-creative text-center text-white">Entertainment Package</h3>
                  <p className="text-center text-white text-sm mt-1">Most Popular</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-teal-600">3 Hour Rental</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Full Service Photo Booth</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Professional Attendant</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Unlimited Photos & Prints</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Custom Photo Template</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Premium Props</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Digital Copy of All Photos</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-stylish py-2 px-6 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              
              {/* VIP Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 transform rotate-1 border border-gray-200">
                <div className="bg-purple-700 py-4">
                  <h3 className="text-2xl font-elegant text-center text-white">VIP Package</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-purple-600">4 Hour Rental</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Everything in Entertainment Package</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Premium Backdrop Selection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>GIF & Boomerang Capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Luxury Guest Book</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>VIP Attendant Service</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Custom Photo Layout Design</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-stylish py-2 px-6 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add-ons Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-indigo-700 mb-8 font-modern">
              Add-ons
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-lg text-indigo-700">Extra Hour</span>
                  <span className="font-semibold text-indigo-600">$100</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-lg text-indigo-700">Custom Backdrop</span>
                  <span className="font-semibold text-indigo-600">$150</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-lg text-indigo-700">Memory Book</span>
                  <span className="font-semibold text-indigo-600">$75</span>
                </li>
                <li className="flex justify-between items-center pb-3">
                  <span className="text-lg text-indigo-700">Social Media Station</span>
                  <span className="font-semibold text-indigo-600">$100</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-stylish mb-6">
              Ready to make your event unforgettable?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to check availability and secure your photo booth experience.
            </p>
            <a href="/contact" className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-stylish py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Contact Us Now
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
