import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

/**
 * ImageLoader component for handling image loading states
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alternative text for the image
 * @param {string} props.className - CSS classes for the image
 * @param {string} props.placeholderSrc - Optional custom placeholder image source
 * @param {Object} props.imgProps - Additional props to pass to the img element
 * @param {Function} props.onLoad - Optional callback when image loads successfully
 * @param {Function} props.onError - Optional callback when image fails to load
 * @returns {h.JSX.Element} - Rendered component
 */
const ImageLoader = ({
  src,
  alt = '',
  className = '',
  placeholderSrc = placeholderImage,
  imgProps = {},
  onLoad = () => {},
  onError = () => {},
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholderSrc);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setHasError(false);
    setImageSrc(placeholderSrc);

    if (!src) {
      setHasError(true);
      return;
    }

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoaded(true);
      setImageSrc(src);
      onLoad();
    };

    img.onerror = () => {
      setHasError(true);
      onError();
    };

    // Clean up
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, placeholderSrc, onLoad, onError]);

  const imageClasses = `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`;
  const placeholderClasses = `${className} ${isLoaded ? 'opacity-0' : 'opacity-100'}`;

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder image */}
      {placeholderSrc && (
        <img
          src={placeholderSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${placeholderClasses}`}
          {...rest}
        />
      )}
      
      {/* Actual image */}
      {!hasError && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageClasses}`}
          {...imgProps}
          {...rest}
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-red-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
