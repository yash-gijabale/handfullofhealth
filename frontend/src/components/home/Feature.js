import React from 'react'
import './homeComponent.css'


const Feature = ({icon, title}) => {
  return (
    <div className='home-feature-box'>
        <div className='feature-img'>
            <span>{icon}</span>
        </div>
        <div className='feature-title'>
            <span>{title}</span>
        </div>
    </div>
  )
}

export default Feature