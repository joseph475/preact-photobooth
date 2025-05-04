# Facebook Authentication Service

This service handles Facebook authentication for the photo booth application. It's designed to work without requiring guest users to log in, by using a pre-configured page access token.

## Setup Instructions

### 1. Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app (Business or Consumer type)
3. Add the "Facebook Login" product
4. Configure OAuth settings with your website URL

### 2. Get a Long-Lived Page Access Token

To avoid requiring users to log in, you need to generate a long-lived page access token:

1. **Get a User Access Token**:
   - Go to [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/)
   - Select your app from the dropdown
   - Click "Get Token" > "Get User Access Token"
   - Select the following permissions:
     - `pages_show_list`
     - `pages_read_engagement`
     - `pages_read_user_content`
   - Click "Generate Access Token"
   - Approve the permissions in the popup

2. **Convert to Long-Lived Access Token**:
   ```
   https://graph.facebook.com/v22.0/oauth/access_token?
     grant_type=fb_exchange_token&
     client_id={app-id}&
     client_secret={app-secret}&
     fb_exchange_token={short-lived-token}
   ```
   Replace `{app-id}`, `{app-secret}`, and `{short-lived-token}` with your values.

3. **Get Page Access Token**:
   ```
   https://graph.facebook.com/v22.0/me/accounts?access_token={long-lived-user-token}
   ```
   This will return a list of pages you manage. Find the page you want to use and copy its access token.

4. **Verify the Token**:
   ```
   https://graph.facebook.com/v22.0/debug_token?input_token={page-token}&access_token={page-token}
   ```
   Check that the expiration is far in the future (typically 3 months).

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Update with your Facebook App ID, Secret, and Page Token:
   ```
   PREACT_APP_FACEBOOK_APP_ID=your_facebook_app_id
   PREACT_APP_FACEBOOK_APP_SECRET=your_facebook_app_secret
   PREACT_APP_FACEBOOK_PAGE_TOKEN=your_long_lived_page_access_token
   PREACT_APP_FACEBOOK_REDIRECT_URI=https://your-domain.com/
   ```

### 4. Token Renewal

Page access tokens typically last 3 months. You should set a reminder to renew the token before it expires. The process is the same as steps 1-3 above.

## How It Works

1. The `facebookAuth.js` service first checks for a page access token in the environment variables
2. If found, it uses that token for all API requests
3. If not found, it falls back to checking localStorage for a previously stored token
4. No user login UI is shown at any point

## Troubleshooting

If albums aren't loading, check the following:

1. Verify your page access token is valid using the Graph API Explorer
2. Check that your Facebook App is properly configured with the correct permissions
3. Ensure your app is in Live mode, not Development mode
4. Check the browser console for specific error messages
