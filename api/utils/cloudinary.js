/**
 * Cloudinary Utilities for Vercel Serverless Functions
 * 
 * This module provides shared utilities for authenticating with Cloudinary
 * and handling common operations in our API routes.
 */

/**
 * Get Cloudinary configuration from environment variables
 * @returns {Object} Cloudinary configuration
 */
const getCloudinaryConfig = () => {
  const config = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  };

  // Validate that all required environment variables are present
  if (!config.cloudName || !config.apiKey || !config.apiSecret) {
    throw new Error('Missing required Cloudinary environment variables');
  }

  return config;
};

/**
 * Create Basic Auth header for Cloudinary API requests
 * @returns {string} Basic Auth header value
 */
const getAuthHeader = () => {
  const config = getCloudinaryConfig();
  return `Basic ${Buffer.from(`${config.apiKey}:${config.apiSecret}`).toString('base64')}`;
};

/**
 * Set CORS headers for API responses
 * @param {Object} res - Response object
 */
const setCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
};

/**
 * Handle preflight OPTIONS requests
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {boolean} True if handled, false otherwise
 */
const handleCors = (req, res) => {
  setCorsHeaders(res);
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  
  return false;
};

/**
 * Create error response
 * @param {Object} res - Response object
 * @param {number} status - HTTP status code
 * @param {string} message - Error message
 * @param {Error} error - Original error object (optional)
 */
const sendError = (res, status, message, error = null) => {
  console.error(`API Error: ${message}`, error);
  res.status(status).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && error && { details: error.message })
  });
};

/**
 * Make authenticated request to Cloudinary API
 * @param {string} endpoint - Cloudinary API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} API response
 */
const cloudinaryRequest = async (endpoint, options = {}) => {
  const config = getCloudinaryConfig();
  const url = `https://api.cloudinary.com/v1_1/${config.cloudName}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': getAuthHeader(),
      'Content-Type': 'application/json',
      ...options.headers
    }
  });

  if (!response.ok) {
    throw new Error(`Cloudinary API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};

module.exports = {
  getCloudinaryConfig,
  getAuthHeader,
  setCorsHeaders,
  handleCors,
  sendError,
  cloudinaryRequest
};
