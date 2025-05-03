import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

/**
 * FacebookGallery component that fetches and displays images from a Facebook page or album
 * 
 * @param {Object} props Component properties
 * @param {string} props.pageId Facebook Page ID
 * @param {string} props.accessToken Facebook Access Token
 * @param {string} props.category Category to assign to Facebook images
 * @param {Function} props.onImagesLoaded Callback function that receives the loaded images
 */
const FacebookGallery = ({ pageId, accessToken, category = 'facebook', onImagesLoaded = () => {} }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacebookImages = async () => {
      if (!pageId || !accessToken) {
        setError('Facebook Page ID and Access Token are required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const apiUrl = `https://graph.facebook.com/v18.0/${pageId}/photos?fields=images&access_token=${accessToken}`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Facebook API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.data && Array.isArray(data.data)) {
          // Process the images
          const processedImages = data.data.map((photo, index) => {
            // Get the largest image from each photo (first in the array is typically largest)
            const largestImage = photo.images[0];
            return {
              id: `fb-${index}`,
              src: largestImage.source,
              category: category,
              width: largestImage.width,
              height: largestImage.height
            };
          });
          
          setImages(processedImages);
          // Call the callback with the processed images
          onImagesLoaded(processedImages);
        } else {
          throw new Error('No images found or invalid response format');
        }
      } catch (error) {
        console.error('Error fetching Facebook images:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFacebookImages();
  }, [pageId, accessToken, category, onImagesLoaded]);

  // If this component is used standalone, render the images
  // Otherwise, it just provides the images through the onImagesLoaded callback
  return (
    <div className="facebook-gallery">
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Loading Facebook images...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>Error loading Facebook images: {error}</p>
          <p className="text-sm mt-1">Please check your Facebook Page ID and Access Token.</p>
        </div>
      )}
      
      {!loading && !error && images.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No Facebook images found.</p>
        </div>
      )}
      
      {!loading && !error && images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(image => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={image.src} 
                  alt={`Facebook image ${image.id}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white bg-blue-500 bg-opacity-80 px-4 py-2 rounded-full">
                  View Image
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FacebookGallery;
