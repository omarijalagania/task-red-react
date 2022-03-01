import React, { useState, useEffect, useContext } from 'react'
import TextField from '../../components/TextField'
import HeadText from '../../components/HeadText'
import Text from '../../components/Text'
import { texts } from '../../texts'
import '../Personal/Page.css'
import Select from '../../components/Select'
import './Skills.css'
import SkillBox from '../../components/SkillBox'
import { useAxios } from '../../hooks/useAxios'
import { DataContext } from '../../Context/dataContext'
import uuid from 'react-uuid'
import Errors from '../../components/Errors'
const Skills = () => {
  const [personalData, setPersonalData] = useContext(DataContext)
  const [data, setData] = useState([])
  const [chosenSkill, setChosenSkill] = useState('HTML')
  const [expirienceYears, setExpirienceYears] = useState('')

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

  //not to add duplicates to skills array
  const duplicate = personalData?.skills.some(
    (item) => item.skill === chosenSkill,
  )
  //add skill to personalData.skills
  const addProgrammingLangHandler = (e) => {
    if (chosenSkill !== '' && !duplicate && expirienceYears !== '') {
      setPersonalData({
        ...personalData,
        skills: [
          ...personalData.skills,
          {
            id: uuid(),
            skill: chosenSkill,
            expirienceYears: expirienceYears,
          },
        ],
      })
      setChosenSkill('')
      setExpirienceYears('')
    }
  }

  //remove skill from personalData.skills

  const removeSkillHandler = (id) => {
    setPersonalData({
      ...personalData,
      skills: personalData.skills.filter((skill) => skill.id !== id),
    })
  }

  return (
    <div className='page'>
      <div className='page__left'>
        <HeadText text='Tell us about your skills' className='page__heading' />
        <Select onChange={(e) => setChosenSkill(e.target.value)} data={data} />
        <TextField
          onChange={(e) => setExpirienceYears(e.target.value)}
          className='textField'
          placeholder='Experience Duration in Years'
          type='number'
          width='297px'
        />
        <div
          style={{
            width: '320px',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
            margin: '0 auto',
          }}
        >
          <button onClick={addProgrammingLangHandler} className='skill__button'>
            Add Programming Language
          </button>
          {personalData?.skills.length === 0 ? (
            <Errors message='დაამატეთ მინიმუმ 1 სკილი' margin='20px' />
          ) : (
            ''
          )}
          {personalData.skills.length !== 0 ? (
            personalData.skills.map((skill) => (
              <SkillBox
                onClick={removeSkillHandler.bind(null, skill.id)}
                skill={skill}
                key={skill.id}
              />
            ))
          ) : (
            <p>No Skills yet :(</p>
          )}
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
