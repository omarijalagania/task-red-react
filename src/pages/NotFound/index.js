import React from 'react'
import HeadText from '../../components/HeadText'
import '../Personal/Page.css'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not__found'>
      <HeadText text='Page Not Found!' className='page__heading' />
    </div>
  )
}

export default NotFound
