const express = require('express');
const { register, login, logout, me, updatePost } = require('../Controller/authController');

const { checkAuth } = require('../middleweares/auth');

const authRouter = express.Router();
// authRouter.get('/',(req,res)=>{
//     res.json({message:'Hello World2'})
// })

// setup the routes
 authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/me', checkAuth, me);
authRouter.post('/:id',updatePost)


module.exports = authRouter;