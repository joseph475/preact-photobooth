/**
 * Vercel Serverless Function: List All Images from Cloudinary
 * 
 * GET /api/cloudinary/list-all?max_results=100&sort_by=created_at:desc
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
    const { max_results = 100, next_cursor } = req.query;

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
        max_results: pageSize
      });

      // Add next_cursor if we have one
      if (currentCursor) {
        queryParams.set('next_cursor', currentCursor);
      }

      // Make request to Cloudinary
      const endpoint = `/resources/image?${queryParams.toString()}`;
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

    // Sort resources by created_at date (newest first)
    allResources.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });

    // Return the combined results
    res.status(200).json({
      resources: allResources,
      total_count: totalCount,
      fetched_count: fetchedCount
    });

  } catch (error) {
    console.error('Error listing all images:', error);
    sendError(res, 500, 'Failed to list all images from Cloudinary', error);
  }
}
