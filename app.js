// Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB connection
mongoose.connect('mongodb+srv://aleckleino:Raymond1993@cluster0.tszcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser:true},
() => console.log('DB connected')
);

//Middleware
app.use(bodyParser.json());

//Import Routes
const postRoute= require('./routes/posts');
app.use('/', postRoute);


app.listen(process.env.PORT || 3000, function (){
    console.log("Connected to server")
});