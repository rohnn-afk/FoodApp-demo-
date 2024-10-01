import { Order_Model } from "../Models/Orders.js";


export const orderCheckOut = async (req,res)=>{


    const data = req.body.order_data;
    await data.splice(0,0,{order_date:req.body.date})
    let eID = await Order_Model.findOne({'email': req.body.email})
    // console.log(eID)
    if(eID === null){
        try {
            await Order_Model.create({email:req.body.email,order_data:[data]})
            res.status(202).json({message:'order created',success:true})
        } catch (error) {
            return  res.status(404).json({message:'order not created',success:false,error:error.message})
        }
    }
    else{
        try {
            await Order_Model.findOneAndUpdate({email:req.body.email},{$push:{order_data:data}})
            res.status(202).json({message:'order updated',success:true})
        } catch (error) {
            return  res.status(404).json({message:'order not updated',success:false,error:error.message})
        }

    }
}