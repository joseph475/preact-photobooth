import { h } from 'preact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BackdropGallery from '../components/BackdropGallery';

const Backdrops = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-br from-green-700 to-teal-500 py-20 overflow-hidden">
          {/* Decorative Frame Corners */}
          <div className="absolute top-4 left-4 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
              <path d="M4 4h6v6H4z M4 4v6h6" />
            </svg>
          </div>
          <div className="absolute top-4 right-4 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
              <path d="M20 4h-6v6h6z M20 4v6h-6" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
              <path d="M4 20h6v-6H4z M4 20v-6h6" />
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
              <path d="M20 20h-6v-6h6z M20 20v-6h-6" />
            </svg>
          </div>
          
          {/* Photography Icons */}
          <div className="absolute top-1/4 left-8 opacity-20 animate-pulse" style="animation-duration: 4s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
            </svg>
          </div>
          <div className="absolute bottom-1/4 right-8 opacity-20 animate-pulse" style="animation-duration: 3s; animation-delay: 1s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Decorative element above title */}
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center">
                <div className="h-px w-8 bg-white opacity-70"></div>
                <div className="mx-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                  </svg>
                </div>
                <div className="h-px w-8 bg-white opacity-70"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 relative">
              <span className="relative z-10">HI THERE! GOOD TO SEE YOU HERE!</span>
              {/* Decorative background element for title */}
              <span className="absolute inset-0 bg-white opacity-5 transform -skew-x-3 rounded-lg" style="z-index: 1;"></span>
            </h1>
            
            <p className="text-white text-lg max-w-3xl mx-auto mb-6">
              Our top priority is providing you with the best possible photo booth 
              experience. That's why we are continually updating our selection 
              of backdrops to ensure that we can provide you with the 
              greatest options.
            </p>
            
            {/* Decorative element below text */}
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-white opacity-50 rounded-full"></div>
            </div>
          </div>
          
          {/* Wavy divider at bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12" fill="white">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>
        </div>
        
        <BackdropGallery />
        
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-blue-500 text-center">Custom Backdrop Options</h2>
              
              <p className="text-lg mb-8 text-center">
                If you don't see one that you like, please reach out to us at <a href="mailto:info@jackphotobooth.ca" className="text-blue-500 hover:underline">jackphotoboothca@gmail.com                </a>
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Custom Backdrop Features:</h3>
                
                <ul className="list-disc pl-5 space-y-3 mb-8">
                  <li>Personalized designs to match your event theme</li>
                  <li>Custom sizes available for any venue</li>
                  <li>High-quality materials for a professional look</li>
                  <li>Brand integration for corporate events</li>
                  <li>Quick turnaround times</li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="/contact" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md text-lg transition-colors btn-hover-effect"
                  >
                    INQUIRE ABOUT CUSTOM BACKDROPS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Backdrops;
