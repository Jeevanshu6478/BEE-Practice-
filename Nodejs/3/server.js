const http = require('http'); 

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to the Home Page");
    } else if (req.url === '/about') {
        res.end("Welcome to the About Page");
    } else if (req.url === '/cart') {
        res.end("Welcome to the Cart");
    }
});

server.listen(8081, () => {
    console.log("Server is running on port 8081");
});