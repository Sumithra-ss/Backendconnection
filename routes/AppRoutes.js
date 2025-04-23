const express = require('express');

const { createtutorApp, getAppoinment,updateApp } = require('../Controller/AppoinmentController')
const ApppostRouter=express.Router();

ApppostRouter.post('/',createtutorApp);
ApppostRouter.get('/',getAppoinment)
ApppostRouter.post('/updateApp/:id',updateApp)


module.exports=ApppostRouter