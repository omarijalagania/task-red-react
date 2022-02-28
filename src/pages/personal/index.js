import React from 'react'
import HeadText from '../../components/HeadText'
import Pagination from '../../components/Pagination'
import TextField from '../../components/TextField'
import Text from '../../components/Text'
import { texts } from '../../texts'
import './Personal.css'
const Personal = () => {
  return (
    <div className='personal'>
      <div className='personal__left'>
        <HeadText
          text='Hey, Rocketeer, what are your coordinates?'
          className='personal__heading'
        />
        <TextField placeholder='First Name' type='text' />
        <TextField placeholder='Last Name' type='text' />
        <TextField placeholder='Email' type='email' />
        <TextField placeholder='+995_ _ _ _' type='mobile' />
        <Pagination />
      </div>
      <div className='personal__right'>
        <HeadText
          text='Redberry Origins
          '
          className='personal__heading'
        />
        <Text className='personal__text' text={texts.personal} />
      </div>
    </div>
  )
}

export default Personal
