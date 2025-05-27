import { getImageUrl } from '../services/cloudinaryService';

/**
 * Apply a simple filter to an image (grayscale)
 * @param {string} imageUrl - The URL of the image
 * @returns {Promise<HTMLCanvasElement>} - A promise that resolves with the canvas containing the filtered image
 */
export const applyGrayscaleFilter = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Enable CORS for the image
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
      }
      
      ctx.putImageData(imageData, 0, 0);
      resolve(canvas);
    };
    img.onerror = reject;
    img.src = imageUrl;
  });
};

/**
 * Get a Cloudinary URL for an image with transformations
 * @param {string} publicId - The public ID of the image
 * @param {Object} transformations - Cloudinary transformations to apply
 * @returns {string} - The Cloudinary URL
 */
export const getCloudinaryUrl = (publicId, transformations = {}) => {
  return getImageUrl(publicId, transformations);
};

/**
 * Check if a URL is a Cloudinary URL
 * @param {string} url - The URL to check
 * @returns {boolean} - True if the URL is a Cloudinary URL
 */
export const isCloudinaryUrl = (url) => {
  return url && url.includes('cloudinary.com');
};

/**
 * Extract the public ID from a Cloudinary URL
 * @param {string} url - The Cloudinary URL
 * @returns {string|null} - The public ID or null if not a valid Cloudinary URL
 */
export const getPublicIdFromUrl = (url) => {
  if (!isCloudinaryUrl(url)) {
    return null;
  }
  
  // Extract the public ID from the URL
  // Format: https://res.cloudinary.com/cloud_name/image/upload/[transformations/]public_id
  const uploadIndex = url.indexOf('/upload/');
  if (uploadIndex === -1) {
    return null;
  }
  
  return url.substring(uploadIndex + 8); // +8 to skip '/upload/'
};

/**
 * Apply Cloudinary transformations to an image URL
 * @param {string} url - The image URL (can be Cloudinary or regular URL)
 * @param {Object} transformations - Transformations to apply
 * @returns {string} - URL with transformations applied
 */
export const applyTransformations = (url, transformations = {}) => {
  // If it's a Cloudinary URL, extract the public ID and apply transformations
  if (isCloudinaryUrl(url)) {
    const publicId = getPublicIdFromUrl(url);
    if (publicId) {
      return getCloudinaryUrl(publicId, transformations);
    }
  }
  
  // For non-Cloudinary URLs, return the original URL
  return url;
};

/**
 * Get optimized image URL based on device and viewport
 * @param {string} publicId - The Cloudinary public ID
 * @param {Object} options - Options for optimization
 * @returns {string} - Optimized image URL
 */
export const getOptimizedImageUrl = (publicId, options = {}) => {
  const {
    width = 'auto',
    height = 'auto',
    quality = 'auto',
    format = 'auto',
    crop = null,
    effect = null
  } = options;
  
  const transformations = {
    width,
    height,
    quality,
    fetch_format: format
  };
  
  if (crop) {
    transformations.crop = crop;
  }
  
  if (effect) {
    transformations.effect = effect;
  }
  
  return getCloudinaryUrl(publicId, transformations);
};
