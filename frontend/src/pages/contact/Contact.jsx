import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './contact.css'
import contactBanner from '../../images/contactBanner.png'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { SiWebmoney } from "react-icons/si";

const Contact = () => {

    const [activeBtn, setActiveBtn] = useState(1)
    const handelActiveBtn = (btnType) =>{
        setActiveBtn(btnType)
    }

    return (
        <div className='contact-main'>
            <div className='contact-banner-main' style={{ background: `url(${contactBanner})` }}>
                <h3>Contact Us</h3>
                <span><Link to={'/'}>Home</Link> / <Link to={'/contact'}>Contact us</Link></span>
            </div>
            <div className='contact-container'>
                <div className='contact-title'>
                    <h3>get in touch with us</h3>
                </div>

                <div className='contact-box'>
                    <div className='contact-form'>
                        <div className='form-btn-box'>
                            <button className={ activeBtn === 1 ? 'contact-form-btn contact-btn-active' : 'contact-form-btn'} onClick={() =>handelActiveBtn(1)}>General Enquiry</button>
                            <button className={ activeBtn === 2 ? 'contact-form-btn contact-btn-active' : 'contact-form-btn'} onClick={() =>handelActiveBtn(2)}>Franchise Enquire</button>
                            <button className={ activeBtn === 3 ? 'contact-form-btn contact-btn-active' : 'contact-form-btn'} onClick={() =>handelActiveBtn(3)} >Retail Enquiry</button>
                        </div>
                        <div className='form-box-1'>
                            <input type='text' placeholder='Name' className='contact-input' />
                            <input type='text' placeholder='Phone' className='contact-input' />
                        </div>

                        <div className='form-box-2'>
                            <input type='email' placeholder='Email' className='contact-input' />
                            <input type='checkbox' /> <label>Bulk Orders</label>
                            <input type='checkbox' /> <label>Corporate Gifting</label>
                        </div>

                        <div className='form-box-3'>
                            <textarea placeholder='Write comments here' className='contact-input'></textarea>
                        </div>

                        <button className='contact-form-submit-btn'>Lets Talk</button>
                    </div>
                    <div className='contact-info'>
                        <h3>Do You Have Any Questions?</h3>
                        <div className='contact-info-1'>
                            <FaLocationDot />
                            <span>Handful of Health - Vile Parle, Shop No: 19, Ground Floor, Wing - D, Shyam Kamal Co-operative Housing Society LTD, A grawal Market, Vile Parle(East), Mumbai, 400057,Mumbai, Maharashtra 400057, India.</span>
                        </div>

                        <div className='contact-info-1'>
                            <FaPhoneSquareAlt />
                            <span>+91 9820218800</span>
                        </div>

                        <div className='contact-info-1'>
                            <IoMdMailOpen />
                            <span>borivali@handfulofhealth.in</span>

                        </div>

                        <div className='contact-info-1'>
                            <SiWebmoney />
                            <span>handfulofhealth.in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact