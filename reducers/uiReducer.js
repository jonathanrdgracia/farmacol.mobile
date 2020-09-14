import types from '../types/types'

const initialState={
    loading: false,
    error: null
}

const uiReducer=(state= initialState, action)=>{

    switch (action.type) {
        case types.uiSetError:
            return{
                ...state,
                error: action.payload
            }
            case types.uiRemoveError:
                return{
                    ...state,
                    error:null
                }
        case types.uiChangeLoading:
            return{
                ...state,
                loading: !state.loading
            }
        case types.uiResetLoading:
            return{
                ...state,
                loading: false
            } 
        case types.uiSetError:
            return{
                ...state,
                error: action.payload
            }
            case types.uiRemoveError:
            return{
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export default uiReducer;