import mongoose, { Model } from "mongoose";
import { Schema } from "mongoose";
import { validate } from "email-validator";

const User = new Schema({

    
categoryname:{
    type:String
}
, name:{
    type:String
}
,img:{
    type:String
},
options:{
    type:Array
},
description:{
    type:String
}

})

const foodModel = new mongoose.model('fooddata',User);

export default foodModel;