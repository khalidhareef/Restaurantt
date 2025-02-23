import { combineReducers } from 'redux'
import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'
import { getAllFoodsReducer } from './Reducers/FoodReducers'
import { cartReducer } from './Reducers/CartReducer'



const finalReducer=combineReducers({
    getAllFoodsReducer:getAllFoodsReducer,
    cartReducer:cartReducer
}) 

const cartItems= localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
const initialState={

cartReducer:{
    cartItems:cartItems
}
}

const composeEnhancers = composeWithDevTools({})
const store=createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
export default store