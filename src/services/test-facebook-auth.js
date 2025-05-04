/**
 * Test script for Facebook Authentication Service
 * 
 * This script tests the Facebook authentication service by:
 * 1. Initializing the Facebook SDK
 * 2. Attempting to get a Facebook access token
 * 3. Displaying the token information
 * 
 * Usage:
 * - Include this script in your HTML file for testing
 * - Open the browser console to see the results
 */

import { initFacebookSDK, getFacebookAccessToken, isTokenValid, getStoredToken } from './facebookAuth';

// Test function to verify Facebook authentication
async function testFacebookAuth() {
  console.log('🧪 Testing Facebook Authentication Service...');
  
  try {
    // Step 1: Initialize the Facebook SDK
    console.log('Step 1: Initializing Facebook SDK...');
    await initFacebookSDK();
    console.log('✅ Facebook SDK initialized successfully');
    
    // Step 2: Get a Facebook access token
    console.log('Step 2: Getting Facebook access token...');
    const token = await getFacebookAccessToken();
    
    if (token) {
      console.log('✅ Successfully obtained Facebook access token');
      console.log('Token:', token.substring(0, 10) + '...' + token.substring(token.length - 5));
      
      // Step 3: Check token validity
      console.log('Step 3: Checking token validity...');
      const valid = isTokenValid();
      console.log('Token valid:', valid);
      
      // Step 4: Get token expiry information
      console.log('Step 4: Getting token expiry information...');
      const tokenData = getStoredToken();
      if (tokenData) {
        const expiryDate = new Date(tokenData.expiry);
        console.log('Token expires on:', expiryDate.toLocaleString());
        
        // Calculate time remaining
        const now = Date.now();
        const timeRemaining = tokenData.expiry - now;
        const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        
        console.log(`Token expires in: ${hoursRemaining} hours and ${minutesRemaining} minutes`);
      } else {
        console.log('No token stored yet. A new token will be generated when needed.');
      }
      
      console.log('✅ Facebook Authentication Service is working correctly');
    } else {
      console.error('❌ Failed to obtain Facebook access token');
    }
  } catch (error) {
    console.error('❌ Error testing Facebook Authentication Service:', error);
  }
}

// Export the test function
export default testFacebookAuth;

// If this script is loaded directly, run the test
if (typeof window !== 'undefined' && window.location.search.includes('test-facebook-auth')) {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Running Facebook Authentication test...');
    testFacebookAuth();
  });
}
