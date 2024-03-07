import React from 'react'
import { Link } from 'react-router-dom'

const SitebarMenu = ({menu}) => {
  return (
    <Link to={menu.url}>
    <div className={menu.isActive ? `sidebar_menu sidebar_Active` :  `sidebar_menu`}>
        <span className='icon'><menu.icon/></span>
        <span className='title'>{menu.title}</span>
    </div>
    </Link>
  )
}

export default SitebarMenu