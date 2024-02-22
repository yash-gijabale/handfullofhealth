import React, { Fragment, useEffect, useState } from 'react'
import './myCart.css'
import CartProductCard from '../../components/product/CartProductCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const MyCart = () => {
    const { cart } = useSelector(state => state.cartItem)

    let [cartPrice, setCartPrice] = useState(0)

    // const navigate = useNavigate()

    useEffect(() => {
        let price = 0
        cart && cart.forEach(item => {
            price += item.productMrp * item.productQty
        })

        setCartPrice(price)
    }, [cart])
    console.log(cart)
    return (
        <Fragment>
            <div className='my-cart-main'>

                {
                    cart && cart.length > 0 ?
                        <Fragment>
                            <div className='my-cart-container'>
                                {
                                    cart.map(item => (
                                        <CartProductCard product={item} />
                                    ))
                                }
                            </div>
                            <div className='cart-product-footer'>
                                <span>Total Rs.  {cartPrice}.00</span>
                                <button>Checkout</button>
                            </div>
                        </Fragment>
                        :<div className='cart-empty-main'>
                            <span>Cart is empty!</span>
                            <Link to={'/products'}><button className='shop-now'>Shop now</button></Link>
                            </div>
                        
                }

            </div>
        </Fragment>
    )
}

export default MyCart