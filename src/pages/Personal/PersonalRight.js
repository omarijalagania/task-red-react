import React from 'react'
import HeadText from '../../components/HeadText'
import Text from '../../components/Text'
import { texts } from '../../texts'
const PersonalRight = () => {
  return (
    <>
      <HeadText text='Redberry Origins' className='page__heading' />
      <Text className='page__text' text={texts.personal} />
    </>
  )
}

export default PersonalRight
