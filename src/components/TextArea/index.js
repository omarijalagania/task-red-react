import React from 'react'

const TextArea = (props) => {
  return (
    <textarea
      className={props.className}
      rows={props.rows}
      cols='50'
      placeholder={props.placeholder}
    ></textarea>
  )
}

export default TextArea
