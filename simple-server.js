const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
require('dotenv').config({ path: '.env.local' });

// Import our API handlers
const listImages = require('./api/cloudinary/list-images');
const listFolders = require('./api/cloudinary/list-folders');
const getByTag = require('./api/cloudinary/get-by-tag');
const search = require('./api/cloudinary/search');
const listAll = require('./api/cloudinary/list-all');

const PORT = 3001;

// MIME types for static files
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  // Handle API routes
  if (pathname.startsWith('/api/cloudinary/')) {
    const mockReq = { method: req.method, query };
    const mockRes = {
      statusCode: 200,
      headers: {},
      setHeader: (key, value) => {
        mockRes.headers[key] = value;
      },
      status: (code) => {
        mockRes.statusCode = code;
        return mockRes;
      },
      json: (data) => {
        res.writeHead(mockRes.statusCode, {
          'Content-Type': 'application/json',
          ...mockRes.headers
        });
        res.end(JSON.stringify(data));
      },
      end: () => {
        res.writeHead(mockRes.statusCode, mockRes.headers);
        res.end();
      }
    };

    try {
      switch (pathname) {
        case '/api/cloudinary/list-images':
          await listImages(mockReq, mockRes);
          break;
        case '/api/cloudinary/list-folders':
          await listFolders(mockReq, mockRes);
          break;
        case '/api/cloudinary/get-by-tag':
          await getByTag(mockReq, mockRes);
          break;
        case '/api/cloudinary/search':
          await search(mockReq, mockRes);
          break;
        case '/api/cloudinary/list-all':
          await listAll(mockReq, mockRes);
          break;
        default:
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'API endpoint not found' }));
      }
    } catch (error) {
      console.error('API Error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
    return;
  }

  // Handle static files
  let filePath = path.join(__dirname, 'dist', pathname === '/' ? 'index.html' : pathname);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    // If not found, try serving from public directory
    filePath = path.join(__dirname, 'public', pathname);
    if (!fs.existsSync(filePath)) {
      // If still not found, serve index.html for SPA routing
      filePath = path.join(__dirname, 'dist', 'index.html');
    }
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 API endpoints available at http://localhost:${PORT}/api/cloudinary/*`);
  console.log(`🌐 Frontend available at http://localhost:${PORT}`);
  console.log(`\n🧪 Test API endpoints:`);
  console.log(`   http://localhost:${PORT}/api/cloudinary/list-folders`);
  console.log(`   http://localhost:${PORT}/api/cloudinary/list-images?folder=backdrops`);
});
