const express = require('express');

const {getPaymentdet} = require('../Controller/PaymentdetController')
const postRouter=express.Router();


postRouter.get('/',getPaymentdet)


 
module.exports=postRouter