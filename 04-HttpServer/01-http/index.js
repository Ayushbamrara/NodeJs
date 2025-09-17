const http = require("node:http");

const server = http.createServer(function(req, res){
    console.log("i got an incomming req");
    res.writeHead(200);
    res.end("Thanks for visiting my site");
});

server.listen(8000, function(){
    console.log(`server listening to port 8000`)
})