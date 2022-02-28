import React from 'react'
import './TextField.css'
const TextField = (props) => {
  return (
    <>
      <div className='textField'>
        <div>
          <input
            style={{ width: '300px' }}
            onChange={(e) => props.onChange(e.target.value)}
            className='textField__input'
            type={props.type}
            placeholder={props.placeholder}
            required
          />
        </div>
      </div>
    </>
  )
}

export default TextField
