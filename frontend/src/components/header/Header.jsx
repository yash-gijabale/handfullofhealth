import React, { Fragment } from 'react'
import UpperHeader from './UpperHeader'
import LowerHeader from './LowerHeader'

const Header = () => {
    return (
        <Fragment>
            <div className='header'>
                <UpperHeader />
                <LowerHeader />
            </div>
        </Fragment>
    )
}

export default Header