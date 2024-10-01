import UserModel from "../Models/User.js";
import bcrypt from 'bcryptjs';




async function createuser(req,res) {

    try{

    const {name, email, password , location} = req.body;
    if(!name||!email||!password||!location){
        return res.status(404).json({success:false,message:"please enter all the credentials"})
    }
    const olduser = await UserModel.findOne({email})
    if(olduser){
        return res.status(404).json({success:false,message:"User already registered"})
    }

    const saltrounds = 10;
    const hashedpass = await bcrypt.hash(password,saltrounds);
 


    const newuser = new UserModel({name,email,password:hashedpass,location})
    await newuser.save();
    return  res.status(202).json({success:true,message:"User succesfully registered"})
}
catch(err){
    console.log(err)
    return  res.status(404).json({success:false,message:"User couldn't be registered"})
}
}

export default createuser