const express = require('express');
const app = express();
const PORT = 8000;

//In Memory DB     (voilating stateless rule bcz we dont have database now.)
const Books = [
    {id:1 , title:"Book One" , author: "Author One"},
    {id:2 , title:"Book Two" , author: "Author Two"}
]

//Middleware (Plugins)
app.use(express.json());

app.get('/books', (req, res)=>{
    res.json(Books);
})

app.get('/books/:id',(req, res)=>{
    const id  = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({error : 'id must be type integer'});
    const book = Books.find((e) => e.id === id);
    if(!book) return res.status(404).json({error : `book of id ${id} does not exist`});
    return res.json(book);
})

app.post('/books',(req,res)=>{
    const {title, author} = req.body;
    
    if(!title || title === ''){
        return res.status(400).json({error : 'titile is required'})
    }
    if(!author || author === ''){
        return res.status(400).json({error : 'author is required'})
    }
    const id = Books.length + 1;
    const book = {id, title , author};
    Books.push(book)
    return res.status(201).json({error : "Book Created Successfully",  id : id})

})

app.delete('/books/:id', (req , res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error : "Id is not a number"})
    }
    const indToDel = Books.findIndex(e=>e.id === id);
    if(indToDel < 0){
        return res.status(404).json({error : `book of id ${id} does not exist`});
    }
    Books.splice(indToDel , 1);
    return res.status(201).json({error : "Books Deleted"});
})

app.listen(PORT , ()=>{
    console.log("Port listening to 8000");
})