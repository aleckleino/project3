const mongoose = require('mongoose');

//Schema
const Schema=mongoose.Schema ({
    title:String,
    author:String,
    released:String 
}, {
    versionKey: false 
});

module.exports=mongoose.model('Posts', Schema);