const mongoose = require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
    },
    phone:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum: ["student", "tutor", "admin"],
        required:true,
    },
    dateJoined: {
        type: Date,
        default: Date.now,
    },
});

const user= mongoose.model("users",userSchema)
module.exports=user;