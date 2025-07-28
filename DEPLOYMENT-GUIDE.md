# Vercel Deployment Guide - CORS Fix Implementation

This guide explains how to deploy your Preact Photobooth application with the new Vercel Serverless Functions backend that solves the CORS issues.

## What We Fixed

The original issue was that your frontend was making direct API calls to Cloudinary from the browser, which caused CORS (Cross-Origin Resource Sharing) errors when accessing from different browsers or devices.

**Solution**: We created Vercel Serverless Functions that act as a proxy between your frontend and Cloudinary API.

## Project Structure

```
/api
  /cloudinary
    - list-images.js     # List images from folders
    - list-folders.js    # List all folders
    - get-by-tag.js      # Get images by tag
    - search.js          # Search functionality
    - list-all.js        # List all images
  /utils
    - cloudinary.js      # Shared utilities
```

## Environment Variables Setup

### 1. Local Development (.env.local)
```bash
CLOUDINARY_CLOUD_NAME=dtymijv2n
CLOUDINARY_API_KEY=534812796475386
CLOUDINARY_API_SECRET=nv40DMAGmDX6AkQR3NxHCT5z91s
```

### 2. Vercel Production Environment
You need to set these in Vercel's dashboard:
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

## Deployment Steps

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Local Development Testing
```bash
# Test the API routes locally
vercel dev

# Your app will be available at http://localhost:3000
# API routes will be available at http://localhost:3000/api/cloudinary/*

# Alternative: Use the simple development server
node simple-server.js
# Available at http://localhost:3001
```

### Step 4: Set Environment Variables in Vercel Dashboard

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:

| Name | Value | Environment |
|------|-------|-------------|
| `CLOUDINARY_CLOUD_NAME` | `dtymijv2n` | Production, Preview, Development |
| `CLOUDINARY_API_KEY` | `534812796475386` | Production, Preview, Development |
| `CLOUDINARY_API_SECRET` | `nv40DMAGmDX6AkQR3NxHCT5z91s` | Production, Preview, Development |

### Step 5: Deploy to Production
```bash
# Deploy to production
vercel --prod
```

## API Endpoints

After deployment, your API endpoints will be available at:

- `GET /api/cloudinary/list-images?folder=backdrops&max_results=100`
- `GET /api/cloudinary/list-folders`
- `GET /api/cloudinary/get-by-tag?tag=wedding&max_results=100`
- `GET /api/cloudinary/search?expression=folder:backdrops&max_results=100`
- `GET /api/cloudinary/list-all?max_results=100`

## Testing the Fix

### Local Testing
1. Run `vercel dev`
2. Open your app in different browsers
3. Try accessing from other devices on your network using your computer's IP address

### Production Testing
1. Deploy with `vercel --prod`
2. Test the deployed URL in different browsers and devices
3. Verify that CORS errors are resolved

## Security Improvements

✅ **API secrets are now server-side only**
- Cloudinary API key and secret are no longer exposed in frontend code
- Only the cloud name (public) is available in the frontend

✅ **CORS headers properly configured**
- All API routes include proper CORS headers
- Supports preflight OPTIONS requests

✅ **Error handling**
- Comprehensive error handling in all API routes
- Fallback mechanisms for failed requests

## Troubleshooting

### Common Issues

1. **Environment Variables Not Set**
   - Make sure all environment variables are set in Vercel dashboard
   - Check that variable names match exactly (case-sensitive)

2. **API Routes Not Working**
   - Verify the `/api` directory structure is correct
   - Check that all files export a default function

3. **CORS Still Occurring**
   - Ensure you're using the updated `cloudinaryService.js`
   - Verify API routes are being called instead of direct Cloudinary calls

### Debug Commands
```bash
# Check if API routes are working locally
curl http://localhost:3000/api/cloudinary/list-folders

# Check production API
curl https://your-app.vercel.app/api/cloudinary/list-folders
```

## Next Steps

1. Test the deployment locally with `vercel dev`
2. Set up environment variables in Vercel dashboard
3. Deploy to production with `vercel --prod`
4. Test from multiple browsers and devices
5. Monitor the Vercel function logs for any issues

The CORS issue should now be completely resolved! 🎉
