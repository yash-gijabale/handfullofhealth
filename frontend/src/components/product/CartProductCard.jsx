import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCard, removeFromCart } from '../../actions/productAction';

const CartProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const IncreseQuantity = (id) => {
        dispatch(addToCard(id, 1))
    }

    const reduceQuantity = (id) => {
        if (product.productQty > 1) {
            dispatch(addToCard(id, 1, true))
        }

    }

    const hanldeRemove = (id) =>{
        dispatch(removeFromCart(id))
    }

    return (
        <div className='cart-product-card'>
            <div className='cart-product-img'>
                <img src={product.productImage} alt="product" srcset="" />
            </div>
            <div className='cart-product-info'>
                <span className='product-name'>
                    {product.productName}
                </span>
                <span className='product-info'>
                    Rs. {product.productMrp}
                </span>
                <span className='product-info'>
                    Qty. {product.productQty}
                </span>

            </div>
            <div className='cart-product-qty'>
                <div className='qty-update'>
                    <span className='qty-update-btn' onClick={() => reduceQuantity(product.productId)}><FaMinus /></span>
                    <span>{product.productQty}</span>
                    <span className='qty-update-btn' onClick={() => IncreseQuantity(product.productId)}><FaPlus /></span>
                </div>
            </div>

            <div className='cart-product-price'>
                <span>Rs. {product.productMrp * product.productQty}.00</span>
                <MdDeleteForever className='delete-icon' onClick={() => hanldeRemove(product.productId)} />
            </div>

        </div>
    )
}

export default CartProductCard