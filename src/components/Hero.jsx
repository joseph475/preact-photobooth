import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { Link } from 'preact-router/match';

const Hero = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero banner container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
        <img src="/images/hero.jpg" alt="Corporate Events" className="w-full h-full object-cover" />
          {/* <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => console.error("Video error:", e)}
          >
            <source src="/images/Photobooth-Home-2.webp" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)]"></div>
        </div>
      
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-bold">
              READY to take your<br />
              <span className="text-3xl md:text-5xl lg:text-6xl">event to the NEXT LEVEL?</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-10">
              A <span className="font-bold">PHOTO BOOTH</span> RENTAL COMPANY
            </h2>
            <Link 
              href="/contact" 
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
