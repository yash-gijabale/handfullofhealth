import React from 'react'
import './adminComponent.css'
const AnalyticCard = ({data}) => {
  return (
    <div className={`analytic_card ${data.newClass}`}>
      <div className='analytic_card_info'>
        <span className='title'>{data.title}</span>
        <span className='number'>{data.count}</span>
        <span className='sub_title'>
          <b>+{data.grouth}%</b> than last week
        </span>
      </div>
      <div className='analytic_card_icon'>
        <img src={data.icon} />
      </div>
    </div>
  )
}

export default AnalyticCard