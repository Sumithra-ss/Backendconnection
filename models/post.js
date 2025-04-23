//import mangoose
const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    title:{
        type:String
    },
   content:{
    type:String
   },
    Rating:{
        type:Number
    },
    Author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }, 
    Feedback:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Feedback'
        }
],
    createAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date
    }

});
module.exports=mongoose.model('Post',postSchema,'posts');
