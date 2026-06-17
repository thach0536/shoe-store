const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;

// MIME types dictionary
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Normalize URL path
  let filePath = req.url.split('?')[0]; // strip query parameters
  if (filePath === '/') {
    filePath = '/index.html';
  }

  // Map to absolute path in project folder
  const absolutePath = path.join(__dirname, filePath);

  // Check if file exists
  fs.stat(absolutePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Return 404 page if not found
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found - 找不到請求的檔案');
      return;
    }

    // Get Content-Type based on extension
    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Stream the file
    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(absolutePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`===================================================`);
  console.log(`  SoleStyle 本地伺服器已啟動！`);
  console.log(`  正在監聽: ${url}`);
  console.log(`  正在自動為您在瀏覽器中開啟預覽...`);
  console.log(`===================================================`);

  // Open default browser automatically (Windows style)
  exec(`start ${url}`, (err) => {
    if (err) {
      console.error('無法自動開啟瀏覽器，請手動在瀏覽器中輸入此網址:', url);
    }
  });
});
