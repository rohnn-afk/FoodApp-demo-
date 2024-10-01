import mongoose from "mongoose";
import { Schema } from "mongoose";
import { validate } from "email-validator";

const User = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:function(){
            return validate(this.email)
        }
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const UserModel = new mongoose.model('Users',User);

export default UserModel;