import UserModel from "../Models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const jwtsecret = 'hfhdhdhshgfsisijoijiojeoui';

export async function signin(req,res) {


    try{
    const {email , password}= req.body;
    if(!email||!password){
        return res.status(404).json({success:false,message:"please enter all the credentials"})
    }
    const olddata = await UserModel.findOne({email})
    if(!olddata){
        return res.status(404).json({success:false,message:"Email not registered "})
    }
    // console.log(olddata)
    const comparedpass = await bcrypt.compare(password,olddata.password)

    if(!comparedpass){
        return res.status(404).json({success:false,message:"Incorrect passwword"})
    }
    const token = jwt.sign({id:olddata.id},jwtsecret);




    return res.status(202).json({success:true,message:'user logged in',token})

}
    catch(err){
        console.log(err)
        return  res.status(404).json({success:false,message:"User couldn't be registered"})
    }
    
}