import React, { Fragment, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
const LowerHeader = () => {


  const location = useLocation()

  const [currentTab, setCurrentTab] = useState(location.pathname)
  const activeTab = (path) => {
    setCurrentTab(path)
  }
  return (
    <Fragment>
      <div className='lowerheader-main'>
        <div className='lowerheader-menu-container'>
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