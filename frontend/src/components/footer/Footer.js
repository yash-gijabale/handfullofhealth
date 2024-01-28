import React from 'react'
import logo from '../../images/logo2.svg'

import './footer.css'
const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer-container'>
                <div className='section-1'>
                    <img src={logo} />
                    <span className='address'>
                        Powered by Handful of Health Pvt. Ltd.
                        hello@handfulofhealth.in
                        GST# 27AAGCH1449B1ZW
                        FSSAI# 11522998000380
                        CIN U15400MH2022PTC375609
                    </span>
                    <span className='need-help'>Need help</span>
                </div>
                <div className='section-2'>
                    <div className='footerlink footerlink-1'>
                        <span className='footerlink-title'>Top Brand</span>
                        <div className='footerLinks'>
                            <a href='#'>Kracknuts</a>
                            <a href='#'>Fruttons</a>
                            <a href='#'>King Solomon</a>
                            <a href='#'>Royal Delight</a>
                            <a href='#'>Carnival</a>
                            <a href='#'>Al Barakah</a>
                        </div>
                    </div>
                    <div className='footerlink footerlink-2'>
                        <span className='footerlink-title'>Accounts</span>
                        <div className='footerLinks'>
                            <a href='#'>My Account</a>
                            <a href='#'>Orders</a>
                            <a href='#'>FAQ’s</a>
                            <a href='#'>Shiping Policy</a>
                            <a href='#'>Contact us</a>
                        </div>
                    </div>
                    <div className='footerlink footerlink-3'>
                        <span className='footerlink-title'>Quick Links</span>
                        <div className='footerLinks'>
                            <a href='#'>Wishlist</a>
                            <a href='#'>Blogs</a>
                            <a href='#'>Contact</a>
                            <a href='#'>Terms & Conditions</a>
                            <a href='#'>Refund Policy</a>
                            <a href='#'>Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <div className='section-3'>
                    <div>
                        <span className='title'>Join Our Newsletter</span>
                    </div>
                    <div className='footer-form'>
                        <input type='email' placeholder='Enter your email here' className='footer-email' />
                        <button className='footer-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='copyrigth'>
                <span>All rights reserved to Handful Of Health <a href='https://handfulofhealth.in/' target='_blank'>handfulofhealth.in</a></span>
            </div>

        </div>
    )
}

export default Footer