import { h } from 'preact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 to-pink-600 py-20 overflow-hidden">
        {/* Decorative Elements - Camera Icons */}
        <div className="absolute top-4 left-4 opacity-20 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg>
        </div>
        <div className="absolute top-12 right-12 opacity-20 animate-pulse" style="animation-delay: 1s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
        </div>
        
        {/* Existing Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-4 left-1/4 text-white opacity-20 text-9xl font-elegant">team</div>
          <div className="absolute bottom-0 right-1/4 text-white opacity-20 text-8xl font-modern">passion</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Decorative line above title */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl text-white mb-3 font-creative tracking-wider uppercase relative inline-block">
            <span className="relative z-10">About Us</span>
            <span className="absolute -top-2 -right-2 text-pink-300 opacity-30 text-6xl md:text-7xl" style="z-index: 1;">•</span>
          </h1>
          
          {/* Decorative line below title */}
          <div className="flex justify-center mt-4">
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
        {/* Our Background Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-blue-500 mb-12 font-modern">
              Our Background
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 relative">
                <img 
                  src="/images/1.jpeg" 
                  alt="Photo Booth Experience" 
                  className="w-full h-auto rounded-full shadow-lg transform rotate-2"
                />
                <div className="absolute -bottom-4 -right-4 text-blue-500 text-4xl font-stylish transform -rotate-6">
                  experience
                </div>
              </div>
              
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  Jack PhotoBoothCA is your premium photo booth service provider in Saint John. We provide you with a unique, exciting, and memorable experience for all your special occasions including weddings, birthdays, corporate events, graduations and more!
                </p>
                <p className="text-lg mb-6">
                  We are known for adding our personal touch to every event we serve. Our packages and customization options will provide you with everything you need to make your event unique to you. We're here to help you make your event stand out from the rest!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Who I Work With Section */}
        <div className="py-16 bg-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 text-pink-600 text-9xl font-stylish">create</div>
            <div className="absolute bottom-1/4 right-1/4 text-blue-500 text-9xl font-creative">fun</div>
          </div>
          
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-blue-500 mb-12 font-elegant">
              Who We Are
            </h2>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2 relative">
                <img 
                  src="/images/3.jpeg" 
                  alt="Our Team" 
                  className="w-full h-auto rounded-lg shadow-lg transform -rotate-1"
                />
                <div className="absolute -bottom-4 -left-4 text-pink-600 text-4xl font-modern transform rotate-3">
                  creativity
                </div>
              </div>
              
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  Hi! We are Jack PhotoBoothCA, a team of passionate professionals dedicated to creating unforgettable photo booth experiences. Our team combines technical expertise with creative vision to ensure your event is captured perfectly.
                </p>
                <p className="text-lg mb-6">
                  We handle everything from logistics and troubleshooting to creative direction and customer service. Our goal is to provide exceptional service in every photo booth session throughout your time with us so you have good and fun memories.
                </p>
                <p className="text-lg">
                  We believe that great events deserve great memories, and we're committed to helping you create those special moments that last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Gallery Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center text-blue-500 mb-12 font-creative tracking-wider">
              Our Photo Booths in Action
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg shadow-lg transform -rotate-2">
                <img 
                  src="/images/3.jpeg" 
                  alt="Photo Booth Example 1" 
                  className="w-full h-64 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transform rotate-1">
                <img 
                  src="/images/4.jpeg" 
                  alt="Photo Booth Example 2" 
                  className="w-full h-64 object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg transform -rotate-1">
                <img 
                  src="/images/5.jpeg" 
                  alt="Photo Booth Example 3" 
                  className="w-full h-64 object-cover transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Got Questions Section */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center text-blue-500 mb-12 font-stylish">
              Got Questions?
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-8 text-center">
                We'd love to answer any photo booth questions you may have! Click the button below and we'll respond within 24 hours.
              </p>
              
              <div className="text-center">
                <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-stylish py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
