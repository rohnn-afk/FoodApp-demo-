import {  createContext, useContext, useReducer } from "react";
// import React from 'react'


const cartStateContext = createContext()
const cartDispatchContext = createContext()

const reducer = (state,action) => {
switch(action.type){
    case'ADD': return [...state,{id:action.id,name:action.name,price:action.price,size:action.size,qty:action.qty}]

    case'REMOVE':{  let newARR = [...state]
     return newARR.filter((food,index)=> index !== action.index)}

    case'UPDATE': {let arr=[...state]
    return arr.map((food)=>{
        if(food.id == action.id){
            return {...food,qty :  action.qty,price :  action.price}
        }
        return food
    })
    }
    case'DROP': {let emptyarr = []
        return emptyarr;
    }

    default: console.log('error in reducer');
}
}

export const Context = ({children}) => {
  
    const [state,dispatch] = useReducer(reducer,[])


    return (
    <cartStateContext.Provider value={state}>
        <cartDispatchContext.Provider value={dispatch}>
            {children}
        </cartDispatchContext.Provider>
    </cartStateContext.Provider>
  )
}



export const useCart = ()=> useContext(cartStateContext)
export const useDispatch = ()=> useContext(cartDispatchContext)