import { useEffect, useRef, useState } from "react";
import { useCart, useDispatch } from "../contextapi/context";


  

const Cards = (props) => {

    let options = props.foodoption;
    let foodsize = Object.keys(options)

    const [qty ,setQty] = useState(1)
    const [size,setSize] = useState('')


    const dispatch = useDispatch()
    const data = useCart()



    const handlecart = async (qty) => {
        let food = [];
            for(const item of data){
                if(item.id === props.fooditem._id){

                    food = item ;
                    console.log('food:',food)
                    break
                }
            }
            if(food){
                if(food.size == size){
                    await dispatch({type:'UPDATE',id:props.fooditem._id,price:finalprice,qty:qty})
                    console.log('update')
                    return
                }
                else{
                    await  dispatch({type:'ADD',id:props.fooditem._id,name:props.fooditem.name,price:finalprice,size:size,qty:qty})
                    return
                }
            }
            await  dispatch({type:'ADD',id:props.fooditem._id,name:props.fooditem.name,price:finalprice,size:size,qty:qty})
        
    }

    let priceref = useRef()
    useEffect(() => {
        setSize(priceref.current.value)
    }, [])
    
    let finalprice = qty * parseInt(options[size])


    return (
        <div>
            <div className="card text-bg-dark mt-3 " style={{ 'width': '18rem', 'maxHeight': '500px' }}>
                <img src={props.fooditem.img} className="card-img-top " alt="..." style={{ 'height': '200px', 'objectFit': 'fill' }} />
                <div className="card-body">
                    <h5 className="card-title">{props.fooditem.name}</h5>
                    <p className="card-text">{props.fooditem.description}</p>
                    <div className='container w-100' style={{ 'border': 'none' }}>
                        <select className='m-2 h-100  bg-success rounded-sm' onChange={(e)=>{setQty(e.target.value) }}>
                            {
                                Array.from((Array(6)), (e, index) => {
                                    return <option key={index + 1} value={index + 1}>{index + 1}</option>
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded-sm' ref={priceref} onChange={(e)=>{setSize(e.target.value)}}>
                            {
                                foodsize.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })
                            }


                        </select>
                        <div className='d-inline h-100 fs-5' >
                        ₹{finalprice}/-
                        </div>
                        <hr />
                        <button className="btn btn-success justify-center ms-2 mb-2" onClick={()=> handlecart(parseInt(qty))}>Add to cart</button>

                    </div>
                </div>
            </div>

        </div>
    )
}



export default Cards
