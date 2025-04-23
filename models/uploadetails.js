const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    tutorname:{
        type:String,
        required:true,
        
    },
    subject:{
        type:String
    },
    url:{
        type:String,
        required:true,

    },
    
},{timestamps:true})
module.exports=mongoose.model('uploadetails',userSchema,'uploadetails')