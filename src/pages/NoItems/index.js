import React from 'react'
import HeadText from '../../components/HeadText'
import '../NotFound/NotFound.css'
const NoItems = () => {
  return (
    <div className='not__found'>
      <HeadText text='No Items' className='page__heading' />
    </div>
  )
}

export default NoItems
