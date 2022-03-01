import React from 'react'
import './Select.css'
const Select = ({ data, onChange }) => {
  return (
    <select
      onChange={onChange}
      style={{ width: '320px' }}
      className='selection'
    >
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
