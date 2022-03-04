import React from 'react'
import HeadText from '../../components/HeadText'
import Text from '../../components/Text'
import { texts } from '../../texts'

const SkillsRight = () => {
  return (
    <>
      <HeadText text='A bit about our battles' className='page__heading' />
      <Text className='page__text' text={texts.skills} />
    </>
  )
}

export default SkillsRight
