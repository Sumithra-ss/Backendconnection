const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');
const Post=require('../models/post')

const authController = {
    register: async (req, res) => {
        try {
            // get the user inputs
            const { name, email, password,role } = req.body;

            // check if the user already exists
            const user = await User.findOne({ email });

            // if the user exists, return an error
            if (user) {
                return res.status(500).json({ message: 'User already exists' });
            }

            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                role
            });

            // save the user
            await newUser.save();

            // return a success message
            res.status(201).json({ message: 'User registered!' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    login: async (req, res) => {
        try {
            // get the user inputs
            const { email, password } = req.body;

            // check if the user exists
            const user = await User.findOne({ email });

            // if the user does not exist, return an error
            if (!user) {
                return res.status(500).json({ message: 'User not found' });
            }

            // check if the password is correct
            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            // if the password is incorrect, return an error
            if (!isPasswordCorrect) {
                return res.status(500).json({ message: 'Invalid credentials' });
            }

            // create a token
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '3h' });

            // set the token in the cookie
            res.cookie('token', token, { httpOnly: true, sameSite: 'strict', maxAge: 3 * 60 * 60 * 1000, secure: true, path: '/' });

            // return a success message
            res.status(200).json({ user,message:"loggedin success" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    logout: async (req, res) => {
        try {
            // clear the token in the cookie
            res.clearCookie('token');

            // return a success message
            res.status(200).json({ message: 'User logged out!' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    me: async (req, res) => {
        try {
            // get the user id from the request object
            const userId = req.userId;

            // get the user details from the database
            const user = await User.findById(userId);

            // return the user details
            res.status(200).json({ user });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    updatePost:async(req,res)=>{
            try{
                const {id}=req.params
    
                const {name,email}=req.body
                await User.findByIdAndUpdate(id,{name,email})
    res.status(200).json({message:'Post updated suceessfull'})
             
            } catch(error){
              res.status(500).json({message:error.message});
            }
}
}
module.exports = authController;