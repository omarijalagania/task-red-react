import React from 'react'
import Icon from '../Icon/'
import './Pagination.css'
const Pagination = () => {
  return (
    <div className='pagination'>
      <Icon name='right' />
      <span className='pagination__circle active' />
      <span className='pagination__circle' />
      <span className='pagination__circle' />
      <span className='pagination__circle' />
      <Icon name='left' />
    </div>
  )
}

export default Pagination
