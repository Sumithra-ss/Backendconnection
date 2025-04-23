const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const tutor=require('../models/tutors');
const Appoinments=require('../models/Appoinment');
const AppoinmentController = {
 createtutorApp:async(req,res)=>{
            try{
              const {tutorname,Subject,studentname,Date,Time,Active}=req.body
              const newTutorApp=new Appoinments({
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
          getAppoinment:async(req,res)=>{
            try{
             const Appoinment=await Appoinments.find().select('-__v');
             res.status(200).json({Appoinment})
            } catch(error){
              res.status(500).json({message:error.message})
            }
          },
          updateApp:async(req,res)=>{
                  try{
                      const {id}=req.params
          
                      const {Active}=req.body
                      await Appoinments.findByIdAndUpdate(id,{Active})
          res.status(200).json({message:'Appoinment updated suceessfull'})
                   
                  } catch(error){
                    res.status(500).json({message:error.message});
                  }
                },
        }

        module.exports = AppoinmentController;