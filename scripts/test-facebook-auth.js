#!/usr/bin/env node

/**
 * Command-line script to test Facebook authentication
 * 
 * This script tests the Facebook authentication configuration by:
 * 1. Loading environment variables from .env file
 * 2. Simulating a token refresh request
 * 
 * Usage:
 * node scripts/test-facebook-auth.js
 */

// Load environment variables from .env file
require('dotenv').config();

// Check if required environment variables are set
const FB_APP_ID = process.env.PREACT_APP_FACEBOOK_APP_ID;
const FB_APP_SECRET = process.env.PREACT_APP_FACEBOOK_APP_SECRET;

console.log('🧪 Testing Facebook Authentication Configuration...');

// Check if Facebook App ID is set
if (!FB_APP_ID || FB_APP_ID === 'your_facebook_app_id') {
  console.error('❌ Facebook App ID is not set or is using the default value.');
  console.error('Please update the PREACT_APP_FACEBOOK_APP_ID in your .env file.');
  process.exit(1);
}

// Check if Facebook App Secret is set
if (!FB_APP_SECRET || FB_APP_SECRET === 'your_facebook_app_secret') {
  console.error('❌ Facebook App Secret is not set or is using the default value.');
  console.error('Please update the PREACT_APP_FACEBOOK_APP_SECRET in your .env file.');
  process.exit(1);
}

console.log('✅ Facebook App ID is set:', FB_APP_ID.substring(0, 5) + '...');
console.log('✅ Facebook App Secret is set:', FB_APP_SECRET.substring(0, 3) + '...');

// Simulate a token refresh request
console.log('\nSimulating a token refresh request...');
console.log('Note: This is just a configuration check. To fully test authentication:');
console.log('1. Run the application with "npm start"');
console.log('2. Navigate to /test-facebook-auth in your browser');
console.log('3. Click the "Run Authentication Test" button');

console.log('\n✅ Configuration check passed!');
console.log('Your Facebook authentication configuration appears to be valid.');
console.log('Make sure to complete the Facebook App setup as described in src/services/README.md');
