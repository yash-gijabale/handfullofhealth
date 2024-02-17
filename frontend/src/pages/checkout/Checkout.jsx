import React, { useEffect, useState } from 'react'
import './checkout.css'
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CheckoutProductCard from '../../components/product/CheckoutProductCard';
import { useSelector } from 'react-redux'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const { cart } = useSelector(state => state.cartItem)
    const [shippingCharge, setShippingCharge] = useState(100)

    let [cartPrice, setCartPrice] = useState(0)

    // const navigate = useNavigate()

    useEffect(() => {
        let price = 0
        cart && cart.forEach(item => {
            price += item.productPrice * item.productQty
        })

        setCartPrice(price)
    }, [cart])

    const showtoast = (message) =>{
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    const createOrder = async (e) => {
        e.preventDefault()

        let cartItem = []
        cart.forEach(item => {
            let temp = {
                productId: item.productId,
                productQty: item.productQty
            }
            cartItem.push(temp)
        })

        const formData = new FormData(e.target)
        const orderData = Object.fromEntries(formData)
        orderData.orderItems = cartItem
        orderData.itemAmount = cartPrice
        orderData.shippingCharge = shippingCharge
        orderData.totalAmount = shippingCharge + cartPrice
        // console.log(orderData)
        console.log(e)

        const { data } = await axios.post('/api/v1/createOrder', orderData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })


        let form = document.getElementById('orderForm')
        form.reset()
        console.log(data)
        if(data.success){
            showtoast('Product Added!')
        }
       
    }

    return (
        <div className='checkout-main'>
            <div className='checkout-header-main'>
                <div className='checkout-header'>
                    <h2>Handful of Health</h2>
                    <IoBagCheckOutline className='cart-icon' />
                </div>
            </div>
            <div className='checkout-body-main'>
                <div className='checkout-body-container'>
                    <div className='checkout-form-body'>
                        <form onSubmit={(e) => createOrder(e)} id='orderForm'>
                            <div className='email-from'>
                                <div className='title-box'>
                                    <h3>Contact</h3>
                                    <span>Have an acoount? <Link to='/'>Log in</Link></span>
                                </div>
                                <input type='email' name="email" className='email-input' placeholder='Enter email' />
                            </div>

                            <div className='email-from dilevery-form-main'>
                                <div className='title-box'>
                                    <h3>Delivery</h3>
                                </div>
                                <div className='dilevery-form'>
                                    <input type='text' name='country' className='dilevery-input' placeholder='Country/Region' value={'India'} />
                                    <div className='user-name'>
                                        <input type='text' name='firstName' className='dilevery-input' placeholder='First Name' />
                                        <input type='text' name='lastName' className='dilevery-input' placeholder='Last Name' />
                                    </div>
                                    <input type='text' name='address' className='dilevery-input' placeholder='Address' />
                                    <div className=' pincode-from'>
                                        <input type='text' name='city' className='dilevery-input' placeholder='City' />
                                        <input type='text' name='state' className='dilevery-input' placeholder='State' />
                                        <input type='text' name='pincode' className='dilevery-input' placeholder='Pin code' />
                                    </div>
                                    <input type='text' name='mobileNumber' className='dilevery-input' placeholder='Mobile Number' />
                                    <button className='paynow-btn'>Pay Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='checkout-product-body'>
                        {
                            cart.map(item => {
                                return <CheckoutProductCard product={item} />
                            })
                        }

                        <div className='cupon-form-main'>
                            <input type='text' className='cupon-text' placeholder='Discount code or gift card' />
                            <button className='cupon-btn' disabled={true}>Apply</button>
                        </div>
                        <div className='price-summury'>
                            <div className='summury'>
                                <span>Subtotal</span>
                                <span className='text-dark'>Rs. {cartPrice}.00</span>
                            </div>
                            <div className='summury border-bottom'>
                                <span>Shipping</span>
                                <span className='text-dark'>Rs. {shippingCharge}.00</span>
                            </div>
                            <div className='summury summury-total'>
                                <span>Total</span>
                                <span className='text-dark'>Rs. {cartPrice + shippingCharge}.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer/>
        </div>
    )
}

export default Checkout