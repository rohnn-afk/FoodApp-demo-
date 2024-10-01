// import React from "react";
import Reactdom from 'react-dom'

const Modal_style ={
    position: 'fixed',
    top:'50%',
    left:'50%',
    backgroundColor:'rgb(34,34,34)',
    transform:'translate(-50%,-50%)',
    zIndex: 1000,
    height: '90%',
    width: '90%'
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }

export const Modal=({children ,onClose})=>{

    return (
        Reactdom.createPortal(
            <>
            <div style={OVERLAY_STYLES}/>
            <div style={Modal_style}>
                <button className="btn bg-danger fs-4" style={{marginLeft:'90%', marginTop:'-30px'}} onClick={onClose}>X</button>
            {children}
            </div>
            </>,
            document.getElementById('cart-root')
        )
    )
}