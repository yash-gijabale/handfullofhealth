import {
    ALL_CATEGORY_FAIL,
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,

    All_PRODUCTS_FAIL,
    All_PRODUCTS_REQUEST,
    All_PRODUCTS_SUCCESS,
    ADD_TO_CARD,
    REMOVE_FROM_CARD,
    LOAD_CARD,
    EMPTY_CART
} from '../constant/productConstant'


export const categoryReducer = (state = { categories: [] }, action) => {

    switch (action.type) {
        case ALL_CATEGORY_REQUEST:
            return {
                loading: true,
                ...state
            }

        case ALL_CATEGORY_SUCCESS:
            return {
                loading: false,
                categories: action.payload
            }

        case ALL_CATEGORY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}



export const allProducrReducer = (state = { allProducts: [] }, action) => {
    switch (action.type) {
        case All_PRODUCTS_REQUEST:
            return {
                loading: true,
                ...state
            }

        case All_PRODUCTS_SUCCESS:
            return {
                loading: false,
                allProducts: action.payload.result,
                totalProduct: action.payload.totalProducts
            }

        case All_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


export const addToCartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
        case REMOVE_FROM_CARD:
            return {
                cart: JSON.parse(action.payload)
            }

        case LOAD_CARD:
            return {
                cart: JSON.parse(action.payload)
            }
        
        case EMPTY_CART:
            return{
                cart: JSON.parse(action.payload)
            }
        default:
            return state
    }
}

