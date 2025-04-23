const express = require('express');

const { createtutorAppdet, getAppoinmentdet,updateAppdet ,updateAppdetails} = require('../Controller/AppoinmentdetailsController')
const ApppostRouter=express.Router();

ApppostRouter.post('/',createtutorAppdet);
ApppostRouter.get('/',getAppoinmentdet)
ApppostRouter.post('/updateAppdet/:Appid',updateAppdet)
ApppostRouter.post('/updateAppdet/:Appid',updateAppdetails)


module.exports=ApppostRouter