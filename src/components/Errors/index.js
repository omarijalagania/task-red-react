import React from 'react'

const Errors = ({ message, margin }) => {
  return (
    <div style={{ color: 'red', fontSize: '13px', marginBottom: margin }}>
      {message}
    </div>
  )
}

export default Errors
