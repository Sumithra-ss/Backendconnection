const Post=require('../models/user')
const getAllusers={
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
      getusers:async(req,res)=>{
        try{
         const payment=await Post.find().select('-__v');
         res.status(200).json({payment})
        } catch(error){
          res.status(500).json({message:error.message})
        }
      },
      getuserbtid:async(req,res)=>{
        try{
          const {email}=req.params;
          const post=await Post.findOne({email:email}).select('---v')
          res.status(200).json({ post })

        } catch(error){


          res.status(500).json({message:error.message})
        }
      },
       
      updatePost:async(req,res)=>{
        try{
            const {id}=req.params

            const {email,role,status}=req.body
            await Post.findByIdAndUpdate(id,{email,role,status})
res.status(200).json({message:'user updated suceessfull'})
         
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
      getuserdetbyid:async(req,res)=>{
        try{
          const {id}=req.params;
          const user=await Post.findById(id).select('---v')
          res.status(200).json([user ])

        } catch(error){


          res.status(500).json({message:error.message})
        }
      },
       

}
module.exports=getAllusers