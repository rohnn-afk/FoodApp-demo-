import express from 'express'
import  createuser  from './Controller/Createuser.js'
import { signin } from './Controller/Signin.js'
import { foodData } from './Controller/FoodData.js'
import {  orderCheckOut } from './Controller/Orders.js'
import { CartData } from './Controller/Cartdata.js'

const userRouter = express.Router()

//createuser route
userRouter
.route('/createuser')
.get((req,res)=>{
    res.status(202).json({success:true})
})
.post(createuser)

//login route
userRouter
.route('/signinuser')
.post(signin)


//display food data
userRouter
.route('/fooddata')
.post(foodData)

//cart
userRouter
.route('/orderData')
.get((req,res)=>{res.json({msg:'true'})})
.post(orderCheckOut)

userRouter
.route('/mycart')
.post(CartData)


export default userRouter