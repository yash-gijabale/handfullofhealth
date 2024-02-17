import React from 'react'

const CheckoutProductCard = ({ product }) => {

    return (
        <div className='checkout-product-cart'>
            <p className='price-badge'>{product.productQty}</p>
            <div className='product-info'>
                <img src={product.productImage} />
                <span>{product.productName}</span>
            </div>
            <div className='product-price'><span>Rs. {product.productPrice}</span></div>
        </div>
    )
}

export default CheckoutProductCard