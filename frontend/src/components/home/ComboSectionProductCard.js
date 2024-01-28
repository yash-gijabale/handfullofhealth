import React from 'react'
import bannerp1 from '../../images/banner-p-1.png'
import { BsCart3 } from "react-icons/bs";
import './homeComponent.css'



const ComboSectionProductCard = () => {
  return (
    <div className='combo-section-product-card'>
        <div className='combo-section-product-card-img'>
            <img src={bannerp1} />
        </div>
        <div className='combo-section-product-card-info'>
            <span>Krack Nut Coated Peanuts Pudina Patakha -160gm</span>
            <div>
                <span>Rs. 75</span>
                <span className="add-to-cart-mini"><BsCart3 /></span>
            </div>
        </div>
    </div>
  )
}

export default ComboSectionProductCard