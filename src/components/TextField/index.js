import React from 'react'
import './TextField.css'
const TextField = (props) => {
  return (
    <>
      <div className='textField'>
        <div>
          <input
            style={{ width: props.width }}
            onChange={(e) => props.onChange(e.target.value)}
            className={props.className}
            type={props.type}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            required
            multiple={props.size}
          />
        </div>
      </div>
    </>
  )
}

export default TextField
