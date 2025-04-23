const express = require('express');
const { createtutorsetails,  getTutordetbyid,getTutorsdetails } = require('../Controller/tutordetailsController');

const { checkAuth } = require('../middleweares/auth');
const postRouter=express.Router();

postRouter.post('/createtutorsetails',createtutorsetails);
postRouter.get('/getTutordetbyid',getTutordetbyid);
postRouter.get('/getTutorsdetails',getTutorsdetails)