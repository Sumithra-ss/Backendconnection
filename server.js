const mongoose=require('mongoose')
require('dotenv').config()
const app=require('./app')

const {MONGODB_URI}=require('./utils/config')
mongoose.connect(MONGODB_URI)


.then(() => {
    console.log('sucess');
    //start the server
    app.listen(3001,()=> {
        console.log('Server Start on http://localhost:3001')
    })
})

.catch(err=>{
    console.log('error connection to MongnDB',err);
})