/**
 * Vercel Serverless Function: Get Images by Tag from Cloudinary
 * 
 * GET /api/cloudinary/get-by-tag?tag=wedding&max_results=100
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
    const { tag, max_results = 100, next_cursor } = req.query;

    if (!tag) {
      return sendError(res, 400, 'Tag parameter is required');
    }

    // Build query parameters
    const queryParams = new URLSearchParams({
      max_results: parseInt(max_results)
    });

    // Add next_cursor if we have one
    if (next_cursor) {
      queryParams.set('next_cursor', next_cursor);
    }

    // Make request to Cloudinary
    const endpoint = `/resources/image/tags/${encodeURIComponent(tag)}?${queryParams.toString()}`;
    const data = await cloudinaryRequest(endpoint);

    // Return the results
    res.status(200).json(data);

  } catch (error) {
    console.error('Error getting images by tag:', error);
    sendError(res, 500, 'Failed to get images by tag from Cloudinary', error);
  }
}
