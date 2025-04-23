const express = require('express');
const { createtutor, getTutors, getTutorbyid } = require('../Controller/tutorsController');

const { checkAuth } = require('../middleweares/auth');
const postRouter=express.Router();

postRouter.post('/tutor',createtutor);
postRouter.get('/gettutor',getTutors);
postRouter.get('/getTutorbyid/:id',getTutorbyid)