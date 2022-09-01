// go into package.json and change node to nodemon server
// name in package.json controls what file it reads for the server
const express = require("express");
const mongoose = require('mongoose')
const app = express();
const port = 8000;
// const mongoURI = "mongodb+srv://root:root@cluster0.yvjacor.mongodb.net/?retryWrites=true&w=majority"
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


require('./config/jokes.config')
require('./routes/jokes.routes')(app)



app.listen(port, ()=>console.log(`Server working on port ${port}`))