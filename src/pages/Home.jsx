import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState, useEffect, useRef } from 'preact/hooks';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Check if user has scrolled past the hero section
      if (position > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Apply parallax effect to content sections
      if (contentRef.current) {
        const sections = contentRef.current.children;
        Array.from(sections).forEach((section, index) => {
          // Skip the spacer div
          if (index === 0) return;
          
          // Calculate opacity and transform based on scroll position
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          // When section comes into view
          if (position > sectionTop - viewportHeight && position < sectionTop + sectionHeight) {
            const progress = (position - (sectionTop - viewportHeight)) / viewportHeight;
            const opacity = Math.min(1, progress * 1.5);
            const translateY = Math.max(0, 20 - (progress * 20));
            
            section.style.opacity = opacity;
            section.style.transform = `translateY(${translateY}px)`;
          }
        });
        
        // Add parallax effect to the content wrapper itself
        const heroHeight = window.innerHeight;
        const scrollRatio = Math.min(1, position / heroHeight);
        
        // Create a subtle "pushing up" effect as user scrolls
        // if (position < heroHeight * 1.5) {
        //   const translateY = 30 * (1 - scrollRatio);
        //   const scale = 0.98 + (0.02 * scrollRatio);
        //   const borderRadius = 30 + (10 * scrollRatio);
          
        //   contentRef.current.style.borderTopLeftRadius = `${borderRadius}px`;
        //   contentRef.current.style.borderTopRightRadius = `${borderRadius}px`;
        //   contentRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
        // }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="relative">
      <div className="sticky top-0 z-0 h-screen">
        <Hero />
      </div>
      
      {/* Content wrapper - all content that should overlap the hero */}
      <div ref={contentRef} className="relative z-10 bg-white">
        
        {/* Quote Banner - becomes sticky when scrolled */}
        <div className={`bg-blue-500 text-white py-3 transition-all duration-300 ${
          isScrolled ? 'sticky top-16 z-40 shadow-md' : ''
        }`}>
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-bold italic">
              "Your Premier Photobooth Experience in the Canadian Maritimes!"
            </p>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 3000 photo booth events under our belt since 2018, we have a proven track record for executing high-end, one-of-a-kind, memorable photo booth, GIF, and video experiences.
            </p>
          </div>
        </div>
        
        {/* What Kind Of Event Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              What Kind Of Event Are You Having?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src="/images/mirror-booth.jpg" alt="Corporate Events" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <Link 
                    href="/packages/corporate" 
                    className="inline-block btn-blue"
                  >
                    CORPORATE EVENTS
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src="/images/wedding-booth.jpg" alt="Wedding Events" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <Link 
                    href="/packages/wedding" 
                    className="inline-block btn-blue"
                  >
                    WEDDING EVENTS
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src="/images/event-booth.jpg" alt="Special Events" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <Link 
                    href="/packages/events" 
                    className="inline-block btn-blue"
                  >
                    SPECIAL EVENTS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* JACKSpin (360 Booth) Vancouver Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="/images/event-booth.jpg" 
                  alt="JACKSpin (360 Booth) Vancouver" 
                  className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  JACKSpin (360 Booth) Vancouver
                </h2>
                <p className="text-lg mb-6">
                  Our JACKSpin (360 Booth) Vancouver rental is perfect for Weddings, Birthday Parties, Corporate events, bridal/baby showers, Reception parties and so much more. Renting a Photo Booth from us is a very easy and quick process. Our Photo Booths can turn any type of events into a party and publish your event on all social Media like Facebook, Twitter or Instagram. The sky's the limit!
                </p>
                <Link href="/open-air-photobooth" className="inline-block btn-blue-outline">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Features
            </h2>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">360 BOOTH CONCEPT</h3>
                  <p className="text-gray-600">Our 360 booth concept allows you to include more people in the fun.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">INSTANT PRINT</h3>
                  <p className="text-gray-600">Instant Prints in a blink after each session.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">SOCIAL</h3>
                  <p className="text-gray-600">Full social media integration so your party can continue online.</p>
                </div>
              </div>
            </div>
            
            {/* Detailed Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Instant Print Feature */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Instant Print</h3>
                  <div className="w-16 h-1 bg-blue-500 mb-6"></div>
                  <p className="text-gray-700 mb-4">
                    No limits on the amount of shots you take or prints you make! Customizable print layouts to match your event's decor or theme.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/images/1.jpeg" 
                    alt="Instant Print Feature" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Get Social Feature */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Get Social</h3>
                  <div className="w-16 h-1 bg-blue-500 mb-6"></div>
                  <p className="text-gray-700 mb-4">
                    Full social media integration so your party can continue online. Guests LOVE to instantly share their images via social media, text and email.
                  </p>
                </div>

                <div className="md:w-1/2">
                  <img 
                    src="/images/wedding-decor.jpg" 
                    alt="Social Media Feature" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* The JACKSpot Experience Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The JACKSpot<br />Experience
                </h2>
                <p className="text-lg mb-4">
                  We're excited to share with you our most recent hottest trending photo and video experiences: The JACKSpot.
                </p>
                <p className="text-lg mb-4">
                  The JACKSpot takes up to 4 guests upon its elevated platform as its studio grade camera rotates around them creating a truly unique experience.
                </p>
                <p className="text-lg mb-6">
                  Each session is ready in under 30 seconds to be instantly shared over a variety of social media platforms including Facebook, Instagram, Snapchat and TikTok.
                </p>
                <a href="/ai-photobooth" className="inline-block btn-blue-outline">
                  LEARN MORE
                </a>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="/images/b1.webp" 
                  alt="The JACKSpot Experience" 
                  className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Enclosed Photo Booth Rentals Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <img 
                  src="/images/enclosed.webp" 
                  alt="Enclosed Photo Booth Rentals" 
                  className="w-full h-auto rounded-lg transition-all duration-300"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Enclosed Photo<br />Booth Rentals
                </h2>
                <p className="text-lg mb-6">
                  Do you prefer having the old school classic feel of a photo booth? Having an open concept photo booth may not be everyone's cup of tea, so we like to keep our options open. If you want that glam feel of the classic enclosed photo booth, look no further. We make sure to keep the same quality of photographs for the enclosed photo booths, as we do for the open concept. And don't have to worry about squishing into a tight space. We make our enclosed photo booths roomy enough to fit up to 6 people! So go ahead and round up a group of friends and start posing!
                </p>
                <a href="/enclosed-photo-booth" className="inline-block btn-blue">
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* THE RETRO JACK Rentals Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 mb-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  THE RETRO JACK<br />Rentals
                </h2>
                <p className="text-lg mb-6">
                  For Brand Activation or Full Day Conferences, We offer Self-Service Photo and GIF Booths. We keep things simple so you don't have to fuss around with wires, cables, cameras and of course complicated technology. We make everything user-friendly so you can enjoy the event with the guests. Whether you choose to keep the photo booth for a few hours, a few days, or even weeks, we offer multiple day rentals for a fraction of the price.
                </p>
                <a href="/selfie-station" className="inline-block btn-blue-outline">
                  LEARN MORE
                </a>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                  src="/images/self-serve-booth.jpg" 
                  alt="THE RETRO JACK Rentals"
                  className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Enactus Nationals */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img 
                    src="/images/1.jpeg" 
                    alt="Enactus Nationals Event" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-bold">#EnactusNationals</p>
                  </div>
                </div>
              </div>
              
              {/* Vancouver Sun Run */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img 
                    src="/images/2.jpeg" 
                    alt="Vancouver Sun Run 2019" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-bold">VANCOUVER SUN RUN 2019</p>
                  </div>
                </div>
              </div>
              
              {/* Patterson Dental */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img 
                    src="/images/3.jpeg" 
                    alt="Patterson Dental Event" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-bold">CHARGE UP YOUR PRACTICE</p>
                  </div>
                </div>
              </div>
              
              {/* BC Tech Summit */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img 
                    src="/images/4.jpeg" 
                    alt="BC Tech Summit" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-bold">#BCTECHSummit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700">
                Nothing beats the laughs once you see the final product of your creativity. Our THE RETRO JACK takes series of photos sequentially and mashed together to create an Animated repeating clip.
              </p>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                Green Screen Photo Booth Rentals
              </h2>
              <p className="text-xl text-center max-w-4xl mb-12">
                Simply replace a green background with a custom designed background using our innovative green screen technology. Be it Star Wars, Hockey themed, or anything you want your guests to experience. We got you covered!
              </p>
        
              </div>
              
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative">
                  <img 
                    src="/images/Greenscreen-Photo-Booth.webp" 
                    alt="Nomad Photography Service" 
                    className="w-full h-auto rounded-lg transition-all duration-300"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-blue-100 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nomad Photography Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Nomad Photography
                </h2>
                
                {/* Blue Divider */}
                <div className="w-32 h-1 bg-blue-300 mb-8 md:mx-0 mx-auto"></div>
                
                <p className="text-lg mb-8">
                  We strive to capture the most candid, beautifully unplanned photos throughout your event. Nothing is better than reminiscing over one of a kind photos. Add branded overlays and instant on-site photo printing along email sharing feature. Our skilled photographer makes their way throughout the crowd to capture each guest at the event.
                </p>
                
                <a href="/nomad-photography" className="inline-block btn-blue">
                  BOOK NOW
                </a>
              </div>
              
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative">
                  <img 
                    src="/images/7.jpg" 
                    alt="Nomad Photography Service" 
                    className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-blue-100 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Event Galleries Section - Full Width with Image Collage */}
        <div className="relative py-24 overflow-hidden mb-10 border-b border-t border-gray-400">
          {/* Image Collage Background */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-1 opacity-20">
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/1.jpeg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/2.jpeg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/3.jpeg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/4.jpeg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/5.jpeg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/6.jpeg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/7.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/8.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/9.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/10.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/11.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/wedding-booth.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/corporate-booth.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/event-booth.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/mirror-booth.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/self-serve-booth.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/wedding-couple.jpg')" }}></div>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/wedding-guests.jpg')" }}></div>
          </div>
          
          {/* Light Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Event Galleries
            </h2>
            
            {/* Blue Divider */}
            <div className="w-40 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Find your pictures in our event galleries below and feel free to download them or share with your friends.
            </p>
            
            <a href="/gallery" className="inline-block btn-blue transform hover:scale-105">
              FIND YOUR PICTURES
            </a>
          </div>
        </div>
        
        {/* <ServiceSection 
          title="PHOTO BOOTH FOR WEDDINGS"
          description="Capture the timeless moments of your special day with our exquisite Wedding Photo Booth services. Our state-of-the-art photo booth is designed to add a touch of elegance and fun to your wedding festivities."
          imageUrl="/images/10.jpg"
          buttonText="VIEW WEDDING PACKAGES"
          buttonLink="/packages/wedding"
        />
        
        <ServiceSection 
          title="PHOTO BOOTH FOR EVENTS"
          description="Elevate the glamour and excitement of your high-profile events such as galas, awards ceremonies, and prestigious gatherings with our cutting-edge Photo Booth services."
          imageUrl="/images/7.jpg"
          buttonText="VIEW EVENT PACKAGES"
          buttonLink="/packages/events"
          isReversed={true}
        />
        
        <ServiceSection 
          title="PHOTO BOOTH FOR CORPORATE EVENTS"
          description="Are you seeking innovative ways in which you can use a photo booth as a marketing tool? A photo booth is a great way to engage with your customers and create a unique guest book experience for your corporate events."
          buttonText="VIEW CORPORATE PACKAGES"
          imageUrl="/images/8.jpg"
          buttonLink="/packages/corporate"
        />
        
        <ServiceSection 
          title="THE JACKSPOT EXPERIENCE"
          description="Experience our cutting-edge JACKSpot technology! It's FUN! It's LIT! It's MEMORABLE! Great for personal or company event rentals."
          buttonText="VIEW THE JACKSPOT EXPERIENCE"
          buttonLink="/ai-booth"
          imageUrl="/images/11.jpg"
          isReversed={true}
        /> */}
        
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
