import React from 'react'
import LeftContent from '../LeftContent'
import Pagination from '../Pagination'
import TextField from '../TextField'
import HeadText from '../HeadText'
import '../../Layout/Page/Page.css'
const Personal = () => {
  return (
    <LeftContent>
      <HeadText
        text='Hey, Rocketeer, what are your coordinates?'
        className='page__heading'
      />
      <TextField placeholder='First Name' type='text' />
      <TextField placeholder='Last Name' type='text' />
      <TextField placeholder='Email' type='email' />
      <TextField placeholder='+995_ _ _ _' type='mobile' />
      <Pagination />
    </LeftContent>
  )
}

export default Personal
