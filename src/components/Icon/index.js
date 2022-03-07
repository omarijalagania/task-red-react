import React from 'react'

const Icon = (props) => {
  return (
    <div
      className={props.className}
      style={{
        cursor: 'pointer',
      }}
    >
      <img
        onClick={props.onClick}
        src={`/images/${props.name}.png`}
        alt={props.name}
      />
    </div>
  )
}

export default Icon
