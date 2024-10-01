import { Schema , model} from "mongoose"



const Ordersschema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    order_data:{
        type:Array,
        required:true
    }
    
})


export const Order_Model = new model('ORDERS',Ordersschema)