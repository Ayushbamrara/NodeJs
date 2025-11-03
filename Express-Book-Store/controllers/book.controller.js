const {BOOKS} = require('../db');
exports.getAllBooks = function (req, res){
    res.json(BOOKS);
}

exports.getBookById = function (req, res){
    const id  = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({error : 'id must be type integer'});
    const book = BOOKS.find((e) => e.id === id);
    if(!book) return res.status(404).json({error : `book of id ${id} does not exist`});
    return res.json(book);
}

exports.createBook = function(req,res){
    const {title, author} = req.body;
    
    if(!title || title === ''){
        return res.status(400).json({error : 'titile is required'})
    }
    if(!author || author === ''){
        return res.status(400).json({error : 'author is required'})
    }
    const id = BOOKS.length + 1;
    const book = {id, title , author};
    BOOKS.push(book)
    return res.status(201).json({error : "Book Created Successfully",  id : id})

}

exports.deleteBook = function  (req , res){
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).json({error : "Id is not a number"})
    }
    const indToDel = BOOKS.findIndex(e=>e.id === id);
    if(indToDel < 0){
        return res.status(404).json({error : `book of id ${id} does not exist`});
    }
    BOOKS.splice(indToDel , 1);
    return res.status(201).json({error : "Books Deleted"});
}