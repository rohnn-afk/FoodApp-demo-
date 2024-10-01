// import React from 'react'
import { useCart, useDispatch } from '../contextapi/context'
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    const data = useCart()
    console.log(data);
    
    const dispatch = useDispatch()

    if(data.length === 0 ){
        return (
            <div>
                <div className='m-5 text-center w-100 fs-3'>your cart is empty !</div>
            </div>
        )
    }
    let totalprice = data.reduce((total,food)=>total+ food.price,0)

    const handleCheckOut = async ()=>{
        let userEmail = localStorage.getItem('Email');
        // console.log(userEmail);
        
        let response = await fetch('http://localhost:5000/api/orderData',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:userEmail,order_data:data,date:new Date().toDateString()})
        })
       let result = await response.json()

        
        console.log(result.success);
        
        if(result.success){
          await  dispatch({type:'DROP'})
        }
    }


  return (
    <div>
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
            <table className='table table-hover'>
                <thead className='text-success fs-4'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Option</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food,index)=>(
                        <tr key={index}>
                            <th scope='row'>{index+1}</th>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            <td><button type='button' className='btn p-0' onClick={()=> dispatch({type:'REMOVE',index:index})}><DeleteIcon/></button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div><h1 className='fs-2'>Total Price : {totalprice}/-</h1></div>
            <button className='btn text-success mt-5 mb-5' onClick={()=>handleCheckOut()}>Checkout</button>
        </div>
        

      
    </div>
  )
}

export default Cart
