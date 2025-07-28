import { h } from 'preact';
import Footer from '../../components/Footer';

const Wedding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen flex items-center" style="background-image: url('/images/wedding-couple.jpg')">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6" style="font-family: 'Playfair Display', serif; font-style: italic; letter-spacing: 1px;">
              Photo Booth for Weddings
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mb-8">
              Make your special day even more memorable with our premium photo booth experiences that your guests will love.
            </p>
            <a href="#contact" className="inline-block btn-blue btn-hover-effect">
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center" style="font-family: 'Dancing Script', cursive; letter-spacing: 0.5px;">
                Capture Timeless Moments on Your Special Day
              </h2>
              
              <p className="text-lg mb-8 text-center">
                Our wedding photo booth packages are designed to add a touch of fun and elegance to your celebration. 
                With high-quality equipment, professional attendants, and customizable options, we ensure that your 
                wedding photo booth experience is as unique as your love story.
              </p>
                
              <p className="text-lg mb-8 text-center">
                From elegant backdrops to custom photo templates featuring your names and wedding date, we create a 
                seamless experience that matches your wedding theme and creates lasting memories for you and your guests.
              </p>
              
              <hr className="border-gray-300 my-16 max-w-2xl mx-auto" />
              
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12" style="font-family: 'Cormorant Garamond', serif; font-style: italic; letter-spacing: 1.5px; text-transform: uppercase;">
                Wedding Photo Booth Features
              </h3>
              {/* First Row: Left description, Right image */}
              <div className="flex flex-col md:flex-row items-center mb-16">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4" style="font-family: 'Tangerine', cursive; font-size: 2.5rem;">Elegant Wedding Experience</h3>
                  <p className="text-gray-700 text-lg">
                    Elevate your wedding celebration with our premium photo booth services. Our elegant setups are designed to complement your wedding décor and provide a sophisticated entertainment option for your guests.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    With custom templates featuring your names and wedding date, every photo becomes a cherished keepsake that captures the joy and celebration of your special day.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/wedding-feature.jpg" 
                      alt="Wedding Photo Booth" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Second Row: Left image, Right description */}
              <div className="flex flex-col md:flex-row-reverse items-center mb-16">
                <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4" style="font-family: 'Montserrat', sans-serif; letter-spacing: 2px; text-transform: uppercase; font-size: 1.5rem;">Guest Entertainment</h3>
                  <p className="text-gray-700 text-lg">
                    Keep your guests entertained throughout your reception with our interactive photo booth experience. It's the perfect activity during cocktail hour or reception downtime, ensuring your guests have fun while creating memories.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    Our high-quality props, customized to match your wedding theme, encourage guests to let loose and capture fun, candid moments that truly reflect the joy of your celebration.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/ssss.jpg" 
                      alt="Wedding Guest Entertainment" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              {/* Third Row: Left description, Right image */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4" style="font-family: 'Lora', serif; font-style: italic; font-size: 1.8rem;">Lasting Memories</h3>
                  <p className="text-gray-700 text-lg">
                    Create a collection of meaningful memories that will last a lifetime. Our photo booths not only provide instant prints for your guests to take home but also compile a digital album of all photos taken throughout your wedding day.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    Many couples tell us that their photo booth album contains some of their favorite candid moments from their wedding day, capturing genuine emotions and joy that formal photography sometimes misses.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/lasting-memories.jpg" 
                      alt="Wedding Memories" 
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style="font-family: 'Great Vibes', cursive; font-size: 3.2rem;">
                Unforgettable Wedding Moments
              </h2>
              <p className="text-xl mb-8">
                Our photo booths create beautiful memories that you and your guests will cherish forever.
              </p>
            </div>
            
            {/* Wedding Photo Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Bride & Groom */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/WEDDING.png" 
                    alt="Bride & Groom" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style="font-family: 'Cinzel', serif; letter-spacing: 1px;">BRIDE & GROOM</h3>
                <p className="text-gray-300">
                  Capture special moments between the newlyweds with our elegant photo booth setups designed specifically for wedding couples.
                </p>
              </div>
              
              {/* Wedding Party */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/10.jpg" 
                    alt="Wedding Party" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style="font-family: 'Raleway', sans-serif; letter-spacing: 2px;">WEDDING PARTY</h3>
                <p className="text-gray-300">
                  Let your wedding party and guests create fun, memorable photos that capture the joy and celebration of your special day.
                </p>
              </div>
            </div>
            
            {/* Additional Wedding Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">
              {/* Guest Book Alternative */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/corporate-event-hero.jpg" 
                    alt="Guest Book Alternative" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style="font-family: 'Libre Baskerville', serif; font-style: italic;">GUEST BOOK ALTERNATIVE</h3>
                <p className="text-gray-300">
                  Create a unique guest book with photos and messages from all your wedding guests - a beautiful keepsake you'll treasure forever.
                </p>
              </div>
              
              {/* Custom Templates */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-lg mb-6" style="height: 280px; overflow: hidden;">
                  <img 
                    src="/images/11.jpg" 
                    alt="Custom Templates" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style="font-family: 'Josefin Sans', sans-serif; letter-spacing: 1.5px;">CUSTOM TEMPLATES</h3>
                <p className="text-gray-300">
                  Personalized photo templates featuring your names, wedding date, and custom design elements that match your wedding theme.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Wedding Packages Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12" style="font-family: 'Playfair Display', serif; font-size: 2.8rem; font-style: italic;">
              Our Wedding Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Entertainment Print Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-500 py-4">
                  <h3 className="text-2xl font-bold text-center text-white">Entertainment Print Package</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-blue-600">Starts at 2 Hour Rental</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Full Service Photo Booth (High-End DSLR Camera)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Curated High-Quality Props to match event/theme</span>
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
                      <span>Unlimited Photos, GIFs, Boomerangs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Instant Sharing (text/email/QR Code)</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block btn-blue btn-hover-effect">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Luxury Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 border-2 border-blue-500">
                <div className="bg-blue-500 py-4">
                  <h3 className="text-2xl font-bold text-center text-white">Luxury Package</h3>
                  <p className="text-center text-white text-sm mt-1">Most Popular</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-blue-600">Starts at 3 Hour Rental</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Automatic upgrade to our Glamour Booth setup</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Glam Print is included</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Professional lighting and camera</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Choice of backdrops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Unlimited booth sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Choice of 2 x 6 or 4 x 6 photo prints (prints in 11 seconds)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Digital copies after the event</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block btn-blue btn-hover-effect">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Mémoire Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-500 py-4">
                  <h3 className="text-2xl font-bold text-center text-white">Mémoire | Prints + Memory Book</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-blue-600">Up to 3 Hour Rental</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Professional lighting and camera</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Choice of backdrops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Unlimited booth sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Choice of 2 x 6 or 4 x 6 photo prints (prints in 11 seconds)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Digital copies after the event</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Custom photo layout</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Customized Tap to Start screen to match the theme</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block btn-blue btn-hover-effect">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Packages Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12" style="font-family: 'Cormorant Garamond', serif; font-size: 2.6rem; letter-spacing: 1px;">
              Additional Wedding Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Wall Flower Package */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-500 py-4">
                  <h3 className="text-2xl font-bold text-center text-white">Wall Flower Package</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-blue-600">Starts at 4 Hour Rental</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Wall Flower Included</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Professional lighting and camera</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Choice of backdrops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>2 Professional On Site Attendants</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block btn-blue btn-hover-effect">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Basic Self-Serve Booth */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-500 py-4">
                  <h3 className="text-2xl font-bold text-center text-white">Basic Self-Serve Booth</h3>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-lg font-bold text-blue-600">Up to 2 Hour Rental</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Standard Backdrop (or provide your own)</span>
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
                      <span>Set Up and Tear Down</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block btn-blue btn-hover-effect">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Great Vibes', cursive; font-size: 3.5rem;">
              Ready to make your wedding unforgettable?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to check availability for your wedding date and secure your photo booth experience.
            </p>
            <a href="/contact" className="inline-block bg-transparent hover:bg-white hover:text-blue-500 text-white font-bold py-3 px-6 border border-white hover:border-transparent rounded-full transition-all duration-300 btn-hover-effect text-lg">
              BOOK NOW
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wedding;
