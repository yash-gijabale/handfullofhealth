import React from 'react'
import { Rating } from 'react-simple-star-rating'
import './product.css'
const ProductRatingCard = () => {
    return (
        <div className='product-rating-card'>
            <div className='user-info'>
                <span>User Name</span>
                <Rating size={20} initialValue={3.5} iconsCount={5} allowFraction={true} readonly={true} />
            </div>
            <div className='comment'>
                <span>lum, neque vero dolore explicabo, minus ullam consequatur ea fugiat eveniet totam provident cum accusamus.</span>
            </div>

        </div>
    )
}

export default ProductRatingCard