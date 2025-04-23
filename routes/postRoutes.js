const express = require('express');

const {createPost, getPosts, updatePost} = require('../Controller/postController')
const postRouter=express.Router();

postRouter.post('/',createPost);
postRouter.get('/',getPosts)
postRouter.put('/:id',updatePost)

 
module.exports=postRouter