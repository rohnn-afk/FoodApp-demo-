import { useState } from "react"
import { Order_Model } from "../Models/Orders.js"



export const CartData = async (req,res)=>{
    
    // const [cart,setCart] = useState({})
    
    
    let user_email = req.body.email;
    let data = await Order_Model.findOne({email:user_email})
    //  console.log(data);
    //  setCart(data);
     

     if(data){
        return res.json({orders:data,success:true})

     }
}