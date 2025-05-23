const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const tutor=require('../models/tutordetails');
const tutordetails=require('../models/tutordetails');

const tutorsController = {
    getTutorsdetails:async(req,res)=>{
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
    createtutorsetails:async(req,res)=>{
            try{
              const {tutorid,Name,subject,email,availability,Feedback,Rating,studentName}=req.body
              
              const newTutor=new tutor({
                Name,
                subject,
                 email,
                  availability,
                 Feedback,
                 Rating,
                 studentName,
                 tutorid
                 
    
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
           gettutoridbyname:async(req,res)=>{
                  try{
                    const {subject}=req.params;
                    const details=await tutordetails.findOne({subject}).select('---v')
                    res.status(200).json({ details })
          
                  } catch(error){
          
          
                    res.status(500).json({message:error.message})
                  }
                },
           getTutordetbyid:async(req,res)=>{
                   try{
                     const {id}=req.params;
                     const post=await tutordetails.findById(id).select('---v')
                     res.status(200).json([post])
           
                   } catch(error){
           
           
                     res.status(500).json({message:error.message})
                   }
                 },
                 getTutorsdetailsbyfeedback:async(req,res)=>{
                  try{
                 
                   const tutor=await tutordetails.find().populate({path:"tutorid"});
                   res.status(200).json({tutor})
                  } catch(error){
                    res.status(500).json({message:error.message})
                  }
                },
                 updateTutordetbyid:async(req,res)=>{
                                   try{
                                       const {id}=req.params
                           
                                       const {studentName,Feedback,Rating}=req.body
                                       if (!req.body){
                                        return res.status(404).json({message:'All fields are required'})
                                       }
                                       
                                       await tutordetails.findByIdAndUpdate(id,{studentName,Feedback,Rating})
                           res.status(200).json({message:'Tutor updated suceessfull'})
                                    
                                   } catch(error){
                                     res.status(500).json({message:error.message});
                                   }
                                 },
                                 getFeedReviewbyid:async(req,res)=>{
                                  try{
                                    const {tutorid}=req.params;
                                    const post=await tutordetails.findById(tutorid).select('---v')
                                    res.status(200).json({ post })
                          
                                  } catch(error){
                          
                          
                                    res.status(500).json({message:error.message})
                                  }
                                },
                                updateTutordetailsbyid:async(req,res)=>{
                                  try{
                                      const {id}=req.params
                          
                                      const {Name,subject,availability}=req.body
                                      if (!req.body){
                                       return res.status(404).json({message:'All fields are required'})
                                      }
                                      
                                      await tutordetails.findByIdAndUpdate(id,{Name,subject,availability})
                          res.status(200).json({message:'Tutor updated suceessfull'})
                                   
                                  } catch(error){
                                    res.status(500).json({message:error.message});
                                  }
                                },
                                deletetoturdet:async(req,res)=>{
                                        try{
                                            const {id}=req.params
                                            await tutordetails.findByIdAndDelete(id);
                                            res.status(200).json({message:' Deleted suceessfull'})
                                        } catch(error){
                                          res.status(500).json({message:error.message})
                                        }
                                      },
                                      getTutorsdetailsbyDashboard:async(req,res)=>{
                                        try{
                                       
                                          const tutor = await tutordetails.aggregate([
                                            {
                                              $lookup: {
                                                from: 'tutors',
                                                localField: 'tutorid',
                                                foreignField: '_id',
                                                as: 'tutor'
                                              }
                                            },
                                          { $unwind: '$tutor' },
                                            {
                                              $match: {
                                                $or: [
                                                  { subject: { $regex: req.params.key, $options: 'i' } },
                                                  { availability: { $regex: req.params.key, $options: 'i' } },
                                                  {
                                                    $expr: {
                                                      $regexMatch: {
                                                        input: { $toString: "$Rating" },
                                                        regex: req.params.key,
                                                        options: 'i'
                                                      }
                                                    }
                                                  },
                                          {
                                                    $expr: {
                                                      $regexMatch: {
                                                        input: { $toString: "$tutor.price" },
                                                        regex: req.params.key,
                                                        options: 'i'
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            }
                                          ]);
                                          
                                          
                                        if (!tutor) {
                                          return res.status(500).json({ message: 'User not found' });
                                      }
                                      else
                                      {
                                        res.status(200).json(tutor)
                                      }
                                        
                                        } catch(error){
                                          res.status(500).json({message:error.message})
                                        }
                                      },

                                      getTutorsdetailsbyfeedbackbyid:async(req,res)=>{
                                        try{
                                       
                                         const tutor=await tutordetails.find({
                                          "$or":[
                                            {
                                              subject:{$regex:req.params.key}
                                            },
                                          
                                            {
                                              availability:{$regex:req.params.key}
                                            },
                                            {
                                              Rating:{$regex:req.params.key}
                                            }
                                           
                                          ]
                                        }).populate({path:'tutorid',
                                          match: {  price:{$regex:req.params.key} ,
                                        }
                                        }
                                        );
                                        if (!tutor) {
                                          return res.status(500).json({ message: 'User not found' });
                                      }
                                         res.status(200).json({tutor})
                                        } catch(error){
                                          res.status(500).json({message:error.message})
                                        }
                                      },
                                      // getTutorsdetailsbyfeedbackbySearch:async(req,res)=>{
                                      //   try{
                                       
                                      //    const tutor=await tutordetails.find( "$or":[
                                      //     {
                                      //       subject:{$regex:req.params.key}
                                      //     },
                                        
                                      //     {
                                      //       availability:{$regex:req.params.key}
                                      //     },
                                      //     {
                                      //       Rating:{$regex:req.params.key}
                                      //     }
                                         
                                      //   ]).populate({path:"tutorid"});
                                      //    res.status(200).json({tutor})
                                      //   } catch(error){
                                      //     res.status(500).json({message:error.message})
                                      //   }
                                      // },

                  }
          
module.exports = tutorsController;