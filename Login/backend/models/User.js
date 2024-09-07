const { Schema, model } =require("mongoose");

const UserSchema =new Schema({
    username:{
        type:String,
        required:true,
        trim: true,
    },
    password:{
        type:String,
        required:true,
        trim: true,
    },
    active:{
        type:Boolean,
        default:true,
    }
}, {timestamps: true})

module.exports =model("user", UserSchema);