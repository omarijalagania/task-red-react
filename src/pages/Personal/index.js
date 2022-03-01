import React from 'react'
import Text from '../../components/Text'
import HeadText from '../../components/HeadText'
import { texts } from '../../texts'
import TextField from '../../components/TextField'
import './Page.css'

const Personal = () => {
  return (
    <div className='page'>
      <div className='page__left'>
        <HeadText
          text='Hey, Rocketeer, what are your coordinates?'
          className='page__heading'
        />
        <TextField placeholder='First Name' type='text' />
        <TextField placeholder='Last Name' type='text' />
        <TextField placeholder='Email' type='email' />
        <TextField placeholder='+995_ _ _ _' type='mobile' />
      </div>
      <div className='page__right'>
        <HeadText
          text='Redberry Origins
          '
          className='page__heading'
        />
        <Text className='page__text' text={texts.personal} />
      </div>
    </div>
  )
}

export default Personal
