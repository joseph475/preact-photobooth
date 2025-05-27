import { h } from 'preact';
import Footer from '../../components/Footer';
import OurBooths from '../../components/OurBooths';

const Graduation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[70vh] flex items-center" style="background-image: url('/images/graduation/graduation-hero.jpg')">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              Graduation Photo Booth
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Make your graduation celebration unforgettable with our premium photo booth experiences that capture this pivotal moment in your life.
            </p>
            <a href="#contact" className="inline-block btn-blue btn-hover-effect">
              GET A QUOTE
            </a>
          </div>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Introduction Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Vancouver Graduation Photo Booth Rental
              </h2>
              
              <p className="text-lg mb-8 text-center">
                A graduation party is a day that celebrates a pivotal moment in our life. It's also a day you want your child to remember. 
                From the invites to the decorations to the food, a lot of planning and preparation goes into the perfect graduation party, 
                and adding a graduation photo booth rental at your party guarantees that your party will be a hit!
              </p>
              
              <p className="text-lg mb-8 text-center">
                Our booths not only entertain your guests but give them a memory to take home. With customizable print layouts, 
                start-up screens, and props that match your graduation theme, we create an experience that celebrates this important achievement.
              </p>
              
              <hr className="border-gray-300 my-12 max-w-2xl mx-auto" />
              
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Graduation Photo Booth Features
              </h3>
              
              {/* Features Grid - 2 rows, 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* Feature 1: Customizable Print Layouts */}
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg mb-6 h-64 overflow-hidden">
                    <img 
                      src="/images/10.jpg" 
                      alt="Print Layouts" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Customizable Print Layouts</h3>
                  <p className="text-gray-700">
                    Our exclusive customizable print layouts will precisely match your graduation theme and allow you to get creative with school colors and graduation year.
                  </p>
                </div>
                
                {/* Feature 2: Social Media Integration */}
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg mb-6 h-64 overflow-hidden">
                    <img 
                      src="/images/8.jpg" 
                      alt="Social Media Integration" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Social Media Integration</h3>
                  <p className="text-gray-700">
                    Share your achievement with friends and family through our complete social media integration with custom graduation hashtags.
                  </p>
                </div>
                
                {/* Feature 3: Premium Props */}
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg mb-6 h-64 overflow-hidden">
                    <img 
                      src="/images/7.jpg" 
                      alt="Premium Props" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Premium Props</h3>
                  <p className="text-gray-700">
                    From graduation caps to diplomas, our premium props match your event theme and capture the spirit of your academic achievement.
                  </p>
                </div>
                
                {/* Feature 4: Animated GIFs */}
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg mb-6 h-64 overflow-hidden">
                    <img 
                      src="/images/9.jpg" 
                      alt="Animated GIFs" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Animated GIFs</h3>
                  <p className="text-gray-700">
                    Create shareable animated GIFs that capture the fun and excitement of your graduation celebration.
                  </p>
                </div>
                
                {/* Feature 5: Custom Backdrops */}
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg mb-6 h-64 overflow-hidden">
                    <img 
                      src="/images/11.jpg" 
                      alt="Custom Backdrops" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Custom Backdrops</h3>
                  <p className="text-gray-700">
                    Premium backdrops large enough to fit up to 8 persons, perfect for group photos with classmates.
                  </p>
                </div>
                
                {/* Feature 6: Instant Prints */}
                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg mb-6 h-64 overflow-hidden">
                    <img 
                      src="/images/corporate-booth.jpg" 
                      alt="Instant Prints" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Instant Prints</h3>
                  <p className="text-gray-700">
                    Take home high-quality photo prints instantly as a memento of your graduation celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Examples Section with Parallax */}
        <div 
          className="py-24 bg-fixed bg-center bg-cover relative"
          style="background-image: url('/images/graduation/graduation-parallax-bg.jpg'); min-height: 600px;"
        >
          <div className="absolute inset-0" style="background-color: rgba(0, 0, 0, 0.7);"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Unforgettable Graduation Experiences
              </h2>
              <p className="text-xl mb-8">
                Our photo booths create memorable moments that celebrate your academic achievements and the beginning of your next chapter.
              </p>
            </div>
            
            {/* Graduation Moments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Graduation Celebrations */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/10.jpg" 
                    alt="Graduation Celebrations" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">GRADUATION CELEBRATIONS</h3>
                <p className="text-gray-300">
                  Capture the joy and accomplishment of your graduation day with friends and family in our interactive photo booth.
                </p>
              </div>
              
              {/* School Spirit */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/11.jpg" 
                    alt="School Spirit" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">SCHOOL SPIRIT</h3>
                <p className="text-gray-300">
                  Show your school pride with custom props and backdrops featuring your school colors and mascot.
                </p>
              </div>
            </div>
            
            {/* Additional Examples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
              {/* Animated GIFs */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/9.jpg" 
                    alt="Animated GIFs" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">ANIMATED GIFs</h3>
                <p className="text-gray-300">
                  Create shareable animated GIFs that capture the fun and excitement of your graduation celebration.
                </p>
              </div>
              
              {/* Custom Backdrops */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/7.jpg" 
                    alt="Custom Backdrops" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">CUSTOM BACKDROPS</h3>
                <p className="text-gray-300">
                  Premium backdrops large enough to fit up to 8 persons, perfect for group photos with classmates.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Packages Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Graduation Photo Booth Packages
              </h2>
              
              <p className="text-lg mb-12 text-center">
                To make the booking process fun and easy, our team has tailored Photo Booth packages according to your graduation event needs with premium features included and options to add additional features.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Silver Package */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="bg-gray-100 p-6">
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                      SILVER PACKAGE
                    </h3>
                    <p className="text-lg text-center">2 Hours Rental</p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-4 text-center">
                      <li>2 HOURS OF PHOTO BOOTH USE</li>
                      <li>PHOTOS & GIFs</li>
                      <li>1 BOOTH ATTENDANT</li>
                      <li>ONE 4X6 PRINT PER SESSION</li>
                      <li>STANDARD PROPS</li>
                      <li>MATTE OR GLOSSY PHOTO PAPER</li>
                      <li>ONLINE GALLERY</li>
                      <li>SETUP AND TAKEDOWN INCLUDED</li>
                    </ul>
                  </div>
                </div>
                
                {/* Gold Package */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="bg-gray-100 p-6">
                    <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
                      GOLD PACKAGE
                    </h3>
                    <p className="text-lg text-center">3 Hours Rental</p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-4 text-center">
                      <li>3 HOURS OF PHOTO BOOTH USE</li>
                      <li>PHOTOS & GIFs</li>
                      <li>2 BOOTH ATTENDANT</li>
                      <li>INSTANT SHARE VIA EMAIL OR QR CODE</li>
                      <li>UNLIMITED SESSIONS</li>
                      <li>STANDARD BACKDROP</li>
                      <li>ONE 4X6 PRINT PER SESSION</li>
                      <li>STANDARD PROPS</li>
                      <li>MATTE OR GLOSSY PHOTO PAPER</li>
                      <li>ONLINE GALLERY</li>
                      <li>SETUP AND TAKEDOWN INCLUDED</li>
                    </ul>
                  </div>
                </div>
                
                {/* Platinum Package */}
                <div className="bg-gradient-to-b from-blue-500 to-blue-400 text-white rounded-lg shadow-lg overflow-hidden h-full">
                  <div className="bg-blue-700 p-6">
                    <h3 className="text-2xl font-bold text-center text-white mb-2">
                      PLATINUM PACKAGE
                    </h3>
                    <p className="text-lg text-center">4 Hours Rental</p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-4 text-center">
                      <li>4 HOURS OF PHOTO BOOTH USE</li>
                      <li>PHOTOS & GIFs</li>
                      <li>2 BOOTH ATTENDANT</li>
                      <li>INSTANT SHARE VIA EMAIL OR QR CODE</li>
                      <li>UNLIMITED SESSIONS</li>
                      <li>STANDARD BACKDROP</li>
                      <li>CUSTOM DESIGN PRINT TEMPLATE</li>
                      <li>ONE 4X6 PRINT PER SESSION</li>
                      <li>PREMIUM PROPS</li>
                      <li>MATTE OR GLOSSY PHOTO PAPER</li>
                      <li>ONLINE GALLERY</li>
                      <li>SETUP AND TAKEDOWN INCLUDED</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add-ons Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">
              Add-ons
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Stand-by Time */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Stand-by Time</h3>
                  <p className="text-gray-600">
                    Add non-operational time in between your speeches and dinner time.
                  </p>
                </div>
              </div>
              
              {/* Double Prints */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Double Prints</h3>
                  <p className="text-gray-600">
                    Get double prints for groups or keep for your guest book (standard size).
                  </p>
                </div>
              </div>
              
              {/* USB */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">USB</h3>
                  <p className="text-gray-600">
                    Premium flash drive with all your high-quality graduation images.
                  </p>
                </div>
              </div>
              
              {/* Snapchat Filter */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Snapchat Filter</h3>
                  <p className="text-gray-600">
                    Take your graduation event to the next level with our customized Snapchat filter.
                  </p>
                </div>
              </div>
              
              {/* Custom Backdrop */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Backdrop</h3>
                  <p className="text-gray-600">
                    Step & Repeat backdrop or anything you want to showcase your graduation achievement!
                  </p>
                </div>
              </div>
              
              {/* Extra Hour */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Extra Hour</h3>
                  <p className="text-gray-600">
                    Add additional hours for larger graduation events so everyone gets a chance!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg mb-8">
                Custom packages are available! Just let us know the features you desire and we will send you a customized quote.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Booths Section */}
        <OurBooths 
          customDescription="Whether you're celebrating high school, college, or graduate school completion—we have the perfect booth for your graduation event. Below are our three famous photo booths to make your celebration memorable."
        />

        {/* Call to Action Section */}
        <div className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What are you waiting for? Let's get your graduation celebration started.
            </h2>
            <a href="/contact" className="inline-block bg-transparent hover:bg-white hover:text-blue-500 text-white font-bold py-3 px-6 border border-white hover:border-transparent rounded-full transition-all duration-300 btn-hover-effect text-lg">
              BOOK NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Graduation;
