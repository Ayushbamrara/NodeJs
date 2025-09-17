const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.end("homepage");
})
app.get('/contact-us', function(req, res){
    res.end('Email - ayushbamrara10@gmail.com  Number - 9548******');
})
app.get('/about', function(req, res){
    res.end("Software Developer here");
})
app.get('/tweet', function(req, res){
    res.end("Tweet1\nTweet2\nTweet3");
})

app.post('/tweet', (req, res)=>{
    res.status(201).end("Tweet Created Successfully");
});

app.listen(8000, ()=>{
console.log("Server is running ...")
});
    
