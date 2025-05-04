/**
 * Facebook Authentication Service
 * 
 * This service handles Facebook authentication and token management.
 * It provides methods to get, refresh, and validate Facebook access tokens.
 * 
 * For this application, authentication is handled behind the scenes
 * without requiring guest users to log in.
 */

// Constants
const FB_APP_ID = process.env.PREACT_APP_FACEBOOK_APP_ID || '';
const FB_APP_SECRET = process.env.PREACT_APP_FACEBOOK_APP_SECRET || '';
const FB_PAGE_ACCESS_TOKEN = process.env.PREACT_APP_FACEBOOK_PAGE_TOKEN || '';
const FB_TOKEN_STORAGE_KEY = 'fb_access_token';
const FB_TOKEN_EXPIRY_KEY = 'fb_token_expiry';

// Token expiration buffer (5 minutes in milliseconds)
const TOKEN_EXPIRY_BUFFER = 5 * 60 * 1000;

/**
 * Initialize the Facebook SDK
 * This should be called once when the application starts
 */
export const initFacebookSDK = () => {
  return new Promise((resolve) => {
    // If the SDK is already loaded, resolve immediately
    if (window.FB) {
      resolve();
      return;
    }

    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v22.0' // Use the latest version
      });
      
      resolve();
    };

    // Load the SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
};

/**
 * Get the stored access token from localStorage
 * @returns {Object|null} The token object or null if not found
 */
export const getStoredToken = () => {
  try {
    // First check if we have an environment variable token (preferred)
    if (FB_PAGE_ACCESS_TOKEN) {
      console.log('Using page access token from environment variables');
      // For environment variable tokens, we set a far future expiry
      return {
        token: FB_PAGE_ACCESS_TOKEN,
        expiry: Date.now() + (365 * 24 * 60 * 60 * 1000) // 1 year from now
      };
    }
    
    // Fall back to localStorage token
    const tokenData = localStorage.getItem(FB_TOKEN_STORAGE_KEY);
    const expiryData = localStorage.getItem(FB_TOKEN_EXPIRY_KEY);
    
    if (!tokenData || !expiryData) return null;
    
    return {
      token: tokenData,
      expiry: parseInt(expiryData, 10)
    };
  } catch (error) {
    console.error('Error retrieving Facebook token from storage:', error);
    return null;
  }
};

/**
 * Store the access token in localStorage
 * @param {string} token The access token
 * @param {number} expiry The expiry timestamp
 */
export const storeToken = (token, expiry) => {
  try {
    localStorage.setItem(FB_TOKEN_STORAGE_KEY, token);
    localStorage.setItem(FB_TOKEN_EXPIRY_KEY, expiry.toString());
  } catch (error) {
    console.error('Error storing Facebook token:', error);
  }
};

/**
 * Check if the stored token is valid and not expired
 * @returns {boolean} True if the token is valid and not expired
 */
export const isTokenValid = () => {
  const tokenData = getStoredToken();
  
  if (!tokenData) return false;
  
  // Check if the token will expire soon (within the buffer time)
  const now = Date.now();
  return tokenData.expiry > now + TOKEN_EXPIRY_BUFFER;
};

/**
 * Get a valid access token, refreshing if necessary
 * This is an internal function that should not be called directly
 * @returns {Promise<string|null>} A promise that resolves to the access token or null if unavailable
 */
const getAccessToken = async () => {
  // Check if we have a valid token already
  if (isTokenValid()) {
    const tokenData = getStoredToken();
    return tokenData.token;
  }
  
  // If we have a page access token in environment variables, use that
  if (FB_PAGE_ACCESS_TOKEN) {
    return FB_PAGE_ACCESS_TOKEN;
  }
  
  // Check if we have a stored token that we can try to refresh
  const tokenData = getStoredToken();
  
  if (tokenData) {
    // Try to refresh the token
    try {
      return await refreshAccessToken();
    } catch (error) {
      console.error('Error refreshing access token:', error);
      // Continue to next approach if refresh fails
    }
  }
  
  // If all else fails, return null
  console.error('No valid Facebook access token available');
  return null;
};

/**
 * Refresh the access token using the Facebook API
 * @returns {Promise<string>} A promise that resolves to the new access token
 */
export const refreshAccessToken = async () => {
  const tokenData = getStoredToken();
  
  if (!tokenData) {
    throw new Error('No token available to refresh');
  }
  
  // Initialize Facebook SDK if not already initialized
  await initFacebookSDK();
  
  return new Promise((resolve, reject) => {
    window.FB.api(
      '/oauth/access_token',
      'GET',
      {
        grant_type: 'fb_exchange_token',
        client_id: FB_APP_ID,
        client_secret: FB_APP_SECRET,
        fb_exchange_token: tokenData.token
      },
      (response) => {
        if (response.error) {
          reject(new Error(`Facebook API error: ${response.error.message}`));
          return;
        }
        
        // Calculate expiry time (default to 60 days if not provided)
        const expiresIn = response.expires_in || 60 * 24 * 60 * 60; // 60 days in seconds
        const expiry = Date.now() + (expiresIn * 1000);
        
        // Store the new token
        storeToken(response.access_token, expiry);
        
        resolve(response.access_token);
      }
    );
  });
};

/**
 * Check if the current page is served over HTTPS
 * @returns {boolean} True if the page is served over HTTPS
 */
export const isHttps = () => {
  return window.location.protocol === 'https:';
};

/**
 * Main function to get a valid Facebook access token
 * This is the primary function that should be used by components
 * @returns {Promise<string|null>} A promise that resolves to the access token or null if unavailable
 */
export const getFacebookAccessToken = async () => {
  try {
    // First check if we have a page access token in environment variables
    if (FB_PAGE_ACCESS_TOKEN) {
      console.log('Using page access token from environment variables');
      return FB_PAGE_ACCESS_TOKEN;
    }
    
    // Otherwise try to get a token through the normal flow
    return await getAccessToken();
  } catch (error) {
    console.error('Error getting Facebook access token:', error);
    return null;
  }
};

/**
 * Logout from Facebook and clear stored tokens
 */
export const logout = () => {
  try {
    // Clear stored tokens
    localStorage.removeItem(FB_TOKEN_STORAGE_KEY);
    localStorage.removeItem(FB_TOKEN_EXPIRY_KEY);
    
    // Logout from Facebook if SDK is loaded
    if (window.FB) {
      window.FB.logout();
    }
  } catch (error) {
    console.error('Error during Facebook logout:', error);
  }
};

export default {
  initFacebookSDK,
  getFacebookAccessToken,
  isTokenValid,
  isHttps,
  logout
};
