import React from 'react'
import './Select.css'
const Select = ({ data }) => {
  return (
    <select style={{ width: '320px' }} className='selection'>
      {data?.map((item) => {
        return (
          <option key={item.id} value={item.title}>
            {item.title}
          </option>
        )
      })}
    </select>
  )
}

export default Select
