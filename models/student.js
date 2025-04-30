//import mangoose
const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    Name:{
        type:String
    },
    email:{
        type:String
    },
    Education:{
        type:String
    },
   conduct:{
    type:String
   },
    Address:{
        type:String
    },
   
   

});
module.exports=mongoose.model('students',postSchema,'students');
