import express from 'express';
import dbconnect from './database.js';
import userRouter from './Routes.js';
import cors from 'cors'
// import { addFoodData } from './Models/fooddatacontroller.js';

const port = 5000


const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.json("server listening bitch")
})

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/api',userRouter)

app.listen(port,()=>{
    console.log('listening at port 5000');
    dbconnect();
    
})

export default app