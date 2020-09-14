import React,{ useReducer }from "react"
import PedidoContext from "./productsContext"
import firebaseReducer from "../firebase/firebaseReducer"

export default FirebaseState=props=>{
    const initialState= {
        product:[]
    }

    const [state, dispatch]= useReducer(firebaseReducer,initialState)
    
    return(
        <PedidoContext.Provider
            value={{
                menu: state.products
            }}
            >
            {props.children}
        </PedidoContext.Provider>
    )
}