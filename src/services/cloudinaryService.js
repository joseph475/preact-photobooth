/**
 * Cloudinary Service
 * 
 * This service provides functions for interacting with Cloudinary for image retrieval
 * and manipulation.
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
  
  // Build the Cloudinary URL
  return `https://res.cloudinary.com/${process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/${
    transformationParams ? `${transformationParams}/` : ''
  }${publicId}`;
};

/**
 * Generate a SHA-1 hash
 * @param {string} message - The message to hash
 * @returns {Promise<string>} - The SHA-1 hash
 */
const generateSHA1 = async (message) => {
  // Use the Web Crypto API to generate the SHA-1 hash
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

/**
 * Get a list of images from a Cloudinary folder
 * @param {string} folderPath - The folder path to list images from
 * @param {Object} options - Additional options
 * @returns {Promise<Array>} - Array of image resources
 */
export const listImages = async (folderPath, options = {}) => {
  try {
    // Initialize variables for pagination
    let allResources = [];
    let nextCursor = null;
    let totalCount = 0;
    let maxResults = options.max_results || 100; // Default to 100 images
    let fetchedCount = 0;
    let pageSize = 30; // Cloudinary default page size is 10, we'll request 30 per page
    
    // Continue fetching until we have all resources or reach the max_results limit
    do {
      // Create the URL with query parameters
      const queryParams = new URLSearchParams({
        asset_folder: folderPath,
        ...options
      });
      
      // Add next_cursor if we have one
      if (nextCursor) {
        queryParams.set('next_cursor', nextCursor);
      }
      
      // Make the request to the endpoint that works in Postman
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME}/resources/by_asset_folder?${queryParams.toString()}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${btoa(`${process.env.PREACT_APP_CLOUDINARY_API_KEY}:${process.env.PREACT_APP_CLOUDINARY_API_SECRET}`)}`
          }
        }
      );
      
      if (!response.ok) {
        console.error(`Listing images failed with status: ${response.status}`);
        // Fall back to search API
        return await searchImages({
          expression: `folder:${folderPath}`,
          max_results: maxResults,
          sort_by: options.sort_by || [{ created_at: 'desc' }]
        });
      }
      
      const data = await response.json();
      
      // Add the resources to our collection
      if (data.resources && data.resources.length > 0) {
        allResources = [...allResources, ...data.resources];
        fetchedCount += data.resources.length;
      }
      
      // Update total count if available
      if (data.total_count) {
        totalCount = data.total_count;
      }
      
      // Update next_cursor for the next request
      nextCursor = data.next_cursor;
      
      // Continue until we have all resources or reach the max_results limit
    } while (nextCursor && fetchedCount < maxResults && fetchedCount < totalCount);
    
    // Return the combined results
    return {
      resources: allResources,
      total_count: totalCount
    };
  } catch (error) {
    console.error('Error listing images from Cloudinary:', error);
    // Fall back to search API
    return await searchImages({
      expression: `folder:${folderPath}`,
      max_results: options.max_results || 100,
      sort_by: options.sort_by || [{ created_at: 'desc' }]
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
    // Create the URL with query parameters
    const queryParams = new URLSearchParams({
      tag,
      ...options
    });
    
    // Make the request to the endpoint with Basic Auth
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image/tags/${tag}?${queryParams.toString()}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(`${process.env.PREACT_APP_CLOUDINARY_API_KEY}:${process.env.PREACT_APP_CLOUDINARY_API_SECRET}`)}`
        }
      }
    );
    
    if (!response.ok) {
      console.error(`Getting images by tag failed with status: ${response.status}`);
      // Fall back to search API
      return await searchImages({
        expression: `tags:${tag}`,
        max_results: options.max_results || 100,
        sort_by: options.sort_by || [{ created_at: 'desc' }]
      });
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error getting images by tag from Cloudinary:', error);
    // Fall back to search API
    return await searchImages({
      expression: `tags:${tag}`,
      max_results: options.max_results || 100,
      sort_by: options.sort_by || [{ created_at: 'desc' }]
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
    // For the search API, we'll use a simpler approach with unsigned requests
    // This works with the Cloudinary SDK's default configuration for browser-based requests
    
    // Convert sort_by to string if it's an array of objects
    let modifiedQuery = { ...query };
    if (query.sort_by && Array.isArray(query.sort_by)) {
      modifiedQuery.sort_by = JSON.stringify(query.sort_by);
    }
    
    // Create the URL with query parameters
    const queryParams = new URLSearchParams({
      ...modifiedQuery
    });
    
    // Make the request to the unsigned search endpoint
    const response = await fetch(
      `https://res.cloudinary.com/${process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME}/image/list/${query.expression.replace(/:/g, '_')}.json`,
      {
        method: 'GET'
      }
    );
    
    if (!response.ok) {
      console.error(`Search failed with status: ${response.status}`);
      // Return an empty result instead of throwing
      return { resources: [] };
    }
    
    const data = await response.json();
    
    // Format the response to match the expected structure
    return {
      resources: data.resources || []
    };
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
    // Initialize variables for pagination
    let allResources = [];
    let nextCursor = null;
    let totalCount = 0;
    let maxResults = options.max_results || 100; // Default to 100 images
    let fetchedCount = 0;
    let pageSize = 30; // Cloudinary default page size is 10, we'll request 30 per page
    
    // Continue fetching until we have all resources or reach the max_results limit
    do {
      // Create the URL with query parameters
      const queryParams = new URLSearchParams({
        max_results: pageSize, // Request larger page size
        ...options
      });
      
      // Add next_cursor if we have one
      if (nextCursor) {
        queryParams.set('next_cursor', nextCursor);
      }
      
      // Make the request to the resources endpoint
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME}/resources/image?${queryParams.toString()}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${btoa(`${process.env.PREACT_APP_CLOUDINARY_API_KEY}:${process.env.PREACT_APP_CLOUDINARY_API_SECRET}`)}`
          }
        }
      );
      
      if (!response.ok) {
        console.error(`Listing all images failed with status: ${response.status}`);
        return { resources: [] };
      }
      
      const data = await response.json();
      
      // Add the resources to our collection
      if (data.resources && data.resources.length > 0) {
        allResources = [...allResources, ...data.resources];
        fetchedCount += data.resources.length;
      }
      
      // Update total count if available
      if (data.total_count) {
        totalCount = data.total_count;
      }
      
      // Update next_cursor for the next request
      nextCursor = data.next_cursor;
      
      // Continue until we have all resources or reach the max_results limit
    } while (nextCursor && fetchedCount < maxResults && fetchedCount < totalCount);
    
    // Sort resources by created_at date (newest first)
    allResources.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    
    // Return the combined results
    return {
      resources: allResources,
      total_count: totalCount
    };
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
    // Make the request to the folders endpoint
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME}/folders`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${btoa(`${process.env.PREACT_APP_CLOUDINARY_API_KEY}:${process.env.PREACT_APP_CLOUDINARY_API_SECRET}`)}`
        }
      }
    );
    
    if (!response.ok) {
      console.error(`Listing folders failed with status: ${response.status}`);
      return { folders: [] };
    }
    
    const data = await response.json();
    
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
