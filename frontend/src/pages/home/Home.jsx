import React, { Fragment, useRef } from 'react'
// import banner1 from '../../images/banner1.svg'
// import banner2 from '../../images/banner4.svg'
// import banner3 from '../../images/banner2.svg'
// import banner4 from '../../images/banner3.svg'
import bannerp1 from '../../images/banner-p-1.png'
import bannerp2 from '../../images/banner-p-2.png'
import bannerp3 from '../../images/bannerp3.png'
import bannerp4 from '../../images/bannerp4.png'
import offer1 from '../../images/offer1.png'
import offer2 from '../../images/offer2.png'
import offer3 from '../../images/offer3.png'
import { CiFaceSmile } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { PiLeaf } from "react-icons/pi";

import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

import './home.css'
import { Link } from 'react-router-dom'


import Feature from '../../components/home/Feature'
import ShopByCategoryCard from '../../components/home/ShopByCategoryCard'
import BestSelingProductCard from '../../components/home/BestSelingProductCard'
import NewArrivalCard from '../../components/home/NewArrivalCard'
import ComboCard from '../../components/home/ComboCard'
import TestimonialCard from '../../components/home/TestimonialCard'
import FaqCard from '../../components/home/FaqCard'

const Home = () => {

    const slider = useRef(null)
    const slide = useRef(null)
    const screenSize = window.screen.width
    const handleNext = (e) => {
        console.log(e.target.id)
        console.log(screenSize)
        if (e.target.id === 'next') {
            if (screenSize < 500) {
                slider.current.scrollLeft += (slide.current.offsetWidth + 50) * 1
            } else {
                slider.current.scrollLeft += (slide.current.offsetWidth) * 3

            }


        } else {

            if (screenSize < 500) {
                slider.current.scrollLeft -= (slide.current.offsetWidth + 50) * 1
            } else {
                slider.current.scrollLeft -= (slide.current.offsetWidth) * 3

            }


        }
    }

    const bestSelingSlider = useRef(null)
    const bestSelingSlide = useRef(null)
    const bestSelingHandleNext = (e) => {
        console.log(e.target.id)
        if (e.target.id === 'next') {
            if (screenSize < 500) {
                bestSelingSlider.current.scrollLeft += (bestSelingSlide.current.offsetWidth) * 1

            } else {
                bestSelingSlider.current.scrollLeft += (bestSelingSlide.current.offsetWidth) * 3
            }


        } else {
            if (screenSize < 500) {
                bestSelingSlider.current.scrollLeft -= (bestSelingSlide.current.offsetWidth) * 1

            } else {
                bestSelingSlider.current.scrollLeft -= (bestSelingSlide.current.offsetWidth) * 3
            }

        }
    }


    const newArrivalSlider = useRef(null)
    const newArrivalSlide = useRef(null)
    const newArrivalHandleNext = (e) => {
        console.log(e.target.id)
        if (e.target.id === 'next') {
            newArrivalSlider.current.scrollLeft += (newArrivalSlide.current.offsetWidth) * 3


        } else {
            newArrivalSlider.current.scrollLeft -= (newArrivalSlide.current.offsetWidth) * 3

        }
    }

    return (
        <Fragment>
            <div className='home-main'>
                <div className='banner-main'>
                    <div className='banner-container'>
                        <div className='banner-1'>
                            <div className='banner1-info'>
                                <h3>Carnival Dates</h3>
                                <span>Happy weekend 25% off</span>
                                <button className='shop-now-btn'>Shop now</button>
                            </div>
                            <div className='banner1-img'>
                                <img src={bannerp1} alt="product" />
                            </div>
                            {/* <img src={banner1} alt="" className='banner1-bg' /> */}
                        </div>
                        <div className='banner-2'>
                            <div className='banner2-info'>
                                <h3>Healthy Crack Nuts 10% off</h3>
                            </div>
                            <div className='banner2-img'>
                                <img src={bannerp2} alt="product" />
                                <Link to={'#'}>Shop now</Link>
                            </div>
                            {/* <img src={banner2} alt="" className='banner2-bg' /> */}

                        </div>
                        <div className='banner-3-box'>
                            <div className='banner-3-1'>
                                {/* <img src={banner3} alt="" className='banner3-bg' /> */}
                                <div className='banner3-info'>
                                    <span>Explore wide range of</span>
                                    <h3> Fresh Cereal</h3>
                                    <Link to={'#'}>Shop now</Link>
                                </div>
                                <div className='banner3-img'>
                                    <img src={bannerp3} alt="product" />
                                </div>
                            </div>
                            <div className='banner-3-2'>
                                <div className='banner4-info'>
                                    <h3>15%off </h3>
                                    <span>Oriental Dates</span>
                                    <Link to={'#'}>Shop now</Link>
                                </div>
                                <div className='banner4-img'>
                                    <img src={bannerp4} alt="product" />
                                </div>
                                {/* <img src={banner4} alt="" className='banner4-bg' /> */}

                            </div>

                        </div>
                    </div>
                </div>

                <div className='home-feature-main'>
                    <div className='home-feature-container'>
                        <Feature icon={<CiFaceSmile />} title={"1000+ Satisfied customers"} />
                        <Feature icon={<GoHeart />} title={"500+Reviews from happy customers"} />
                        <Feature icon={<PiLeaf />} title={"100% Natural only and non GMO"} />
                    </div>
                </div>

                <div className='shop-by-category-main'>
                    <div className='shop-by-category-container'>
                        <div className='shop-by-category-title'>
                            <h3>Shop By Category</h3>
                        </div>
                        <div className='carosel'>
                            <BsArrowLeftCircle id='prev' onClick={(e) => handleNext(e)} ></BsArrowLeftCircle>
                            <div className='shop-by-category-slider' id='slider' ref={slider}>
                                <div className='slide' ref={slide}>
                                    <ShopByCategoryCard title={'Nuts'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp2} />
                                </div>
                                <div className='slide' ref={slide}>
                                    <ShopByCategoryCard title={'Dry Fruits'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp1} />

                                </div>
                                <div className='slide' ref={slide}>
                                    <ShopByCategoryCard title={'Snacks'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp3} />

                                </div>
                                <div className='slide' ref={slide}>
                                    <ShopByCategoryCard title={'Dates'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp4} />

                                </div>
                                <div className='slide' ref={slide}>
                                    <ShopByCategoryCard title={'Carnivls'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp2} />

                                </div>


                            </div>
                            <BsArrowRightCircle id='next' onClick={(e) => handleNext(e)}>next</BsArrowRightCircle>
                        </div>
                    </div>
                </div>


                <div className='best-sealing-product-main'>
                    <div className='best-sealing-product-container'>
                        <div className='shop-by-category-title best-sealing-product-title'>
                            <h3>Best Sealing Products</h3>
                        </div>
                        <div className='carosel'>
                            <BsArrowLeftCircle id='prev' onClick={(e) => bestSelingHandleNext(e)} ></BsArrowLeftCircle>
                            <div className='best-sealing-product-slider' id='slider' ref={bestSelingSlider}>
                                <div className='best-sealing-product-slide' ref={bestSelingSlide}>
                                    <BestSelingProductCard title={'Nuts'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp2} />
                                </div>
                                <div className='best-sealing-product-slide' ref={bestSelingSlide}>
                                    <BestSelingProductCard title={'Dry Fruits'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp1} />

                                </div>
                                <div className='best-sealing-product-slide' ref={bestSelingSlide}>
                                    <BestSelingProductCard title={'Snacks'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp3} />

                                </div>
                                <div className='best-sealing-product-slide' ref={bestSelingSlide}>
                                    <BestSelingProductCard title={'Dates'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp4} />

                                </div>
                                <div className='best-sealing-product-slide' ref={bestSelingSlide}>
                                    <BestSelingProductCard title={'Carnivls'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp2} />

                                </div>
                                <div className='best-sealing-product-slide' ref={bestSelingSlide}>
                                    <BestSelingProductCard title={'Carnivls'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp2} />

                                </div>

                            </div>
                            <BsArrowRightCircle id='next' onClick={(e) => bestSelingHandleNext(e)}>next</BsArrowRightCircle>
                        </div>
                    </div>
                </div>


                <div className='home-offers-main'>
                    <h3 className='home-offers-title'>Offers</h3>
                    <div className='home-offers-container'>
                        <div className='offer-card' style={{ background: `linear-gradient(90deg, #D7904DD9 ,#D9D9D900), url(${offer1})` }}>
                            <div className='offer-card-info'>
                                <span className='offer-card-disc'>Introductory offer</span>
                                <h3 className='offer-card-title'>FLAT 50% OFF</h3>
                                <a href="#">View all</a>
                            </div>
                        </div>
                        <div className='offer-card' style={{ background: `linear-gradient(90deg, #E2EEBFD9 ,#D9D9D900), url(${offer3})` }}>
                            <div className='offer-card-info'>
                                <span className='offer-card-disc'>The season of giving just got better!</span>
                                <h3 className='offer-card-title'>20% off</h3>
                                <a href="#">View all</a>
                            </div>
                        </div>
                        <div className='offer-card' style={{ background: `linear-gradient(90deg, #E1D13BD9 ,#4A430100), url(${offer2})` }}>
                            <div className='offer-card-info card3'>
                                <h3 className='offer-card-title'>Start gifting happiness today</h3>
                                <a href="#">View all</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='best-sealing-product-main'>
                    <div className='best-sealing-product-container'>
                        <div className='shop-by-category-title best-sealing-product-title'>
                            <h3>NEW ARRIVALS</h3>
                        </div>
                        <div className='carosel'>
                            <BsArrowLeftCircle id='prev' onClick={(e) => newArrivalHandleNext(e)} ></BsArrowLeftCircle>
                            <div className='best-sealing-product-slider' id='slider' ref={newArrivalSlider}>
                                <div className='newArrival-product-slide' ref={newArrivalSlide}>
                                    <NewArrivalCard title={'Nuts'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp2} />
                                </div>
                                <div className='newArrival-product-slide' ref={newArrivalSlide}>
                                    <NewArrivalCard title={'Dry Fruits'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp1} />

                                </div>
                                <div className='newArrival-product-slide' ref={newArrivalSlide}>
                                    <NewArrivalCard title={'Snacks'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp3} />

                                </div>
                                <div className='newArrival-product-slide' ref={newArrivalSlide}>
                                    <NewArrivalCard title={'Dates'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp4} />

                                </div>
                                <div className='newArrival-product-slide' ref={newArrivalSlide}>
                                    <NewArrivalCard title={'Carnivls'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp2} />

                                </div>
                                <div className='newArrival-product-slide' ref={newArrivalSlide}>
                                    <NewArrivalCard title={'Carnivls'} discription={'Krack Nut Coated Peanuts Pudina Patakha -160gm'} productImage={bannerp2} />

                                </div>

                            </div>
                            <BsArrowRightCircle id='next' onClick={(e) => newArrivalHandleNext(e)}>next</BsArrowRightCircle>
                        </div>
                    </div>
                </div>


                <div className='home-mini-banner-main'>
                    <div className='home-mini-banner-container'>
                        <div className='home-mini-banner-info'>
                            <h3>30% Off on all the Combo Products</h3>
                        </div>
                        <div className='home-mini-banner-img'>
                            <img src={bannerp1} alt="" />
                            <img src={bannerp2} alt="" />
                            <img src={bannerp4} alt="" />
                        </div>
                    </div>
                </div>




                <div className='combo-section-main'>
                    <div className='combo-section-title'><h3>COMBO SECTION</h3></div>
                    <div className='combo-section-container'>
                        <ComboCard title={'Snacks'} bgColor1={'#40A35B'} bgColor2={'#C5E8CA'} />
                        <ComboCard title={'Dry Fruits'} bgColor1={'#52A9A4'} bgColor2={'#AEDEDB'} />
                        <ComboCard title={'Nuts'} bgColor1={'#F98F6E'} bgColor2={'#EFC0B1'} />
                        <ComboCard title={'Royal Delight'} bgColor1={'#DCBC60'} bgColor2={'#E9D987'} />
                    </div>
                </div>



                <div className='testimonial-main'>
                    <div className='testimonial-title'>
                        <h3>TESTIMONIALS</h3>
                    </div>
                    <div className='testimonial-container'>
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                    </div>
                </div>



                <div className='testimonial-main faq-main'>
                    <div className='testimonial-title'>
                        <h3>FAQ</h3>
                    </div>
                    <div className='faq-container'>
                        <FaqCard id={'faq-1'} />
                        <FaqCard id={'faq-2'} />
                        <FaqCard id={'faq-3'} />
                        <FaqCard id={'faq-4'} />
                        <FaqCard id={'faq-5'} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home