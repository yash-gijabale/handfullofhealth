import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './productDetails.css'
import bannerp1 from '../../images/banner-p-1.png'
import bannerp2 from '../../images/banner-p-2.png'
import bannerp3 from '../../images/bannerp3.png'
import bannerp4 from '../../images/bannerp4.png'
import ad from '../../images/ads.png'
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


import { Rating } from 'react-simple-star-rating'
import ProductRatingCard from '../../components/product/ProductRatingCard'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../actions/productAction'
const ProductDetails = () => {

  const slider = useRef(null)
  const slide = useRef(null)

  const handelScroll = (e) => {
    console.log(e.target.id)
    if (e.target.id === 'next') {
      slider.current.scrollLeft += slide.current.offsetWidth * 4

    } else if (e.target.id === 'prev') {
      slider.current.scrollLeft -= slide.current.offsetWidth * 4
    }

  }


  let [productQty, setProductQty] = useState(1)
  const handelQty = (e) => {
    if (e.target.id === 'qty-add') {
      productQty += 1
    } else {
      if (productQty > 1) {
        productQty -= 1
      }
    }
    setProductQty(productQty)
  }


  let [tabShow, setTabShow] = useState('discription')

  const toggelTab = (id) => {
    setTabShow(id)
  }

  const handleRating = (rate) => {
    console.log(rate)
  }

  const [productImage, setProductImage] = useState('')
  const changeProductImage = (img) => {
    setProductImage(img)
  }

  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [category, setCategory] = useState('')
  useEffect(() => {
    const getProduct = async () => {
      let { data } = await axios.get(`/api/v1/product/${id}`)
      setProduct(data.result.product)
      setProductImage(data.result.product.images[0].secure_url)

      setCategory(data.result.categoryName)
    }
    getProduct()
  }, [])

  const dispatch = useDispatch()
  const handleAddToCart = (id) =>{
      dispatch(addToCard(id, productQty))
  }


  return (
    product._id  ?
      <div className='product-detaisls-main'>
        <div className='product-details-container'>
          <div className='product-details-1'>
            <div className='product-img-box'>
              <div className='product-img-container'>
                <img src={productImage} alt="product" />
              </div>
              <div className='product-detail-slider-box'>
                <BsArrowLeftCircle id='prev' onClick={(e) => handelScroll(e)} />
                <div ref={slider} className='product-detail-img-slider'>
                  {
                    product.images.map(image => (
                      <div ref={slide} className={productImage == image.secure_url ? 'product-slide product-active' : 'product-slide'} onClick={() => changeProductImage(image.secure_url)}>
                        <img src={image.secure_url} />
                      </div>
                    ))
                  }

                </div>
                <BsArrowRightCircle id='next' onClick={(e) => handelScroll(e)} />
              </div>
            </div>
            <div className='product-info-box'>
              <div className='product-info-title-box'>
                <div className='product-info-title'>
                  <h3>{product.name}</h3>
                </div>
                <div className='product-info-rating'>
                  <Rating initialValue={product.rating} iconsCount={5} allowFraction={true} onClick={handleRating} readonly={true} />
                </div>
                <div className='product-info-price'>
                  <span>Rs. {Math.floor(product.price)}</span>
                </div>
                <hr></hr>
              </div>

              <div className='product-property-info'>
                <div className='product-weigth'>
                  <span>Weigth</span>
                  <input type='text' value={'160g'} readOnly />
                </div>

                <div className='product-category'>
                  <span>Category</span>
                  <input type='text' value={category ? category : ''} readOnly />
                </div>

                <div className='product-quantity'>
                  <span>Quantity</span>
                  <div className='product-qty-btns'>
                    <button className='product-qty-btn' id='qty-remove' onClick={(e) => handelQty(e)}><IoIosArrowDown /></button>
                    <input type='text' value={productQty} readOnly />
                    <button className='product-qty-btn' id='qty-add' onClick={(e) => handelQty(e)}><IoIosArrowUp /></button>
                  </div>
                </div>
              </div>

              <div className='product-detail-btn-box'>
                <button className='add-to-cart-btn' onClick={()=>handleAddToCart(product._id)}>ADD TO CART</button>
                <button className='add-to-cart-btn by-it-now-btn'>BY IT NOW</button>
              </div>

              <div className='product-detail-btn-box product-detail-btn-box-2'>
                <button className='add-to-wishlist-btn'>ADD TO WISHLIST</button>
                <button className='add-to-wishlist-btn'>ADD REVIEW</button>
              </div>
            </div>
          </div>
          <div className='product-extra-container'>
            <div className='product-details-ad-box'>
              <div className='poduct-add' style={{ background: `linear-gradient(90deg, #1e1e1f52 ,#1e1e1f52) , url(${ad})` }}>
                <span>Introductory offer</span>
                <h3>FLAT 50% Off</h3>
              </div>
            </div>

            <div className='product-details-ad-box'>
              <div className='poduct-add product-offer-info'>
                <div className='offer-info'>
                  <span>Free Shipping apply to all order over $100</span>
                </div>

                <div className='offer-info'>
                  <span>Free Shipping apply to all order over $100</span>
                </div>

                <div className='offer-info'>
                  <span>Free Shipping apply to all order over $100</span>
                </div>
              </div>
            </div>



          </div>
        </div>
        <div className='product-discription-main'>
          <div className='product-discription-container'>
            <div className='tab-container'>
              <div className={tabShow === 'discription' ? 'tab tab-active' : 'tab'} onClick={() => toggelTab('discription')}>
                <span>Discription</span>
              </div>
              <div className={tabShow === 'review' ? 'tab tab-active' : 'tab'} onClick={() => toggelTab('review')}>
                <span>Review</span>
              </div>
              <div className={tabShow === 'addition-info' ? 'tab tab-active' : 'tab'} onClick={() => toggelTab('addition-info')}>
                <span>Addition information</span>
              </div>
            </div>

            <div className={tabShow === 'discription' ? 'tab-content ' : 'tab-content tab-hide'} id='discription'>
              <p>{product.discription}</p>
            </div>

            <div className={tabShow === 'review' ? 'tab-content  ' : 'tab-content tab-hide'} id='review'>
              <ProductRatingCard />
              <ProductRatingCard />
              <ProductRatingCard />
              <ProductRatingCard />
              <ProductRatingCard />
            </div>

            <div className={tabShow === 'addition-info' ? 'tab-content ' : 'tab-content tab-hide'} id='addition-info'>
              <p>Addition info</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, illum, sequi cupiditate dolorum tempore harum dicta ab ipsa neque in praesentium delectus quaerat esse vel vero? Incidunt sint sequi amet.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quibusdam porro. Commodi magni voluptatem, quo similique quia libero voluptate animi atque maxime, repudiandae, reiciendis error ullam consectetur. Nam, facere quas?
            </div>
          </div>
        </div>

      </div>
      : ''
  )
}

export default ProductDetails