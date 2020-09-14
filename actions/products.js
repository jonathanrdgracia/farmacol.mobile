import { db } from "../firebase/firebaseConfig"
import types from "../types/types";
import { changeLoadingUI, setErrorLoadingUI,removeErrorLoadingUI } from "./ui";
import NetworkUtils from "../helpers/Network";

const isConnected=async()=>await NetworkUtils.isNetworkAvailable();

export const startLoadingProducts=()=> {
    return async dispatch=>{
        if(isConnected()){
            dispatch(changeLoadingUI())
            const products= []
            db.collection('products')
            .get()
            .catch(err=>{
                dispatch( setErrorLoadingUI(err) )
            }).then(productSnap=>{
                productSnap.forEach(product=>{
                    products.push({
                        id: product.id,
                        ...product.data()
                    })
                })
                dispatch( setProducts(products) )
                dispatch( removeErrorLoadingUI () )
            }).finally(()=> dispatch(changeLoadingUI()))
        }else{
            dispatch(setErrorLoadingUI('Sin acceso a internet'))
        }
    }
}

export const setProducts=(products)=>({
    type: types.productsList,
    payload: products
})