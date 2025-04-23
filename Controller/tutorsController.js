const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const tutor=require('../models/tutors');
const tutors=require('../models/tutors');

const tutorsController = {
    getTutors:async(req,res)=>{
                  try{
                   const tutor=await tutors.find().select('-__v');
                   res.status(200).json({tutor})
                  } catch(error){
                    res.status(500).json({message:error.message})
                  }
                },
    createtutor:async(req,res)=>{
            try{
              const {subject,availability,Name,price,email,Experience,Expertise,Qualifications,password,Rating,Feedback,studentName}=req.body
              const newTutor=new tutor({
                subject,
                availability,
                Name,
                price,
                email,
                Experience,
                Expertise,
                Qualifications,
                password,
                Rating,
                Feedback,
                studentName
                
    
              })
              await newTutor.save()
              res.status(201).json({ message:'post created successfully' })
            } catch(error){
              res.status(500).json({message:error.message})
            }
          },
           getTutorbyid:async(req,res)=>{
                   try{
                     const {id}=req.params;
                     const post=await tutors.findById(id).select('---v')
                     res.status(200).json([post])
           
                   } catch(error){
           
           
                     res.status(500).json({message:error.message})
                   }
                 },
                 updateTutorbyid:async(req,res)=>{
                  try{
                    const {id}=req.params
                      const {Name,subject,email,Experience,Expertise,Qualifications,password}=req.body
                       await tutors.findByIdAndUpdate(id,{Name,subject,email,Experience,Expertise,Qualifications,password})
                    res.status(200).json([])
          
                  } catch(error){
          
          
                    res.status(500).json({message:error.message})
                  }
                },
                  }
          
module.exports = tutorsController;