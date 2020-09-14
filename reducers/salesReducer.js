import types from "../types/types";

const initialState={
    saleLastActive: []
}

const salesReducer=(state=initialState, action)=>{

    switch (action.type) {
        case types.saleActive:
            return{
                ...state,
                saleLastActive: action.payload,
            }
        default:
            return state;
    }
}

export default salesReducer;