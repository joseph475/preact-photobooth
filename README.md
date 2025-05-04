# Preact Photobooth

A lightweight photobooth web application built with Preact and Tailwind CSS.

## Features

- Built with Preact for optimal performance
- Styled with Tailwind CSS for responsive design
- Well-organized folder structure for scalability
- Webpack configuration for development and production
- Routing with preact-router
- Facebook integration with automatic token management

## Project Structure

```
/src
  /assets        # For static assets like images, fonts, etc.
  /components    # For reusable UI components
  /hooks         # For custom hooks
  /layouts       # For layout components
  /pages         # For page components
  /services      # For API services
  /styles        # For global styles and Tailwind configuration
  /utils         # For utility functions
  index.js       # Entry point
  index.html     # HTML template
/public          # For public assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/preact-photobooth.git
cd preact-photobooth
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Then edit the `.env` file with your Facebook App credentials.

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

This will start the development server with HTTPS enabled at https://localhost:3000.

> **Note:** HTTPS is required for Facebook authentication. When you first access the development server, you may see a browser warning about an untrusted certificate. This is normal for local development. You can proceed by clicking "Advanced" and then "Proceed to localhost (unsafe)".

### Building for Production

Build the project for production:
```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with the production-ready files.

## Technologies Used

- [Preact](https://preactjs.com/) - A fast 3kB alternative to React with the same modern API
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Webpack](https://webpack.js.org/) - A static module bundler for modern JavaScript applications
- [Babel](https://babeljs.io/) - A JavaScript compiler
- [Facebook Graph API](https://developers.facebook.com/docs/graph-api/) - For Facebook integration

## Facebook Integration

This application includes integration with the Facebook Graph API to display albums and photos from Facebook in the gallery. The integration features automatic token management, which eliminates the need to manually update access tokens.

### Key Features

- Automatic token generation and refresh
- Secure token storage in localStorage
- HTTPS support for Facebook authentication
- Testing tools for verifying your configuration

### Requirements

- Facebook Developer Account and App
- HTTPS for Facebook Login (configured automatically for development)
- Proper permissions (user_photos)

For detailed setup instructions, see [Facebook Authentication Service](src/services/README.md).

### Testing Facebook Authentication

You can test your Facebook authentication configuration:

```bash
# Command-line test (checks environment variables)
npm run test:fb-auth

# Browser test (full authentication flow)
# 1. Start the development server
npm run dev
# 2. Navigate to /test-facebook-auth in your browser
```

## License

This project is licensed under the ISC License.
# Test commit
