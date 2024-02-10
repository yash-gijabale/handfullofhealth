import React from 'react'
import './homeComponent.css'

const TestimonialCard = ({data}) => {
    console.log(data)
    return (
        <div className='testmonial-card'>
            <div className='testimonial-card-header'>
                <div className='testimonial-card-user'>
                    <div className='user-avatar'></div>
                </div>
                <div className='testimonial-card-info'>
                    <span>
                        ~ {data.user}
                    </span>
                </div>
            </div>
            <div className='testimonial-body'>
                <span>{data.testimonial}</span>
            </div>
        </div>
    )
}

export default TestimonialCard