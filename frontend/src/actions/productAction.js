import {
    ADD_TO_CARD,
    All_PRODUCTS_FAIL,
    All_PRODUCTS_REQUEST,
    All_PRODUCTS_SUCCESS,
    LOAD_CARD,
    REMOVE_FROM_CARD,
    EMPTY_CART
} from '../constant/productConstant'

import axios from 'axios'

export const getAllProducts = (keyword = '', page) => async (dispatch) => {

    try {

        dispatch({
            type: All_PRODUCTS_REQUEST
        })

        const { data } = await axios.get(`/api/v1/products?keyword=${keyword}&page=${page}`)
        console.log(data)

        dispatch({
            type: All_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {

    }
}

export const addToCard = (id, qty, reduce = false) => async (dispatch) => {
    let oldCart = localStorage.getItem('cartItem')
    console.log(id)
    const { data } = await axios.get(`/api/v1/product/${id}`)
    console.log(data.result)
    const product = data.result.product
    let cart = []
    let cartProduct = {
        productId: product._id,
        productName: product.name,
        productPrice: product.price,
        productMrp: product.price,
        productImage: product.images[0].secure_url,
        productDiscription: product.discription,
        productQty: 1
    }

    if (oldCart) {
        let oldCard = JSON.parse(oldCart)
        let isExistInCart = oldCard.filter(item => {
            return item.productId === id ? item : ''
        })
        if (isExistInCart.length) {
            let updateCart = oldCard.map(item => {
                if (item.productId === id) {
                    if(!reduce){

                        item.productQty = item.productQty + qty
                        item.productPrice = item.productQty * product.price
                    }else{
                        item.productQty = item.productQty - qty
                        item.productPrice = item.productQty * product.price
                    }
                }

                return item
            })
            cart = updateCart

        } else {
            cart = [...oldCard, cartProduct]
        }

    } else {
        cart.push(cartProduct)
    }
    localStorage.setItem('cartItem', JSON.stringify(cart))
    let cartItems = localStorage.getItem('cartItem')

    dispatch({
        type: ADD_TO_CARD,
        payload: cartItems
    })


}

export const removeFromCart = (id) => (dispatch) => {
    let cartItem = JSON.parse(localStorage.getItem('cartItem'));

    let updatedCart = cartItem.filter(item => {
        return item.productId != id
    })

    localStorage.setItem('cartItem', JSON.stringify(updatedCart))
    let cart = localStorage.getItem('cartItem')
    dispatch({
        type: REMOVE_FROM_CARD,
        payload: cart
    })
}


export const loadCart = () => (dispatch) => {
    let cart = localStorage.getItem('cartItem')
    dispatch({
        type: LOAD_CARD,
        payload: cart
    })
}


export const emptyCart = () => (dispatch) =>{
    const emptyCartData = []
    localStorage.setItem('cartItem', JSON.stringify(emptyCartData))
    let cart = localStorage.getItem('cartItem')

    dispatch({
        type: EMPTY_CART,
        payload: cart
    })

}