const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const paymentdet=require('../models/Payment')
const PaymentdetController = {
 
          getPaymentdet:async(req,res)=>{
            try{
                    const paymentdetail=await paymentdet.find().select('-__v');
                    res.status(200).json({paymentdetail})
                   } catch(error){
                     res.status(500).json({message:error.message})
                   }
          },
          createpaymentdet:async(req,res)=>{
                      try{
                        const {studentName,Amount,Mode}=req.body
                        const newTutorApp=new paymentdet({
                            studentName,
                            Amount,
                            Mode
                          
              
                        })
                        await newTutorApp.save()
                        res.status(201).json({ message:'post created successfully' })
                      } catch(error){
                        res.status(500).json({message:error.message})
                      }
                     
                    },
          
        }

        module.exports = PaymentdetController;