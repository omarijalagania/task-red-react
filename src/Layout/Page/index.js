import React from 'react'
import PersonalLeft from '../../components/Personal/PersonalLeft'
import PersonalRight from '../../components/Personal/PersonalRight'
import './Page.css'

const Page = () => {
  return (
    <div className='page'>
      <div className='page__left'>
        <PersonalLeft />
      </div>
      <div className='page__right'>
        <PersonalRight />
      </div>
    </div>
  )
}

export default Page
