//import mangoose
const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    studentName:{
        type:String
    },
   Amount:{
    type:Number
   },
    Mode:{
        type:String
    },
   
    createAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date
    }

});
module.exports=mongoose.model('paymentdet',postSchema,'paymentdet');
