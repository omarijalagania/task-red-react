import React from 'react'

const TextArea = (props) => {
  return (
    <textarea
      disabled={props.disabled}
      onChange={props.onChange}
      className={props.className}
      rows={props.rows}
      value={props.value}
      cols='50'
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
    ></textarea>
  )
}

export default TextArea
