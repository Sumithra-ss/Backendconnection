const express=require('express')
const postRouter=require('./routes/postRoutes')
const authRouter=require('./routes/authRoutes')
const tutorRouter=require('./routes/tutorRoutes')
const AppRouter=require('./routes/AppRoutes')
const cookieParser=require('cookie-parser')
const logger=require('./middleweares/logger');
const errRoute = require('./middleweares/errorRoute');
const zoomapp=require('./routes/zoom')
const app=express();
app.get('/posts',postRouter)
const cors=require('cors');
const { getusers,getuserbtid,updatePost,getuserdetbyid} = require('./Controller/getAllusers');
const { getPosts } = require('./Controller/postController');
const { login } = require('./Controller/authController');
const { createtutor,getTutors,getTutorbyid ,updateTutorbyid } = require('./Controller/tutorsController')
const {createtutorApp,getAppoinment, updateApp} = require('./Controller/AppoinmentController')
const {createtutorAppdet,getAppoinmentdet, updateAppdet,updateAppdetails,getAppoinmentBYdet} = require('./Controller/AppoinmentdetailsController')
const {getTutorsdetails,createtutorsetails, getTutordetbyid,updateTutordetbyid,getTutorsdetailsbyfeedback,getFeedReviewbyid,updateTutordetailsbyid,deletetoturdet,getTutorsdetailsbyDashboard,gettutoridbyname} = require('./Controller/tutordetailsController')
const {getPaymentdet,createpaymentdet} =require('./Controller/PaymentdetController')
const {createstudentdetails} =require('./Controller/studentsController')

const {createuploadetails,getuploaddetails} = require('./Controller/uploadetails')
app.use(express.json())
app.use(cors({
    origin:'https://backendconnection-14tc.onrender.com',
    credentials:true
}))
app.use(cookieParser())
app.use(logger);
app.use('/api/v1/auth',authRouter)
app.use('/login',login)
app.use('/posts',postRouter)
app.use('/createtutor',createtutor)
app.use('/getTutors',getTutors)
app.use('/getPosts',getPosts)
app.use('/getusers',getusers)
app.use('/getuserbtid/:email',getuserbtid)

app.use('/getTutorbyid/:id',getTutorbyid)
app.use('/createtutorApp',createtutorApp),
app.use('/getAppoinment',getAppoinment),
app.use('/updateApp/:id',updateApp),
app.use('/createtutorAppdet',createtutorAppdet),
app.use('/updateAppdet/:Appid',updateAppdet),
app.use('/getAppoinmentdet',getAppoinmentdet),
app.use('/updateAppdetails/:Appid',updateAppdetails)
app.use('/createtutorsetails',createtutorsetails)
app.use('/getTutorsdetails',getTutorsdetails)
app.use('/getTutordetbyid/:id',getTutordetbyid)
app.use('/updateTutordetbyid/:id',updateTutordetbyid)
app.use('/updateTutorbyid/:id',updateTutorbyid)
app.use('/getTutorsdetailsbyfeedback',getTutorsdetailsbyfeedback)
app.use('/createuploadetails',createuploadetails)
app.use('/getuploaddetails',getuploaddetails)
app.use('/getFeedReviewbyid/:tutorid',getFeedReviewbyid)
app.use('/getAppoinmentBYdet/:id',getAppoinmentBYdet)
app.use('/getPaymentdet',getPaymentdet)
app.use('/createpaymentdet',createpaymentdet)
app.use('/updatePost/:id',updatePost)
app.use('/getuserdetbyid/:id',getuserdetbyid)
app.use('/updateTutordetailsbyid/:id',updateTutordetailsbyid)
app.use('/deletetoturdet/:id',deletetoturdet)
app.use('/getTutorsdetailsbyDashboard/:key',getTutorsdetailsbyDashboard)
app.use('/gettutoridbyname/:sub',gettutoridbyname)
app.use('/createstudentdetails',createstudentdetails)



app.use(errRoute)
module.exports=app;

