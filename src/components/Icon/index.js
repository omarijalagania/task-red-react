import React from 'react'

const Icon = (props) => {
  return <img src={`/images/${props.direction}.png`} alt={props.direction} />
}

export default Icon
