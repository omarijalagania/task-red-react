import React from 'react'
import HeadText from '../../components/HeadText'
import Text from '../../components/Text'
import { texts } from '../../texts'
const AboutRight = () => {
  return (
    <>
      <HeadText text='Redberrian Insights' className='page__heading' />
      <Text className='page__text' text={texts.about} />
    </>
  )
}

export default AboutRight
