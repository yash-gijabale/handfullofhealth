import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { addToCartReducer, allProducrReducer, categoryReducer } from './reducers/productReducer'
import { userReducer } from './reducers/userReducer'

const reducers = combineReducers({
    allCategories : categoryReducer,
    allProducts: allProducrReducer,
    cartItem: addToCartReducer,
    user : userReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducers, initialState , applyMiddleware(...middleware))

export default store