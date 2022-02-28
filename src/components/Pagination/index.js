import React from 'react'
import Icon from '../Icon/'
import './Pagination.css'
const Pagination = () => {
  return (
    <div className='pagination'>
      <Icon name='right' />
      <Icon name='active' />
      <Icon name='inactive' />
      <Icon name='inactive' />
      <Icon name='inactive' />
      <Icon name='left' />
    </div>
  )
}

export default Pagination
