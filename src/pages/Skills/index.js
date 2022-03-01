import React, { useState, useEffect } from 'react'
import TextField from '../../components/TextField'
import HeadText from '../../components/HeadText'
import Text from '../../components/Text'
import { texts } from '../../texts'
import '../Personal/Page.css'
import Select from '../../components/Select'
import './Skills.css'
import SkillBox from '../../components/SkillBox'
import { useAxios } from '../../hooks/useAxios'
const Skills = () => {
  const [data, setData] = useState([])

  //get skills from api with custom hook
  const { response } = useAxios({
    method: 'get',
    url: '/skills',
  })
  useEffect(() => {
    if (response !== null) {
      setData(response)
    }
  }, [response])

  return (
    <div className='page'>
      <div className='page__left'>
        <HeadText text='Tell us about your skills' className='page__heading' />
        <Select data={data} />
        <TextField
          className='textField'
          placeholder='Experience Duration in Years'
          type='number'
          width='297px'
        />
        <div
          style={{
            width: '320px',
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
            margin: '0 auto',
          }}
        >
          <button className='skill__button'>Add Programming Language</button>
          <SkillBox />
        </div>
      </div>
      <div className='page__right'>
        <HeadText text='A bit about our battles' className='page__heading' />
        <Text className='page__text' text={texts.skills} />
      </div>
    </div>
  )
}

export default Skills
