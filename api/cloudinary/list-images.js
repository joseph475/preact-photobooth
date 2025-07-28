/**
 * Vercel Serverless Function: List Images from Cloudinary Folder
 * 
 * GET /api/cloudinary/list-images?folder=backdrops&max_results=100
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
    const { folder, max_results = 100, next_cursor } = req.query;

    if (!folder) {
      return sendError(res, 400, 'Folder parameter is required');
    }

    // Initialize variables for pagination
    let allResources = [];
    let currentCursor = next_cursor;
    let totalCount = 0;
    let maxResults = parseInt(max_results);
    let fetchedCount = 0;
    let pageSize = 30; // Request 30 per page

    // Continue fetching until we have all resources or reach the max_results limit
    do {
      // Build query parameters
      const queryParams = new URLSearchParams({
        asset_folder: folder,
        max_results: pageSize
      });

      // Add next_cursor if we have one
      if (currentCursor) {
        queryParams.set('next_cursor', currentCursor);
      }

      // Make request to Cloudinary
      const endpoint = `/resources/by_asset_folder?${queryParams.toString()}`;
      const data = await cloudinaryRequest(endpoint);

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
      currentCursor = data.next_cursor;

      // Continue until we have all resources or reach the max_results limit
    } while (currentCursor && fetchedCount < maxResults && fetchedCount < totalCount);

    // Return the combined results
    res.status(200).json({
      resources: allResources,
      total_count: totalCount,
      fetched_count: fetchedCount
    });

  } catch (error) {
    console.error('Error listing images:', error);
    
    // If folder doesn't exist, return empty result instead of error
    if (error.message && (
      error.message.includes('404') || 
      error.message.includes('Not Found') ||
      error.message.includes('folder not found')
    )) {
      return res.status(200).json({
        resources: [],
        total_count: 0,
        fetched_count: 0
      });
    }
    
    sendError(res, 500, 'Failed to list images from Cloudinary', error);
  }
}
