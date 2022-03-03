import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <button
      className='btn__global'
      onClick={props.onClick}
      className={props.className}
    >
      {props.title}
    </button>
  )
}

export default Button
