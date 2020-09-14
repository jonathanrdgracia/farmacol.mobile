import types from '../types/types'
const initialState={
    products:[],
    seleted: null,
}
export const productsReducer=(state= initialState, action)=>{
    switch (action.type) {
       case types.productsList:
           return{
               ...state,
               products: [...action.payload]
           }
        default:
            return state;
    }
}