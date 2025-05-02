import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

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
    <div className="relative h-[70vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => console.error("Video error:", e)}
        >
          <source src="/images/6f6fa11f-cf15-4f40-adb2-c83e431265a2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <div className="bg-black bg-opacity-50 rounded-full mx-auto max-w-xl p-8 md:p-12 backdrop-blur-sm">
          <h1 className="text-2xl md:text-4xl text-white mb-3 font-creative tracking-wider uppercase">
            We Are More Than
          </h1>
          <h2 className="text-2xl md:text-4xl text-white mb-3 font-modern">
            A Photo Booth...
          </h2>
          <h2 className="text-2xl md:text-4xl text-white font-elegant">
            It's An Experience
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
