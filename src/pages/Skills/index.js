import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/animation'
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
    (item) => item.title === chosenSkill,
  )

  //extract ids from skills array
  const skillId = data?.find((item) => item.title === chosenSkill)?.id

  //add skill to personalData.skills
  const addProgrammingLangHandler = (e) => {
    if (chosenSkill !== '' && !duplicate && expirienceYears !== '') {
      setPersonalData({
        ...personalData,
        skills: [
          ...personalData.skills,
          {
            id: skillId,
            experience: JSON.parse(expirienceYears),
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

  //get skills titles by id to show it on screen :)
  const skillsWithTitle = data?.filter((skill1) =>
    personalData?.skills.some((skill2) => skill1.id === skill2.id),
  )

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageTransition}
      className='page'
    >
      <div className='page__left'>
        <HeadText text='Tell us about your skills' className='page__heading' />
        <Select onChange={(e) => setChosenSkill(e.target.value)} data={data} />
        <TextField
          onChange={(e) => setExpirienceYears(e.target.value)}
          className='textField'
          placeholder='Experience Duration in Years'
          type='number'
          width='287px'
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
            <Errors message='Add at least one skill' margin='20px' />
          ) : (
            ''
          )}
          {personalData.skills.length !== 0 ? (
            skillsWithTitle?.map((skill) => (
              <SkillBox
                onClick={removeSkillHandler.bind(null, skill.id)}
                skill={skill}
                key={skill.id}
              />
            ))
          ) : (
            <p className='skill__error__message'>No Skills yet :(</p>
          )}
        </div>
      </div>
      <div className='page__right'>
        <HeadText text='A bit about our battles' className='page__heading' />
        <Text className='page__text' text={texts.skills} />
      </div>
    </motion.div>
  )
}

export default Skills
