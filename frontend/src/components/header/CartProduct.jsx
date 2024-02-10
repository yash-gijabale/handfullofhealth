import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/productAction';
const CartProduct = ({product}) => {

  const dispatch = useDispatch()
  const handleRemoveItemFromCart = (id) =>{
      dispatch(removeFromCart(id))
  }

  return (
    <div className='cart-product'>
      <div className='cart-product-img'>
        <img src={product.productImage} alt="product" />
      </div>
      <div className='cart-product-info'>
        <div className='product-info'>
          <span className='product-name'>{product.productName.substr(0,20)}...</span>
          <span className='product-price'>Rs. {product.productPrice}</span>
          <span className='product-price'>Qty. {product.productQty}</span>
        </div>
        <MdDeleteForever className='product-delete' onClick={()=>handleRemoveItemFromCart(product.productId)} />
      </div>

    </div>
  )
}

export default CartProduct