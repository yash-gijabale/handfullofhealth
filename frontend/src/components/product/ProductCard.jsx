import React from 'react'
import imag from '../../images/banner-p-1.png'
import './product.css'
import { BsCart3 } from "react-icons/bs";
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCard } from '../../actions/productAction';

const ProductCard = ({product}) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const handelAddToCard = (id) =>{
      dispatch(addToCard(id, 1))
  }

  return (
    <div className='product-card'>
      <div className='product-img-main' onClick={() => navigate(`/product/${product._id}`)}>
        <img src={product.images[0].secure_url} alt="produt" />
      </div>
      <div className='product-info-main'>
        <div className='info-1'>
          <Link to={`/product/${product._id}`}>
          {product.name}
          </Link>
        </div>
        <div className='info-2'>
          <div className='product-price'>Rs. {product.price}.00</div>
          <div className='add-to-cart' onClick={() => handelAddToCard(product._id)}><BsCart3 /></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard