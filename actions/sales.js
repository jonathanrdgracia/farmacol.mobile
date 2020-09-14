import { db } from "../firebase/firebaseConfig"
import types from '../types/types'
import {setErrorLoadingUI,removeErrorLoadingUI,changeLoadingUI } from './ui'

export const startLoadingLastSale=()=> {
    return async dispatch=>{
        dispatch(changeLoadingUI())
        const sale= []
        db.collection('sales')
        .orderBy('dateAt','asc')
        .limit(1)
        .get()
        .catch(err=>{
           dispatch( setErrorLoadingUI (err) )
        }).then(saleSnap=>{
            saleSnap.forEach(_sale=>{
                sale.push({
                    id: _sale.id,
                    ..._sale.data()
                })
            })
            sale.map(lastSale=>{
                dispatch( insertLastSale(lastSale) )
            })
            dispatch( removeErrorLoadingUI () )
        }).finally(()=> dispatch(changeLoadingUI ()))
    }
}

export const insertLastSale=sale=>({
    type: types.saleActive,
    payload: sale
})