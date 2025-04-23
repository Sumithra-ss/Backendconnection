const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const tutor=require('../models/uploadetails');
const tutordetails=require('../models/uploadetails');

const uploadetails = {
    getuploaddetails:async(req,res)=>{
                  try{
                    let query={};
                    if(req.query.keyword){
                        query.$or=[
                            {"availability":{$regex: req.query.keyword,$options:'i'}}
                        ]
                    }
                   const tutor=await tutordetails.find().select('-__v');
                   res.status(200).json({tutor})
                  } catch(error){
                    res.status(500).json({message:error.message})
                  }
                },
    createuploadetails:async(req,res)=>{
            try{
              const {tutorname,subject,url }=req.body
              
              const newTutor=new tutor({
                tutorname,
                subject,
                url
    
              })
              const savepost=await newTutor.save()
              // Add post to user's posts
              // const user = await User.findById('67fa34aa7e8093c55d1a1275');
              // user.posts.push(savepost._id);
              // await user.save();
  
              
           
              res.status(201).json({ message:'post created successfully' })
            } catch(error){
              res.status(500).json({message:error.message})
            }
          },
          
                  }
          
module.exports = uploadetails;