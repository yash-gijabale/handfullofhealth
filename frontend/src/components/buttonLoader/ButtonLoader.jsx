import React from 'react'
import './buttonLoader.css'

const ButtonLoader = ({color}) => {
  return (
    <div className={`btn-loader ${color}`}></div>
  )
}

export default ButtonLoader