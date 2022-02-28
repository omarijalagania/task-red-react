import React from 'react'
import './TextField.css'
const TextField = (props) => {
  return (
    <>
      <div className='textField'>
        <label
          className='textField__label'
          required
          htmlFor={props.label.toLowerCase()}
        >
          {props.label}
        </label>
        <div>
          <input
            style={{ width: '300px' }}
            onChange={(e) => props.onChange(e.target.value)}
            className='textField__input'
            type={props.type}
            placeholder={props.placeholder}
            required
            id={props.label.toLowerCase()}
          />
        </div>
      </div>
    </>
  )
}

export default TextField
