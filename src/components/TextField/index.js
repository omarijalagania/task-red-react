import React from 'react'
import './TextField.css'
const TextField = (props) => {
  return (
    <div className='textField'>
      <input
        style={{ width: props.width, maxWidth: '100%' }}
        onChange={props.onChange}
        className={props.className}
        type={props.type}
        value={props.value}
        name={props.name}
        defaultChecked={props.defaultChecked}
        placeholder={props.placeholder}
        required={props.required}
        multiple={props.size}
        checked={props.checked}
        readOnly={props.readOnly}
        disabled={props.disabled}
      />
    </div>
  )
}

export default TextField
