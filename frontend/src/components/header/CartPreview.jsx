import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import CartProduct from './CartProduct';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
const CartPreview = () => {

  const togglePreview = () => {
    let cartPriviewMain = document.getElementById('cart-priview')
    cartPriviewMain.classList.remove('show-cart-privew')
  }

  const { cart } = useSelector(state => state.cartItem)

  let [cartPrice, setCartPrice] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    let price = 0
    cart && cart.forEach(item => {
      price += item.productPrice * item.productQty
    })

    setCartPrice(price)
  }, [cart])

  return (
    <div className='cart-preview-container'>
      <div className='title'>
        <IoClose onClick={togglePreview} className='preview-close' />
        <span>Your Cart</span>
        <span className='cart-price'>Rs. {cartPrice}.00</span>
      </div>
      <div className='cart-preview'>
        {
          cart && cart.length > 0 ?

            cart.map(item => (
              <CartProduct product={item} key={item.productId} />
            ))

            : <span className='cart-empty'>
              Cart is Empty
              <Link to={'/products'}><button onClick={togglePreview}>Shop now</button></Link>
            </span>
        }
      </div>
      {
        cart && cart.length > 0 ?
          <div className='cart-footer'>
            <button onClick={()=>{navigate('/myCart'); togglePreview()}}>GO TO CART <FaCartShopping className='cart-footer-icon' /></button>
          </div>
          : ''
      }

    </div>
  )
}

export default CartPreview