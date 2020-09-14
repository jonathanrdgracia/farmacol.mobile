import React from 'react'
import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'; // no changes here 😀
import { persistStore,persistReducer } from 'redux-persist'
import  AsyncStorage  from '@react-native-community/async-storage';
import rootReducer from '../reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig={
    key: 'root',
    storage: AsyncStorage,
    whitelist:[
        'products',
        'salesReducer',
    ]
}
const persistedReducer= persistReducer(persistConfig, rootReducer)

const store= createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
    
    )
    let persistor= persistStore(store)

export {
    store,
    persistor
}
