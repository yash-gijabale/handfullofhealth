import React from 'react'
import bannerp2 from '../../images/banner-p-2.png'
import { BsCart3 } from "react-icons/bs";

const NewArrivalCard = ({ product }) => {
    return (
        <div className='best-seling-product-card new-arrival-product-cart'>
            <div className='new-arrival-slide-img-box'>
                <img src={product.images[0].secure_url} alt='product' />
            </div>
            <div className='slide-info'>
                <div className='info-1'>
                    {product.name}
                </div>
                <div className='info-2'>
                    <div className='product-price'>Rs. {product.price}</div>
                    <div className='add-to-cart'><BsCart3 /></div>
                </div>
            </div>
        </div>
    )
}

export default NewArrivalCard