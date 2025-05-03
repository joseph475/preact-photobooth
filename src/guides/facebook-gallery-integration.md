# Using Facebook Images in Your Gallery Page

Yes, you can use images uploaded to Facebook in your gallery page. Here are several approaches to implement this functionality:

## Option 1: Using Direct Facebook Image URLs (Simplest)

If your Facebook photos are public, you can use their direct URLs in your gallery.

### Steps:

1. **Get the direct URL of the Facebook image**:
   - Open the image on Facebook
   - Right-click on the image and select "Copy Image Address"
   - This URL can be used directly in your gallery

2. **Update your Gallery.jsx file**:

```jsx
// Example of adding Facebook images to your gallery
const galleryImages = [
  // Your existing images
  { id: 1, src: '/images/1.jpeg', category: 'wedding' },
  // Add Facebook images
  { id: 18, src: 'https://scontent.xx.fbcdn.net/v/your-facebook-image-url', category: 'wedding' },
  { id: 19, src: 'https://scontent.xx.fbcdn.net/v/another-facebook-image-url', category: 'party' },
];
```

**Note**: Facebook image URLs may expire or change over time, so this approach is not recommended for permanent use.

## Option 2: Using the Facebook Graph API (Recommended)

This approach fetches images directly from your Facebook page or album using the Facebook Graph API.

### Steps:

1. **Create a Facebook Developer Account and App**:
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app
   - Set up the app with basic settings

2. **Get an Access Token**:
   - Generate a Page Access Token or User Access Token with `user_photos` permission
   - For public pages, you can use a Page Access Token

3. **Install the Facebook SDK**:
```bash
npm install react-facebook-sdk
```

4. **Update your Gallery.jsx file**:

```jsx
import { useState, useEffect } from 'preact/hooks';

const Gallery = () => {
  // Your existing code
  
  const [fbImages, setFbImages] = useState([]);
  
  useEffect(() => {
    // Function to fetch Facebook images
    const fetchFacebookImages = async () => {
      try {
        // Replace with your Facebook Page ID and Access Token
        const pageId = 'YOUR_PAGE_ID';
        const accessToken = 'YOUR_ACCESS_TOKEN';
        const apiUrl = `https://graph.facebook.com/v18.0/${pageId}/photos?fields=images&access_token=${accessToken}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.data) {
          // Process the images
          const processedImages = data.data.map((photo, index) => {
            // Get the largest image from each photo
            const largestImage = photo.images[0];
            return {
              id: `fb-${index}`,
              src: largestImage.source,
              category: 'facebook' // You can categorize as needed
            };
          });
          
          setFbImages(processedImages);
        }
      } catch (error) {
        console.error('Error fetching Facebook images:', error);
      }
    };
    
    fetchFacebookImages();
  }, []);
  
  // Combine local and Facebook images
  const allImages = [...galleryImages, ...fbImages];
  
  // Use allImages instead of galleryImages in your filter
  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);
  
  // Rest of your component
};
```

5. **Add a Facebook category to your categories array**:
```jsx
const categories = [
  { id: 'all', name: 'All Photos' },
  // Your existing categories
  { id: 'facebook', name: 'Facebook Photos' }
];
```

## Option 3: Using a Facebook Feed Plugin

You can embed a Facebook feed that shows images from your Facebook page.

### Steps:

1. **Create a component for the Facebook feed**:

```jsx
// src/components/FacebookFeed.jsx
import { h } from 'preact';
import { useEffect } from 'preact/hooks';

const FacebookFeed = ({ pageUrl }) => {
  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div 
        className="fb-page" 
        data-href={pageUrl}
        data-tabs="timeline" 
        data-width="500" 
        data-height="700" 
        data-small-header="false"
        data-adapt-container-width="true" 
        data-hide-cover="false" 
        data-show-facepile="false"
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl}>Our Facebook Page</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookFeed;
```

2. **Add the Facebook Feed to your Gallery page**:

```jsx
import FacebookFeed from '../components/FacebookFeed';

const Gallery = () => {
  // Your existing code
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Your existing code */}
      
      {/* Facebook Feed Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center text-blue-500 mb-8 font-modern">
            Our Facebook Photos
          </h2>
          <div className="flex justify-center">
            <FacebookFeed pageUrl="https://www.facebook.com/YourPageName" />
          </div>
        </div>
      </div>
      
      {/* Rest of your component */}
    </div>
  );
};
```

## Important Considerations

1. **Privacy**: Make sure you have the right to use the Facebook images on your website
2. **Performance**: Loading images from Facebook may be slower than using locally hosted images
3. **Reliability**: Facebook may change their API or image URL structure, requiring updates to your code
4. **CORS**: You may encounter Cross-Origin Resource Sharing issues with direct image URLs
5. **Rate Limits**: Facebook API has rate limits that may affect your application

## Recommendation

For a photo booth business website, the best approach is Option 2 (Facebook Graph API) because:

1. It provides reliable access to your Facebook photos
2. You can control which photos to display
3. It automatically updates when you add new photos to Facebook
4. It's more professional than embedding a Facebook feed

If you need help implementing any of these approaches, let me know and I can provide more detailed code examples.
