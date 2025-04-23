//import mangoose
const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    Appid:{
        type:Number
    },
    tutorname:{
    type:String
   },
    Subject:{
        type:String
    },
    studentname:{
        type:Number
    },
    Date:{
        type:String
    }, 
    
    Time:{
        type:String
    },
    Active:{
        type:String
    }
    

});
module.exports=mongoose.model('Appoinment',postSchema,'Appoinment');
