const Post=require('../models/post')
const postContoller={
    createPost:async(req,res)=>{
        try{
          const {title,content}=req.body
          const newPost=new Post({
title,
content

          })
          await newPost.save()
          res.status(201).json({ message:'post created successfully' })
        } catch(error){
          res.status(500).json({message:error.message})
        }
      },
      getPosts:async(req,res)=>{
        try{
         const posts=await Post.find().select('-__v');
         res.status(200).json({posts})
        } catch(error){
          res.status(500).json({message:error.message})
        }
      },
      getPost:async(req,res)=>{
        try{
          const {id}=req.params;
          const post=await Post.findById(id).select('---v')
          res.status(200).json({ post })

        } catch(error){


          res.status(500).json({message:error.message})
        }
      },
      updatePost:async(req,res)=>{
        try{
            const {id}=req.params

            const {title,content}=req.body
            await Post.findByIdAndUpdate(id,{title,content})
res.status(200).json({message:'Post updated suceessfull'})
         
        } catch(error){
          res.status(500).json({message:error.message});
        }
      },
      deletePost:async(req,res)=>{
        try{
            const {id}=req.params
            await Post.findByIdAndDelete(id);
            res.status(200).json({message:'Post Deleted suceessfull'})
        } catch(error){
          res.status(500).json({message:error.message})
        }
      },
      

}
module.exports=postContoller