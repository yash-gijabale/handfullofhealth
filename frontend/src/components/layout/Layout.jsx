import React, { Fragment } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    )
}

export default Layout