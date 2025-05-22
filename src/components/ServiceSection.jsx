import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState, useEffect } from 'preact/hooks';

const ServiceSection = ({ 
  title, 
  description, 
  imageUrl, 
  buttonText, 
  buttonLink, 
  isReversed = false,
  isHighlighted = false,
  hasParallax = false,
  parallaxImage,
  parallaxColor = 'bg-purple-900',
  parallaxTitle,
  parallaxText,
  parallaxButtonText,
  parallaxButtonLink,
  parallaxHeight = 'h-96',
  parallaxOpacity = 'bg-opacity-70',
  parallaxIcon,
  parallaxSecondaryText,
  parallaxTextColor = 'text-white'
}) => {
  // State for parallax scrolling effect
  const [offset, setOffset] = useState(0);
  
  // Handle scroll event for parallax effect
  useEffect(() => {
    if (hasParallax) {
      const handleScroll = () => {
        setOffset(window.pageYOffset);
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hasParallax]);

  // If this section has parallax, render the enhanced parallax section
  if (hasParallax) {
    return (
      <div 
        className={`relative ${parallaxHeight} bg-fixed bg-center bg-cover overflow-hidden`} 
        style={`background-image: url('${parallaxImage || imageUrl}'); background-position: center ${offset * 0.2}px;`}
      >
        <div className={`absolute inset-0 ${parallaxColor} ${parallaxOpacity} flex items-center justify-center`}>
          <div className="text-center px-4 max-w-4xl mx-auto transform transition-all duration-700 hover:scale-105">
            {parallaxIcon && (
              <div className="mb-6 flex justify-center">
                <span className={`text-5xl ${parallaxTextColor}`}>{parallaxIcon}</span>
              </div>
            )}
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${parallaxTextColor}`}>
              {parallaxTitle || title}
            </h2>
            
            <p className={`text-xl ${parallaxTextColor} mb-6 max-w-3xl mx-auto`}>
              {parallaxText || description}
            </p>
            
            {parallaxSecondaryText && (
              <p className={`text-lg ${parallaxTextColor} mb-8 italic`}>
                {parallaxSecondaryText}
              </p>
            )}
            
            {(parallaxButtonText || buttonText) && (parallaxButtonLink || buttonLink) && (
              <Link 
                href={parallaxButtonLink || buttonLink} 
                className="inline-block px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                {parallaxButtonText || buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  // Otherwise render the normal service section
  return (
    <div className={`py-20 ${isHighlighted ? 'bg-gradient-to-br from-pink-900 to-pink-600 text-white' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div className="md:w-1/2">
            <img 
              src={imageUrl || "/images/1.jpeg"} 
              alt={title} 
              className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-lg mb-6">
                {description}
              </p>
            )}
            {buttonText && buttonLink && (
              <Link href={buttonLink} className="inline-block px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-300">
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
