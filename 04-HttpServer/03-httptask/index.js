const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer(function(req, res){
    const method = req.method
    const path = req.url

    const log = `\n[${Date.now()}]: ${method} ${path}`       
    fs.appendFileSync("log.txt", log, "utf8");          //log.txt created and pushing all logs
    switch(method){
        case 'GET':{
            switch(path) {
                case '/':
                    return res.writeHead(200).end('hello from server');
                case '/contact-us': 
                    return res.writeHead(200).end('Sure ! Email-ayushbamrara10@gmail.com  Number-95********');
            
                case '/tweet': 
                    return res.writeHead(200).end('tweet1\ntweet2\ntweet3');
            }
        }
        break;
        case 'POST': {
            switch(path){
                case '/tweet':
                    return res.writeHead(201).end("Created a tweet");
            }
        }
    }

    return res.writeHead(404).end("Ohh Shitt You are lost ")

});

server.listen(8000, ()=>{
    console.log("Server")
})