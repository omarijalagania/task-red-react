import React from 'react'
import './TextField.css'
const TextField = (props) => {
  return (
    <div className='textField'>
      <input
        style={{ width: props.width }}
        onChange={props.onChange}
        className={props.className}
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        required
        multiple={props.size}
      />
    </div>
  )
}

export default TextField
