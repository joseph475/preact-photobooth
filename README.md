# Preact Photobooth

A lightweight photobooth web application built with Preact and Tailwind CSS.

## Features

- Built with Preact for optimal performance
- Styled with Tailwind CSS for responsive design
- Well-organized folder structure for scalability
- Webpack configuration for development and production
- Routing with preact-router

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

### Development

Start the development server:
```bash
npm start
# or
yarn start
```

This will start the development server at http://localhost:3000.

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

## License

This project is licensed under the ISC License.
