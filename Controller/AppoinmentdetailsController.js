const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const tutor=require('../models/tutors');
const Appoinments=require('../models/Appinmentdetails')
const AppoinmentController = {
 createtutorAppdet:async(req,res)=>{
            try{
              const {Appid,tutorname,Subject,studentname,Date,Time,Active}=req.body
              const newTutorApp=new Appoinments({
                Appid,
                tutorname,
                Subject,
                studentname,
                Date,
                Time,
                Active
    
              })
              await newTutorApp.save()
              res.status(201).json({ message:'post created successfully' })
            } catch(error){
              res.status(500).json({message:error.message})
            }
           
          },
          getAppoinmentdet:async(req,res)=>{
            try{
                let query={};
                if(req.query.keyword){
                    query.$or=[
                        {"Active":{$regex: req.query.keyword,$options:'i'}}
                    ]
                }
             const Appoinment=await Appoinments.find(query).select('-__v');
             res.status(200).json({Appoinment})
            } catch(error){
              res.status(500).json({message:error.message})
            }
          },
          getAppoinmentBYdet:async(req,res)=>{
            try{
              const {id}=req.params
                
             const Appoinment=await Appoinments.findById(id).select('-__v');
             res.status(200).json([Appoinment])
            } catch(error){
              res.status(500).json({message:error.message})
            }
          },
          updateAppdet:async(req,res)=>{
                  try{
                      const {Appid}=req.params
          
                      const {Active}=req.body
                      await Appoinments.findByIdAndUpdate(Appid,{Active})
                    
          res.status(200).json({message:Appid})
                   
                  } catch(error){
                    res.status(500).json({message:error.message});
                  }
                },
                updateAppdetails:async(req,res)=>{
                    try{
                        const {Appid}=req.params
            
                        const {tutorname,Subject,Date,Time,Active}=req.body
                        await Appoinments.findByIdAndUpdate(Appid,{tutorname,Subject,Date,Time,Active})
                      
            res.status(200).json({message:Appid})
                     
                    } catch(error){
                      res.status(500).json({message:error.message});
                    }
                  },
        }

        module.exports = AppoinmentController;