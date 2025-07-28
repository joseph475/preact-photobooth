/**
 * Vercel Serverless Function: List All Folders from Cloudinary
 * 
 * GET /api/cloudinary/list-folders
 */

const { handleCors, sendError, cloudinaryRequest } = require('../utils/cloudinary');

module.exports = async function handler(req, res) {
  // Handle CORS
  if (handleCors(req, res)) return;

  // Only allow GET requests
  if (req.method !== 'GET') {
    return sendError(res, 405, 'Method not allowed');
  }

  try {
    // Make request to Cloudinary folders endpoint
    const data = await cloudinaryRequest('/folders');

    // Return the folders data
    res.status(200).json(data);

  } catch (error) {
    console.error('Error listing folders:', error);
    sendError(res, 500, 'Failed to list folders from Cloudinary', error);
  }
}
