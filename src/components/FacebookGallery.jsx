import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { getFacebookAccessToken } from '../services/facebookAuth';

/**
 * FacebookGallery component that fetches and displays albums from a Facebook page or user
 * and allows viewing images from a selected album - No caching version
 * 
 * This component uses a pre-configured access token and does not require user login.
 */
const FacebookGallery = ({ 
  pageId = 'me', 
  category = 'facebook', 
  onAlbumsLoaded = () => {}, 
  onImageClick, 
  onAlbumImagesLoaded = () => {} 
}) => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumImages, setAlbumImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImages, setLoadingImages] = useState(false);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  // Get access token silently
  useEffect(() => {
    const getToken = async () => {
      try {
        console.log('Attempting to get Facebook access token silently...');
        const token = await getFacebookAccessToken();
        console.log('Token received:', token ? 'Token received' : 'No token received');
        
        if (token) {
          setAccessToken(token);
        } else {
          setError('Unable to load Facebook albums at this time.');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error getting Facebook access token:', error);
        setError('Unable to load Facebook albums at this time.');
        setLoading(false);
      }
    };
    
    getToken();
  }, []);

  // Function to fetch Facebook albums
  const fetchFacebookAlbums = async () => {
    try {
      if (!accessToken) {
        console.error('Cannot fetch albums: No access token available');
        setError('Unable to load Facebook albums at this time.');
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);
      
      console.log('Fetching albums with token:', accessToken.substring(0, 10) + '...');
      
      // Use the "me/albums" endpoint to get user albums or pageId/albums for page albums
      // Include count field to get the number of photos in each album
      const apiUrl = `https://graph.facebook.com/v22.0/${pageId}/albums?fields=id,name,picture{url},count&limit=10&access_token=${accessToken}`;
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`Facebook API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Albums data received:', data);
      
      if (data.data && Array.isArray(data.data)) {
        // Process the albums - keep it very simple
        const processedAlbums = data.data.map(album => ({
          id: album.id,
          name: album.name,
          coverPhoto: album.picture ? album.picture.data.url : null,
          photoCount: album.count || 0,
          category: category
        }));
        
        setAlbums(processedAlbums);
        onAlbumsLoaded(processedAlbums);
      } else {
        throw new Error('No albums found or invalid response format');
      }
    } catch (error) {
      console.error('Error fetching Facebook albums:', error);
      setError(`Unable to load Facebook albums at this time.`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch albums only once when the component mounts and we have an access token
  useEffect(() => {
    // Skip if no access token is available yet
    if (!accessToken) {
      console.log('No access token available yet, skipping album fetch');
      return;
    }
    
    console.log('Access token available, checking if albums need to be fetched');
    
    // Only fetch if we don't already have albums
    if (albums.length === 0) {
      console.log('No albums loaded yet, fetching albums...');
      fetchFacebookAlbums();
    }
  }, [accessToken]); // Only depend on accessToken, not pageId or category

  // Fetch images when an album is selected
  const fetchAlbumImages = async (albumId) => {
    if (!accessToken || !albumId) {
      console.error('Cannot fetch album images: Missing access token or album ID');
      setError('Unable to load album images at this time.');
      setLoadingImages(false);
      return;
    }

    setLoadingImages(true);
    setError(null);
    setAlbumImages([]); // Clear any previous images

    // Set a timeout to prevent hanging indefinitely
    const timeoutId = setTimeout(() => {
      setLoadingImages(false);
      setError("Request timed out. Please try again.");
    }, 15000); // 15 seconds timeout

    try {
      console.log('Fetching album images for album ID:', albumId);
      
      // Use source field to get higher quality images
      const apiUrl = `https://graph.facebook.com/v22.0/${albumId}/photos?fields=images&limit=10&access_token=${accessToken}`;
      
      const response = await fetch(apiUrl);
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`Facebook API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Album images data received:', data);
      
      if (data.data && Array.isArray(data.data)) {
        // Create a very simple array of images - use the largest available image
        const processedImages = data.data
          .filter(photo => photo && photo.images && photo.images.length > 0)
          .map((photo, index) => {
            // Get the largest image (first in the array)
            const largeImage = photo.images[0];
            // Get a medium-sized image for better quality but not too large
            const mediumImage = photo.images.length > 2 ? photo.images[2] : largeImage;
            
            return {
              id: `fb-${albumId}-${index}`,
              src: mediumImage.source,
              fullSrc: largeImage.source,
              category: category,
              width: mediumImage.width,
              height: mediumImage.height
            };
          })
          .slice(0, 10); // Limit to 10 images
        
        if (processedImages.length > 0) {
          setAlbumImages(processedImages);
          onAlbumImagesLoaded(processedImages);
        } else {
          setError("No images found in this album");
        }
      } else {
        throw new Error('No images found in this album or invalid response format');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Error fetching album images:', error);
      setError(`Unable to load album images at this time.`);
    } finally {
      setLoadingImages(false);
    }
  };

  // Handle album selection
  const handleAlbumClick = (album) => {
    try {
      // Show loading state immediately
      setLoadingImages(true);
      setSelectedAlbum(album);
      
      // Use a timeout to prevent UI freezing
      setTimeout(() => {
        fetchAlbumImages(album.id);
      }, 50);
    } catch (error) {
      console.error('Error handling album click:', error);
      setError('Failed to load album. Please try again later.');
      setLoadingImages(false);
    }
  };

  // Go back to album list
  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setAlbumImages([]);
  };

  // Expose the fetchFacebookAlbums method globally for the refresh button
  useEffect(() => {
    window.facebookGalleryRef = {
      fetchFacebookAlbums
    };
    
    return () => {
      // Clean up when component unmounts
      window.facebookGalleryRef = null;
    };
  }, [fetchFacebookAlbums]);

  return (
    <div className="facebook-gallery">
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Loading Facebook albums...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
          <p className="text-sm mt-1">Please try again later.</p>
        </div>
      )}
      
      {!loading && !error && albums.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No Facebook albums found.</p>
        </div>
      )}
      
      {/* Album List View */}
      {!loading && !error && albums.length > 0 && !selectedAlbum && (
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">Facebook Albums</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {albums.map(album => (
              <div 
                key={album.id} 
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => handleAlbumClick(album)}
              >
                <div className="aspect-w-1 aspect-h-1">
                  {album.coverPhoto ? (
                    <img 
                      src={album.coverPhoto} 
                      alt={`Album: ${album.name}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-100 flex flex-col items-center justify-center p-4">
                  <div className="text-white text-center">
                    <h3 className="font-bold text-lg mb-1">{album.name}</h3>
                    <p className="text-sm">{album.photoCount} photos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Album Images View */}
      {selectedAlbum && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={handleBackToAlbums}
              className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Albums
            </button>
            <h2 className="text-2xl font-bold text-center">{selectedAlbum.name}</h2>
            <div className="w-24"></div> {/* Empty div for flex spacing */}
          </div>
          
          {loadingImages && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Loading album images...</p>
            </div>
          )}
          
          {!loadingImages && albumImages.length === 0 && !error && (
            <div className="text-center py-8">
              <p className="text-gray-600">No images found in this album.</p>
            </div>
          )}
          
          {!loadingImages && albumImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {albumImages.map(image => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => onImageClick && onImageClick(image)}
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={image.src} 
                      alt={`Album image`} 
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
      )}
    </div>
  );
};

export default FacebookGallery;
