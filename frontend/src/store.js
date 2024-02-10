import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { addToCartReducer, allProducrReducer, categoryReducer } from './reducers/productReducer'

const reducers = combineReducers({
    allCategories : categoryReducer,
    allProducts: allProducrReducer,
    cartItem: addToCartReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducers, initialState , applyMiddleware(...middleware))

export default store