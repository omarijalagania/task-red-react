import React from 'react'

const Icon = (props) => {
  return <img src={`/images/${props.name}.png`} alt={props.name} />
}

export default Icon
