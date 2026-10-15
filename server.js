const http = require('http');

http.createServer((req, res) => {
    res.end('Hello from Node.js running in Jenkins!');
}).listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});