import React from 'react'
import HeadText from '../../components/HeadText'
import '../../pages/Personal/Page.css'
import '../NotFound/NotFound.css'

const NotFound = () => {
  return (
    <div className='not__found'>
      <HeadText text='Page Not Found!' className='page__heading' />
    </div>
  )
}

export default NotFound
