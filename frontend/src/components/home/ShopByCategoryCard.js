import React, { Fragment } from 'react'
import bannerp2 from '../../images/banner-p-2.png'
import './homeComponent.css'


const ShopByCategoryCard = ({ title, discription, productImage }) => {
    return (
        <div className='shop-by-category-slide'>
            <div className='slide-info'>
                <h3 className='slide-title'>{title}</h3>
                <span className='slide-disc'>{discription}</span>
            </div>
            <div className='slide-img-box'>
                <div className='img-back-circle'>
                    <div className='half-circle'></div>
                    <img src={productImage} alt='product' />
                </div>
            </div>
        </div>
    )
}


export const ShopByCategoryCardLoader = () => {
    return (
        <Fragment>

            <div className='shop-by-category-slide shop-by-category-slide-loader'>

            </div>
            <div className='shop-by-category-slide shop-by-category-slide-loader'>

            </div>

            <div className='shop-by-category-slide shop-by-category-slide-loader'>

            </div>

            <div className='shop-by-category-slide shop-by-category-slide-loader'>

            </div>
        </Fragment>


    )
}

export default ShopByCategoryCard