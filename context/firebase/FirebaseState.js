import React,{ useReducer }from "react"
import firebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'

export default FirebaseState=props=>{
    const initialState= {
        products:[]
    }

    const [state, dispatch]= useReducer(firebaseReducer,initialState)
    
    return(
        <FirebaseContext.Provider
            value={{
                menu: state.products
            }}
            >
            {props.children}
        </FirebaseContext.Provider>
    )
}