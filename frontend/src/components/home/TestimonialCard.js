import React from 'react'
import './homeComponent.css'

const TestimonialCard = () => {
    return (
        <div className='testmonial-card'>
            <div className='testimonial-card-header'>
                <div className='testimonial-card-user'>
                    <div className='user-avatar'></div>
                </div>
                <div className='testimonial-card-info'>
                    <span>
                        ~ Saturo Gojo
                    </span>
                </div>
            </div>
            <div className='testimonial-body'>
                <span>I absolutely love healthy nuts and snacks! They are a great way to satisfy my cravings for something crunchy and savory without derailing my healthy eating goals. I especially
                    appreciate the variety of options available, from roasted almonds and cashews to trail mixes and dried fruit.</span>
            </div>
        </div>
    )
}

export default TestimonialCard