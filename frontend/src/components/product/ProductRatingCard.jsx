import React from 'react'
import { Rating } from 'react-simple-star-rating'
import './product.css'
const ProductRatingCard = ({review}) => {
    return (
        <div className='product-rating-card'>
            <div className='user-info'>
                <span>{review.name}</span>
                <Rating size={20} initialValue={review.rating} iconsCount={5} allowFraction={true} readonly={true} />
            </div>
            <div className='comment'>
                <span>{review.comment}</span>
            </div>

        </div>
    )
}

export default ProductRatingCard