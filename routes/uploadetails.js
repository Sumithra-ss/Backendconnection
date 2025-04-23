const express = require('express');

const {  createuploadetails } = require('../Controller/uploadetails')
const ApppostRouter=express.Router();

ApppostRouter.post('/',createuploadetails);



module.exports=ApppostRouter