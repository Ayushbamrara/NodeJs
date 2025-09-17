const http = require("node:http");

const server = http.createServer(function(req, res){
    console.log(`Incomming request : ${Date.now()}`)
    console.log(req.method);
    console.log(req.url);

    switch(req.url){
        case '/':
            res.writeHead(200);
            return res.end("HomePage");
        case '/contact-us':
            res.writeHead(200);
            return res.end("Contact Page")
        case '/about':
            res.writeHead(200);
            return res.end("Im a  Software Engineer");
        default :
            res.writeHead(404)
            return res.end("You are lost");
    }
    // res.end(`hey you can accpt ${req.headers["accept-language"]}`);
});

server.listen(8000, ()=> console.log("Server Running on port : 8000"))


// We can go to script in pakage.json and add a start script like start : node index.js 
// so that we dont have to to write => node index.js,  we can simply write => npm start.
// For not restating server multiple times we can use start : node --watch index.js
// By this changes will automatically appears, we dont have to restart server for changes.