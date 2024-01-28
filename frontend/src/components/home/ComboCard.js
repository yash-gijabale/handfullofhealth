import React from 'react'
import './homeComponent.css'
import bannerp1 from '../../images/banner-p-1.png'
import ComboSectionProductCard from './ComboSectionProductCard'

const ComboCard = ({title, bgColor1, bgColor2}) => {
  return (
    <div className='combo-section-card'>
      <div className='combo-card-header' style={{backgroundColor: bgColor1, borderColor: bgColor1}}>
        <div className='combo-card-title'>
          <h3>{title}</h3>
        </div>
        <div className='combo-card-img'>
          <div className='combo-card-img-bg' style={{backgroundColor: bgColor2}}>
            <img src={bannerp1} />
          </div>
        </div>
      </div>
      <div className='combo-card-body'>
        <ComboSectionProductCard />
        <ComboSectionProductCard />
        <ComboSectionProductCard />
        <ComboSectionProductCard />
        <ComboSectionProductCard />
      </div>
    </div>
  )
}

export default ComboCard