const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8  //min ength of password must be of 8
    },
    completedtill:{
        type:Date
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const UserData=new mongoose.model("UserData",UserSchema)
module.exports=UserData
