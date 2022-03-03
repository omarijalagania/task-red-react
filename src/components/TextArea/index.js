import React from 'react'

const TextArea = (props) => {
  return (
    <textarea
      disabled={props.disabled}
      onChange={props.onChange}
      className={props.className}
      rows={props.rows}
      cols='50'
      placeholder={props.placeholder}
    ></textarea>
  )
}

export default TextArea
