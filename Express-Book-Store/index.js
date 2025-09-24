const express = require('express');
const app = express();
const PORT = 8000;

//In Memory DB     (voilating stateless rule bcz we dont have database now.)
const Book = [
    {id:1 , title:"Book One" , author: "Author One"},
    {id:2 , title:"Book Two" , author: "Author Two"}
]

app.listen(PORT , ()=>{
    console.log("Port listening to 8000");
})