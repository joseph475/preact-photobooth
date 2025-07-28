import { h } from 'preact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState, useEffect } from 'preact/hooks';
import { listImages } from '../services/cloudinaryService';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  // State for gallery images from Cloudinary
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoadingGallery, setIsLoadingGallery] = useState(true);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Add scroll event listener for parallax effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('about-hero');
      if (heroSection) {
        // Create parallax effect on scroll
        const yPos = scrollPosition * 0.3;
        heroSection.style.backgroundPositionY = `calc(50% + ${yPos}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch images from Cloudinary
  useEffect(() => {
    const fetchCloudinaryImages = async () => {
      try {
        setIsLoadingGallery(true);
        
        // If Cloudinary is configured, fetch images from there
        if (process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME) {
          try {
            // Fetch images from the in-action folder in Cloudinary
            const result = await listImages('in-action');
            
            console.log('About Us Gallery: Cloudinary images result:', result);
            
            if (result && result.resources && result.resources.length > 0) {
              // Map the Cloudinary resources to our gallery format
              const cloudinaryImages = result.resources.map((resource, index) => {
                
                return {
                  id: index + 1,
                  src: resource.secure_url
                };
              });
              
              setGalleryImages(cloudinaryImages);
              setIsLoadingGallery(false);
              return;
            }
          } catch (error) {
            console.error('Error fetching Cloudinary images for About Us Gallery:', error);
            // Fall back to local images
          }
        }
        
        // Fallback to local images if Cloudinary fetch fails or is not configured
        const fallbackImages = [
          {
            id: 1,
            src: "/images/3.jpeg",
            alt: "Wedding Events",
            caption: "Wedding Events"
          },
          {
            id: 2,
            src: "/images/4.jpeg",
            alt: "Corporate Events",
            caption: "Corporate Events"
          },
          {
            id: 3,
            src: "/images/5.jpeg",
            alt: "Special Occasions",
            caption: "Special Occasions"
          }
        ];
        
        setGalleryImages(fallbackImages);
        setIsLoadingGallery(false);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setIsLoadingGallery(false);
      }
    };
    
    fetchCloudinaryImages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Hero Section - 80vh height as requested */}
      <div 
        id="about-hero" 
        className="relative h-[80vh] bg-cover bg-center bg-fixed overflow-hidden flex items-center justify-center"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/corporate-event-hero.jpg');"
      >
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 rounded-full border-4 border-pink-500 opacity-20 animate-pulse"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
            <div className="w-96 h-96 rounded-full border-4 border-blue-500 opacity-20 animate-pulse" style="animation-delay: 1.5s;"></div>
          </div>
          
          {/* Floating Camera Icons */}
          <div className="absolute top-1/3 right-1/4 opacity-30 animate-bounce" style="animation-duration: 3s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 16 16">
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/4 opacity-30 animate-bounce" style="animation-duration: 4s; animation-delay: 1s;">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="white" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
          </div>
          
          {/* Abstract Word Art */}
          <div className="absolute top-10 left-10 text-white opacity-10 text-9xl font-elegant transform -rotate-12">team</div>
          <div className="absolute bottom-10 right-10 text-white opacity-10 text-8xl font-modern transform rotate-6">passion</div>
          <div className="absolute top-1/2 left-3/4 text-white opacity-10 text-7xl font-creative transform -rotate-45">create</div>
        </div>
        
        {/* Hero Content - with animation */}
        <div className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Decorative elements */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl text-white mb-6 font-bold tracking-wider uppercase relative inline-block">
            <span className="relative z-10">About Us</span>
            <span className="absolute -top-3 -right-3 text-pink-500 opacity-50 text-7xl md:text-8xl" style="z-index: 1;">•</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            We turn <span className="text-pink-400 font-bold">special moments</span> into cherished memories through creative photo experiences.
          </p>
          
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-10">
            <a 
              href="#our-background" 
              className="btn-blue text-xl transform hover:scale-105 hover:shadow-lg inline-flex items-center"
            >
              Discover Our Story
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Wavy divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16" fill="white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,40.17,263.46,67.29,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      
      <main className="flex-grow">
        {/* Our Background Section */}
        <div id="our-background" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center text-blue-500 mb-12 font-modern relative">
              Owner
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full"></div>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 relative">
                <img 
                  src="/images/owner1.jpg" 
                  alt="Photo Booth Experience" 
                  className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-300 hover:rotate-0 hover:scale-105"
                />
              </div>
              
              <div className="md:w-1/2">
                <p className="text-lg mb-6 leading-relaxed">
                  I’m Joseph Castelo, the founder of JACKPHOTOBOOTH. With over 20 years of experience in the printing and design industry—including running my own print shop back in the Philippines—I’ve always been passionate about bringing creative ideas to life. From operating large format printers and graphic design software to managing teams and delivering top-quality products, I’ve built my career around precision, creativity, and customer satisfaction.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  That same passion drives JACKPHOTOBOOTH today. Every event we serve is a chance to create something fun, meaningful, and memorable. I take pride in making sure everything runs smoothly, from setup to final snapshots, so you and your guests can focus on enjoying the moment. For me, it’s more than just a photobooth—it’s about capturing joy, one clicks at a time.
                </p>
                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-pink-500">1000+</div>
                    <div className="text-gray-600">Events</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-blue-500">14</div>
                    <div className="text-gray-600">Years</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                    <div className="text-3xl font-bold text-purple-500">100%</div>
                    <div className="text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Who We Are Section */}
        <div className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 text-pink-600 text-9xl font-stylish">create</div>
            <div className="absolute bottom-1/4 right-1/4 text-blue-500 text-9xl font-creative">fun</div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full opacity-5 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-5 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center text-blue-500 mb-12 font-elegant relative">
              Who We Are
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full"></div>
            </h2>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 relative">
                <img 
                  src="/images/whoweare.jpg" 
                  alt="Our Team" 
                  className="w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-300 hover:rotate-0 hover:scale-105"
                />
              </div>
              
              <div className="md:w-1/2">
                <div className="p-6 bg-white rounded-xl shadow-lg">
                  <p className="text-lg mb-6 leading-relaxed">
                    <span className="text-2xl font-bold text-pink-500">JACKPHOTOBOOTH</span>, was founded in 2011 as a small, family-run business with big dreams. What started as a passion for capturing fun and memorable moments quickly grew into a full-fledged photo booth service loved by many.
                  </p>
                  <p className="text-lg mb-6 leading-relaxed">
                    Originally from the Philippines, our journey brought us to Vancouver, BC, where we proudly served countless events with our signature touch of warmth and creativity. Now, we've brought that same energy and excitement to our new home in Saint John, New Brunswick.
                  </p>
                  <p className="text-lg leading-relaxed">
                    As a family business, we believe in creating meaningful connections with our clients. Whether it’s a wedding, birthday, or corporate event, we’re here to make your celebration unforgettable—one snapshot at a time.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Gallery Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center text-blue-500 mb-12 font-creative tracking-wider relative">
              Our Photo Booths in Action
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full"></div>
            </h2>
            
            {isLoadingGallery ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <p className="mt-4 text-gray-600">Loading gallery images...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages.slice(0, 3).map((image, index) => {
                  const rotations = ['-rotate-2', 'rotate-1', '-rotate-1'];
                  const rotation = rotations[index % rotations.length];
                  
                  return (
                    <div key={image.id} className={`group relative overflow-hidden rounded-xl shadow-xl transform ${rotation} transition-all duration-300 hover:rotate-0 hover:scale-105`}>
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                  );
                })}
              </div>
            )}
            
            <div className="mt-12 text-center">
              <a href="/gallery" className="inline-block btn-blue transform hover:scale-105">
                View Full Gallery
              </a>
            </div>
          </div>
        </div>
        
        {/* Got Questions Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center text-blue-500 mb-12 font-stylish relative">
              Got Questions?
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-full"></div>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl mb-8 text-center">
                We'd love to answer any photo booth questions you may have! Click the button below and we'll respond within 24 hours.
              </p>
              
              <div className="text-center">
                <a href="/contact" className="btn-blue text-xl transform hover:-translate-y-1 inline-flex items-center">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
