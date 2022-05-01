const express = require('express');
const router = express.Router();
const Post=require('../models/post');

//returning all documents on get
router.get('/', async (req, res) =>{
    try {
       const posts =await Post.find();
       res.json(posts)
    } catch (err) {
        res.json({message:err})
    }
});

//add new document in the collection
router.post('/', async (req, res) =>{
    const post = new Post({
        title:req.body.title,
        author:req.body.author,
        released:req.body.released
    });
    try {
        const savedPost =await post.save();
        res.json(savedPost)
     } catch (err) {
         res.json({message:err})
     }
});

//searching with id
router.get('/:id',async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id)
        res.json(post);
     } catch (err) {
         res.json({message:err})
     }
    });

//Delete post
router.delete('/:id',async (req, res)=>{
    try {
        const removePost = await Post.remove({_id: req.params.id})
        res.json(removePost);
     } catch (err) {
         res.json({message:err})
     }
    });

//Update post
router.patch('/:id',async (req, res)=>{
    try {
        const updatePost = await Post.updateOne(
            {_id:  req.params.id},
            {$set: {title:req.body.title, author:req.body.author, released:req.body.released}
        });
        res.json(updatePost);
     } catch (err) {
         res.json({message:err})
     }
    });

module.exports=router;
