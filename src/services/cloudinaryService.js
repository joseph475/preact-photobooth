/**
 * Cloudinary Service - Updated for Vercel Serverless Functions
 * 
 * This service provides functions for interacting with Cloudinary through our
 * Vercel API routes to avoid CORS issues.
 */

/**
 * Get a Cloudinary URL for an image with transformations
 * @param {string} publicId - The public ID of the image
 * @param {Object} transformations - Cloudinary transformations to apply
 * @returns {string} - The Cloudinary URL
 */
export const getImageUrl = (publicId, transformations = {}) => {
  // Convert transformations object to Cloudinary URL parameters
  const transformationParams = Object.entries(transformations)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  // Build the Cloudinary URL (this still works directly as it's just for image display)
  return `https://res.cloudinary.com/${process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${
    transformationParams ? `${transformationParams}/` : ''
  }${publicId}`;
};

/**
 * Make API request to our Vercel serverless functions
 * @param {string} endpoint - API endpoint path
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} - API response
 */
const apiRequest = async (endpoint, params = {}) => {
  try {
    const queryParams = new URLSearchParams(params);
    const url = `/api/cloudinary/${endpoint}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API request to ${endpoint} failed:`, error);
    throw error;
  }
};

/**
 * Get a list of images from a Cloudinary folder
 * @param {string} folderPath - The folder path to list images from
 * @param {Object} options - Additional options
 * @returns {Promise<Array>} - Array of image resources
 */
export const listImages = async (folderPath, options = {}) => {
  try {
    const params = {
      folder: folderPath,
      max_results: options.max_results || 100,
      ...options
    };

    const data = await apiRequest('list-images', params);
    return data;
  } catch (error) {
    console.error('Error listing images from Cloudinary:', error);
    // Fall back to search API if folder listing fails
    return await searchImages({
      expression: `folder:${folderPath}`,
      max_results: options.max_results || 100,
      sort_by: options.sort_by || 'created_at:desc'
    });
  }
};

/**
 * Get images by tag from Cloudinary
 * @param {string} tag - The tag to search for
 * @param {Object} options - Additional options
 * @returns {Promise<Array>} - Array of image resources
 */
export const getImagesByTag = async (tag, options = {}) => {
  try {
    const params = {
      tag: tag,
      max_results: options.max_results || 100,
      ...options
    };

    const data = await apiRequest('get-by-tag', params);
    return data;
  } catch (error) {
    console.error('Error getting images by tag from Cloudinary:', error);
    // Fall back to search API
    return await searchImages({
      expression: `tags:${tag}`,
      max_results: options.max_results || 100,
      sort_by: options.sort_by || 'created_at:desc'
    });
  }
};

/**
 * Search for images in Cloudinary
 * @param {Object} query - The search query parameters
 * @returns {Promise<Object>} - Search results
 */
export const searchImages = async (query = {}) => {
  try {
    // Convert sort_by array to string if needed
    let modifiedQuery = { ...query };
    if (query.sort_by && Array.isArray(query.sort_by)) {
      modifiedQuery.sort_by = query.sort_by.map(item => {
        if (typeof item === 'object') {
          return Object.entries(item).map(([key, value]) => `${key}:${value}`).join(',');
        }
        return item;
      }).join(',');
    }

    const data = await apiRequest('search', modifiedQuery);
    return data;
  } catch (error) {
    console.error('Error searching images in Cloudinary:', error);
    // Return an empty result instead of throwing
    return { resources: [] };
  }
};

/**
 * List all images from Cloudinary across all folders, sorted by upload date
 * @param {Object} options - Additional options
 * @returns {Promise<Array>} - Array of image resources
 */
export const listAllImages = async (options = {}) => {
  try {
    const params = {
      max_results: options.max_results || 100,
      ...options
    };

    const data = await apiRequest('list-all', params);
    return data;
  } catch (error) {
    console.error('Error listing all images from Cloudinary:', error);
    return { resources: [] };
  }
};

/**
 * Get a list of all folders in Cloudinary
 * @returns {Promise<Array>} - Array of folder names
 */
export const listFolders = async () => {
  try {
    const data = await apiRequest('list-folders');
    return data;
  } catch (error) {
    console.error('Error listing folders from Cloudinary:', error);
    return { folders: [] };
  }
};

export default {
  getImageUrl,
  listImages,
  getImagesByTag,
  searchImages,
  listAllImages,
  listFolders
};
