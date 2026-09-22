const e = require('express');  //Import Express framework
const app = e();                //Create Express application
//e is  a variable that holds a  function. () means we are calling/executing that function

app.get('/', (req, res) => {  //When someone sends a GET request to /, send this response.
    res.send("Welcome to ExpressJS!");  
});

app.get('/about', (req, res) => {  
    res.send("About page");
});

app.get('/users', (req, res) => {
    res.send("Users page");
});

app.listen(4000, () => {  //Start the server and listen on port 4000
    console.log("Server is running on http://localhost:4000");
});

//You have created an Express application which starts a server that listens for incoming requests on port 4000.
//app = express() -> create your Express application
//app.get() -> defines how your application handles a request
//app.listen() -> starts the server
//Therefore, your program is an Express application running on HTTP server.

//Node.js is a runtime/platform. Express is a framework built on top of Node.js.