/**
 * Vercel Serverless Function: Search Images in Cloudinary
 * 
 * GET /api/cloudinary/search?expression=folder:backdrops&max_results=100&sort_by=created_at:desc
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
    const { expression, max_results = 100, sort_by, next_cursor } = req.query;

    if (!expression) {
      return sendError(res, 400, 'Expression parameter is required');
    }

    // Build query parameters
    const queryParams = new URLSearchParams({
      expression: expression,
      max_results: parseInt(max_results)
    });

    // Add sort_by if provided
    if (sort_by) {
      queryParams.set('sort_by', sort_by);
    }

    // Add next_cursor if we have one
    if (next_cursor) {
      queryParams.set('next_cursor', next_cursor);
    }

    // Make request to Cloudinary search endpoint
    const endpoint = `/resources/search?${queryParams.toString()}`;
    const data = await cloudinaryRequest(endpoint);

    // Return the results
    res.status(200).json(data);

  } catch (error) {
    console.error('Error searching images:', error);
    
    // If search fails due to client errors, return empty result instead of error
    if (error.message && (
      error.message.includes('404') || 
      error.message.includes('400') ||
      error.message.includes('Not Found') ||
      error.message.includes('Bad Request') ||
      error.message.includes('Invalid') ||
      error.message.includes('Resource not found')
    )) {
      return res.status(200).json({
        resources: [],
        total_count: 0
      });
    }
    
    sendError(res, 500, 'Failed to search images in Cloudinary', error);
  }
}
