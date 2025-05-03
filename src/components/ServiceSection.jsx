import { h } from 'preact';
import { Link } from 'preact-router/match';

const ServiceSection = ({ 
  title, 
  description, 
  imageUrl, 
  buttonText, 
  buttonLink, 
  isReversed = false,
  isHighlighted = false
}) => {
  return (
    <div className={`py-16 ${isHighlighted ? 'bg-gradient-to-br from-purple-900 to-pink-600 text-white' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
          <div className="md:w-1/2">
            <img 
              src={imageUrl || "/images/1.jpeg"} 
              alt={title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2 text-center">
            <h2 className="text-3xl md:text-4xl text-blue-500 mb-6 font-creative tracking-wider">{title}</h2>
            <p className="text-lg mb-8">{description}</p>
            
            {buttonText && buttonLink && (
              <div>
                <Link 
                  href={buttonLink} 
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-stylish py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg"
                >
                  {buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
