import React from 'react'
import Text from '../../components/Text'
import HeadText from '../../components/HeadText'
import { texts } from '../../texts'
import '../../Layout/Page/Page.css'
const PersonalRight = () => {
  return (
    <>
      <HeadText
        text='Redberry Origins
          '
        className='page__heading'
      />
      <Text className='page__text' text={texts.personal} />
    </>
  )
}

export default PersonalRight
