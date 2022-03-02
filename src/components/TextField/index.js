import React from 'react'
import './TextField.css'
const TextField = (props) => {
  return (
    <div className='textField'>
      <input
        style={{ width: props.width, maxWidth: '80%' }}
        onChange={props.onChange}
        className={props.className}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        multiple={props.size}
        checked={props.checked}
      />
    </div>
  )
}

export default TextField
