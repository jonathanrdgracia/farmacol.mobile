import types from "../types/types";


export const changeLoadingUI=()=>({
    type: types.uiChangeLoading,
})

export const ResetToTrueLoadingUI=()=>({
    type: types.uiResetLoading,
})
export const setErrorLoadingUI=(err)=>({
    type: types.uiSetError,
    payload: err
})
export const removeErrorLoadingUI=()=>({
    type: types.uiRemoveError,
})