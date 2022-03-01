import React from 'react'

const Errors = ({ message, margin }) => {
  return (
    <div style={{ color: 'red', fontSize: '10px', marginBottom: margin }}>
      {message}
    </div>
  )
}

export default Errors
