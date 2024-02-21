import React, { Fragment, useEffect, useState } from 'react'
import logo from '../../images/logo2.svg'
import './header.css'
import { GoSearch } from "react-icons/go";
import { SlPhone } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { TfiLocationArrow } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import CartPreview from './CartPreview';
import {Link} from 'react-router-dom'
import { logout } from '../../actions/userAction';
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
const UpperHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const {user} = useSelector(state => state.user)

    const { cart } = useSelector(state => state.cartItem)
    console.log(cart)

    const handelChange = async (e) => {
        setSearch(e.target.value)
        // if(e.target.value){   
        //     const {data} = await axios.get(`/api/v1/products?keyword=${e.target.value}`)
        //     console.log(data.result)
        // }
    }

    const getSearchResult = () => {
        search ? navigate(`/products?keyword=${search}`) : navigate('/products')
    }

    let [totalCartItems, setTotalCartItems] = useState(0)
    const setCartCount = (cart) => {
        let count = 0
        cart && cart.forEach(item => {
            count += item.productQty
        })
        setTotalCartItems(count)
    }
    useEffect(() => {
        setCartCount(cart)

    }, [cart])

    const toggleCartPreview = () =>{
        let cartPriviewMain = document.getElementById('cart-priview')
        cartPriviewMain.classList.add('show-cart-privew')
    }

    const handleLogout = () =>{
        dispatch(logout())
    }

    return (
        <Fragment>
            <div className='upper-header-main'>
                <div className='upper-1'>
                    <div className='header-logo-container'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='upper-header-search-container'>
                        <div className='search-box'>
                            <input type="text" placeholder='Search' value={search} onChange={(e) => handelChange(e)} />
                            <button onClick={getSearchResult}><GoSearch /></button>
                        </div>
                    </div>
                </div>


                <div className='upper-2'>
                    <div className='user-info-main'>
                        <span><SlPhone /> +91 84379237329</span>
                        <RxDividerVertical />
                        <span><Link to={'/account'}><BiUser /> My cccount</Link></span>
                    </div>
                    <div className='upper-header-icons-main'>
                        <div className='header-icon'><FaRegHeart /></div>
                        <div className='header-icon' onClick={toggleCartPreview}><BsCart3 /></div>
                        <span className='cart-count'>{totalCartItems}</span>
                        {
                            user ?
                            <div className='header-icon' title='Logout' onClick={handleLogout}><IoIosLogOut /></div>
                            :
                            <div className='header-icon' title='Login' ><Link to={'/login'}><FaRegUser /></Link></div>
   
                        }
                    </div>
                    <div className='cart-preview-main' id='cart-priview'>
                        <CartPreview/>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default UpperHeader