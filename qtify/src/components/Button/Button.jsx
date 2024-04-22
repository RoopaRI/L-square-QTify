import React from 'react'
import "./Button.module.css";

const Button = ({text}) => {
  return (
    <button className='navButton'>{text}</button>
  )
}

export default Button