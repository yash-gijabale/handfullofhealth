import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";

import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const LowerHeader = () => {
  // console.log(lowerNav)
  const lowerNav = useRef(null)
  const [intersect, setIntersect] = useState('')
  
  const stickyNav = () =>{
    if(window.scrollY >= 206){
      lowerNav.current.classList.add('sticky')
    }else{
      lowerNav.current.classList.remove('sticky')

    }
  }
  window.addEventListener('scroll', stickyNav)

  const location = useLocation()

  const [currentTab, setCurrentTab] = useState(location.pathname)
  const activeTab = (path) => {
    setCurrentTab(path)
  }

  const closeMobileMenu = () => {
    let menu = document.getElementById('mobile-menu')
    menu.classList.add('close-menu')
    menu.classList.remove('open-menu')
    console.log(menu)
  }

  const openMobileMenu = () => {
    let menu = document.getElementById('mobile-menu')
    menu.classList.remove('close-menu')
    menu.classList.add('open-menu')
    console.log(menu)
  }


  return (
    <Fragment>
      <div ref={lowerNav} className='lowerheader-main'>
        <div className='lowerheader-menu-container'>
          <div className='left-lowerheader-container'>
            <span><RxDashboard className='all-cat-icon' /> Browse all categories</span>
          </div>
          <div className='rigth-lowerheader-container'>
            <Link to={'/'} onClick={() => { activeTab('/') }} className={currentTab === '/' ? 'navActive' : ''}>Home</Link>
            <Link to={'/products'} onClick={() => { activeTab('/products') }} className={currentTab === '/products' ? 'navActive' : ''}>Show by Brands</Link>
            <Link to={'/gifting'}>Gifting</Link>
            <Link to={'/offers'}>Offers</Link>
            <Link to={'/arrival'}>New Arrivals</Link>
            <Link to={'/corparatr'}>Corporate Gifitng</Link>
            <Link to={'/about'}>About us</Link>
            <Link to={'/blog'}>Blogs</Link>
            <Link to={'/contact'}  onClick={() => { activeTab('/contact') }} className={currentTab === '/contact' ? 'navActive' : ''}>Contact us</Link>
          </div>
        </div>
      </div>
      <IoMenu className='open-mobile-menu' onClick={openMobileMenu} />

      <div className='lowerheader-main-mobile' id='mobile-menu'>
        {/* <button>X </button> */}
        <IoClose className='mobile-close' onClick={closeMobileMenu} />
        <div className='mobile-menu-container'>
          <div className='left-lowerheader-container'>
            <span><RxDashboard className='all-cat-icon' /> Browse all categories</span>
          </div>
          <div className='rigth-lowerheader-container'>
            <Link to={'/'} onClick={() => { activeTab('/') }} className={currentTab === '/' ? 'navActive' : ''}>Home</Link>
            <Link to={'/shopByBrand'} onClick={() => { activeTab('/shopByBrand') }} className={currentTab === '/shopByBrand' ? 'navActive' : ''}>Show by Brands</Link>
            <Link to={'/gifting'}>Gifting</Link>
            <Link to={'/offers'}>Offers</Link>
            <Link to={'/arrival'}>New Arrivals</Link>
            <Link to={'/corparatr'}>Corporate Gifitng</Link>
            <Link to={'/about'}>About us</Link>
            <Link to={'/blog'}>Blogs</Link>
            <Link to={'/contact'}>Contact us</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LowerHeader