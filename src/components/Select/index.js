import React from 'react'
import './Select.css'
const Select = ({ data, onChange, value }) => {
  return (
    <select
      value={value}
      className='selection'
      onChange={onChange}
      style={{ width: '320px', maxWidth: '80%' }}
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
