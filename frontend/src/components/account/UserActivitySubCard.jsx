import React from 'react'
import './userAccount.css'
const UserActivitySubCard = ({info}) => {
  return (
    <div className='user-activity-sub-card'>
        <div className='activity-icon'>
            <img src={info.icon} alt="icon" />
        </div>
        <div className='activity-info'>
            <h4>{info.title}</h4>
            <h4>{info.count}</h4>
        </div>
    </div>
  )
}

export default UserActivitySubCard