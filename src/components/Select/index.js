import React from 'react'
import './Select.css'
const Select = (props) => {
  return (
    <select style={{ width: '320px' }} className='selection'>
      <option value='volvo'>Skills</option>
      <option value='saab'>Saab</option>
      <option value='fiat'>Fiat</option>
      <option value='audi'>Audi</option>
    </select>
  )
}

export default Select
