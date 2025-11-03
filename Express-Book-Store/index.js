require("dotenv/config")
const express = require('express');
const { loggermiddleware } = require('./middleware/logger');
const app = express();
const PORT = 8000;

const bookRouter = require('./routes/book.routes');

//Middleware (Plugins)
app.use(express.json());
app.use(loggermiddleware)

//Route
app.use('/books', bookRouter);

app.listen(PORT , ()=>{
    console.log("Port listening to 8000");
})