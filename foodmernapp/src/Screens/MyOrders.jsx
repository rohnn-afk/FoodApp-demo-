// import React from 'react'

import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"




const MyOrders = () => {

    const [orderdata, setOrderdata] = useState([])

    const handleMyOrders = async () => {

        // console.log('working');
        let useremail = localStorage.getItem('Email');
        // console.log(useremail)
        let response = await fetch('http://localhost:5000/api/mycart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: useremail })
        })
        let responsenew = await response.json();
        // console.log(responsenew.orders.order_data);
        setOrderdata(responsenew.orders.order_data);


    }


    useEffect(() => {
        handleMyOrders()
    }, [])



    return (
        <div>
        <div>
            <div>
                <Navbar />
            </div>
            <h2 className="m-auto text-success col text-center mt-4">My Orders</h2>
            <div className="container mb-5">
                <div className="row">
                    {
                     orderdata.map((innerArray, index) =>(
                           <div key={index+50} className="order">
                            {
                                innerArray.map((item, itemIndex) => (
                                    item.order_date ?
                                    <div key={itemIndex+13}> 
                                    <div className='m-auto mt-5' key={itemIndex}>
                                        {item.order_date}
                                    </div>
                                    <hr/>
                                    </div>
                                    :
                                    <div className='col-12 col-md-6 col-lg-3' key={itemIndex}>
                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                        {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                <span className='m-1'>{item.qty}</span>
                                                <span className='m-1'>{item.size}</span>
                                                {/* <span className='m-1'>{data}</span> */}
                                                <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                    ₹{item.price}/-
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>














                //             <div key={itemIndex} className="order-item">
                //                 <p>Item Name: {item.name}</p>
                //                 <p>Price: ₹{item.price}</p>
                //                 <p>Quantity: {item.qty}</p>
                //                 <p>Size: {item.size}</p>
                //                 <hr/>
                //             </div>

                                ))}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
        </div>
    )
}

export default MyOrders
