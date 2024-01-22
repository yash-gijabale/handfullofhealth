import React, { Fragment } from 'react'
import logo from '../../images/logo2.svg'
import './header.css'
import { GoSearch } from "react-icons/go";
import { SlPhone } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { TfiLocationArrow } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";


const UpperHeader = () => {
    return (
        <Fragment>
            <div className='upper-header-main'>
                <div className='header-logo-container'>
                    <img src={logo} alt=""/>
                </div>
                <div className='upper-header-search-container'>
                    <div className='search-box'>
                        <input type="text" placeholder='Search' />
                        <button><GoSearch /></button>
                    </div>
                </div>
                <div className='user-info-main'>
                    <span><SlPhone /> +91 84379237329</span>
                    <RxDividerVertical />
                    <span><BiUser /> My cccount</span>
                </div>
                <div className='upper-header-icons-main'>
                    <div className='header-icon'><FaRegHeart /></div>
                    <div className='header-icon'><TfiLocationArrow /></div>
                    <div className='header-icon'>
                        <BsCart3 />
                    </div>
                    <span className='cart-count'>2</span>
                </div>
            </div>

        </Fragment>
    )
}

export default UpperHeader