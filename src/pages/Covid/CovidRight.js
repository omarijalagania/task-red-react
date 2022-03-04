import React from 'react'
import HeadText from '../../components/HeadText'
import { texts } from '../../texts'
import '../Personal/Page.css'
import Text from '../../components/Text'
import './Covid.css'

const CovidRight = () => {
  return (
    <>
      <HeadText text='Redberry Covid Policies' className='page__heading' />
      <Text className='page__text' text={texts.covid} />
    </>
  )
}

export default CovidRight
