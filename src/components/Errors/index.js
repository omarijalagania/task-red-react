import React from 'react'
import './Errors.css'
const Errors = ({ message, margin }) => {
  return (
    <div
      className='errors'
      style={{
        color: 'red',
        fontSize: '13px',
        marginBottom: margin,
      }}
    >
      {message}
    </div>
  )
}

export default Errors
