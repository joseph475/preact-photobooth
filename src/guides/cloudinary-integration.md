# Cloudinary Integration Guide

This guide explains how to use Cloudinary for image storage and retrieval in the Preact Photobooth application.

## Overview

Cloudinary is a cloud-based service that provides an end-to-end image and video management solution. In this application, we use Cloudinary to:

1. Store images in the cloud
2. Retrieve images with optimized transformations
3. Organize images by folders and tags
4. Search for images based on various criteria

## Configuration

### 1. Create a Cloudinary Account

If you don't already have a Cloudinary account, sign up for a free account at [cloudinary.com](https://cloudinary.com/users/register/free).

### 2. Get Your Cloudinary Credentials

After signing up, you'll need to get your Cloudinary credentials from your dashboard:

- Cloud Name
- API Key
- API Secret

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project (or copy from `.env.example`) and add your Cloudinary credentials:

```
# Cloudinary Configuration
PREACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
PREACT_APP_CLOUDINARY_API_KEY=your_api_key
PREACT_APP_CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Create an Upload Preset (Optional)

If you want to enable direct uploads from the browser to Cloudinary (not currently implemented in this app), you'll need to create an unsigned upload preset:

1. Go to your Cloudinary dashboard
2. Navigate to Settings > Upload
3. Scroll down to "Upload presets" and click "Add upload preset"
4. Set "Signing Mode" to "Unsigned"
5. Configure other settings as needed
6. Save the preset name and add it to your `.env` file:

```
PREACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## Folder Structure

We recommend organizing your Cloudinary images in folders. For this application, we use the following structure:

- `photobooth/` - Main folder for all photobooth images
  - `wedding/` - Wedding photos
  - `corporate/` - Corporate event photos
  - `party/` - Party photos
  - `ai-photobooth/` - AI Glam Booth photos

## Using Cloudinary in the Application

### Retrieving Images

The application automatically retrieves images from Cloudinary when the Gallery or RecentImagesCarousel components are loaded. The process works as follows:

1. The component makes a request to Cloudinary's API to search for images in the specified folder
2. The API returns a list of images with their metadata
3. The component processes the images and displays them with optimized transformations

### Image Transformations

Cloudinary allows you to apply transformations to images on-the-fly. Some common transformations used in this application include:

- Resizing: `width`, `height`
- Cropping: `crop`
- Quality: `quality`
- Format: `fetch_format`

Example:

```javascript
// Get an optimized image URL
const imageUrl = getOptimizedImageUrl('photobooth/wedding/image1', {
  width: 600,
  height: 400,
  crop: 'fill',
  quality: 'auto',
  format: 'auto'
});
```

## Available Utility Functions

The application provides several utility functions for working with Cloudinary:

### `getCloudinaryUrl(publicId, transformations)`

Returns a Cloudinary URL for an image with the specified transformations.

```javascript
import { getCloudinaryUrl } from '../utils/imageUtils';

const url = getCloudinaryUrl('photobooth/image1', { width: 500, height: 300, crop: 'fill' });
```

### `getOptimizedImageUrl(publicId, options)`

Returns an optimized Cloudinary URL with sensible defaults.

```javascript
import { getOptimizedImageUrl } from '../utils/imageUtils';

const url = getOptimizedImageUrl('photobooth/image1', { width: 800 });
```

### `isCloudinaryUrl(url)`

Checks if a URL is a Cloudinary URL.

```javascript
import { isCloudinaryUrl } from '../utils/imageUtils';

if (isCloudinaryUrl(imageUrl)) {
  // This is a Cloudinary URL
}
```

### `getPublicIdFromUrl(url)`

Extracts the public ID from a Cloudinary URL.

```javascript
import { getPublicIdFromUrl } from '../utils/imageUtils';

const publicId = getPublicIdFromUrl(cloudinaryUrl);
```

### `applyTransformations(url, transformations)`

Applies transformations to an image URL (works with both Cloudinary and non-Cloudinary URLs).

```javascript
import { applyTransformations } from '../utils/imageUtils';

const transformedUrl = applyTransformations(imageUrl, { width: 300, height: 200 });
```

## Service Functions

The application also provides service functions for interacting with Cloudinary's API:

### `listImages(folderPath, options)`

Lists images in a specified folder.

```javascript
import { listImages } from '../services/cloudinaryService';

const images = await listImages('photobooth/wedding');
```

### `getImagesByTag(tag, options)`

Gets images with a specific tag.

```javascript
import { getImagesByTag } from '../services/cloudinaryService';

const images = await getImagesByTag('wedding');
```

### `searchImages(query)`

Searches for images based on a query.

```javascript
import { searchImages } from '../services/cloudinaryService';

const results = await searchImages({
  expression: 'folder:photobooth/* AND tags:wedding',
  max_results: 10,
  sort_by: [{ created_at: 'desc' }]
});
```

## Best Practices

1. **Use Folders and Tags**: Organize your images using folders and tags to make them easier to find and manage.

2. **Apply Transformations**: Use Cloudinary's transformations to optimize images for different devices and screen sizes.

3. **Use Fallbacks**: Always provide fallback options in case Cloudinary is not available or configured.

4. **Lazy Loading**: Use the `loading="lazy"` attribute on images to improve performance.

5. **Error Handling**: Implement proper error handling when interacting with Cloudinary's API.

## Troubleshooting

### Images Not Loading

- Check that your Cloudinary credentials are correct in the `.env` file
- Verify that the public IDs you're using exist in your Cloudinary account
- Check the browser console for any errors

### API Errors

- Ensure your API key and secret are correct
- Check that you're not exceeding your Cloudinary plan limits
- Verify that the folders and tags you're searching for exist

## Additional Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Cloudinary Transformation Reference](https://cloudinary.com/documentation/image_transformations)
- [Cloudinary Search API](https://cloudinary.com/documentation/search_api)
