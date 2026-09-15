// Advanced (but simple) HTTP server using http.createServer()
// Builds on the basic "Hello World" server by adding:
//   - custom headers (multiple, including a custom one)
//   - meaningful status codes per route
//   - basic routing by path + method
//   - reading a POST body (streams)
//   - graceful JSON responses

const http = require('http');
const url = require('url');



const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  console.log(`${req.method} ${path}`);

  // ---------- ROUTE 1: Home — "Hello World" with headers + status code ----------
  if (path === '/' && req.method === 'GET') {
    res.statusCode = 200;                              // OK
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'plain-node-http');   // custom header
    res.end('hello world! try: /  /greet?name=Rahul  /json  /error  (or POST to /data)\n');
  }

  // ---------- ROUTE 2: Greet using a query param ----------
  else if (path === '/greet' && req.method === 'GET') {
    const name = query.name || 'Guest';
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, ${name}! welcome to the server.\n`);
  }

  // ---------- ROUTE 3: JSON response ----------
  else if (path === '/headers' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.headers, null, 2));  // pretty-print JSON
  }

  // ---------- ROUTE 4: Accept a POST body ----------
  else if (path === '/data' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      res.statusCode = 201;                             // Created
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Data received successfully', yourData: body }));
    });
  }

  // ---------- ROUTE 5: Simulated error ----------
  else if (path === '/error') {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Simulated server error (500)\n');
  }

  // ---------- DEFAULT: 404 ----------
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - page Not Found\n');
  }
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
  
});
