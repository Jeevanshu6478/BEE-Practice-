const http = require('http'); //built in module In Node.js
const server = http.createServer((req, res) => { //createServer is a function 
    res.end("We are running server on port 8080"); 
});

server.listen(8080, () => {  //Start listening for requests
    console.log("Server is running on port 8080"); //8080 is the port number 
});

//The callback function will run whenever a request comes to your server.
//It receives two important objects:
// req and res

//req means request - It contains information about the request coming.
// res means response - It is used to send a response back to the client.