import React from 'react'

const TextArea = (props) => {
  return (
    <textarea
      onChange={props.onChange}
      className={props.className}
      rows={props.rows}
      cols='50'
      placeholder={props.placeholder}
    ></textarea>
  )
}

export default TextArea
