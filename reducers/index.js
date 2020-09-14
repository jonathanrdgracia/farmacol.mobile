import { combineReducers } from 'redux'
import { productsReducer } from './productReducer'
import uiReducer from './uiReducer';
import salesReducer from './salesReducer'

const rootReducer= combineReducers({
    products: productsReducer,
    sales: salesReducer,
    ui: uiReducer,
})

export default rootReducer;