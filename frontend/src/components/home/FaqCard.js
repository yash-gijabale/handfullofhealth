import React, { useRef, useState } from 'react'
import { FaPlus } from "react-icons/fa6";

const FaqCard = ({ faqs }) => {

    const faq = useRef('hello')

    const [toggle, setToggle] = useState(false)

    const handleClick = (e, id) => {
        const ans = document.getElementById(id)
        setToggle(!toggle)
        if (toggle) {
            ans.classList.add('faq-enable')
            ans.classList.remove('faq-disabled')

            e.target.classList.add('faq-icon-roted')
            e.target.classList.remove('faq-icon-reverse')
        } else {
            ans.classList.add('faq-disabled')
            ans.classList.remove('faq-enable')

            e.target.classList.remove('faq-icon-roted')
            e.target.classList.add('faq-icon-reverse')



        }

    }

    return (
        <div ref={faq} className='faq-card'>
            <div className='faq-question-box'>
                <span>{faqs.faqTitle}</span>
                <span className='faq-icon' onClick={(e) => handleClick(e, faqs._id)}><FaPlus /></span>
            </div>
            <div id={faqs._id} className='faq-ans-box faq-disabled'>
                <div className='faq-ans' >
                    <span>{faqs.faqAnswer}</span>
                </div>

            </div>

        </div>
    )
}

export default FaqCard