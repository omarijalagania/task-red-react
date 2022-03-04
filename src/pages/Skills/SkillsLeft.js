import React, { useState, useEffect, useContext } from 'react'
import TextField from '../../components/TextField'
import HeadText from '../../components/HeadText'
import '../Personal/Page.css'
import Select from '../../components/Select'
import './Skills.css'
import SkillBox from '../../components/SkillBox'
import { useAxios } from '../../hooks/useAxios'
import { DataContext } from '../../Context/dataContext'
import Errors from '../../components/Errors'

const SkillsLeft = () => {
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

  let skillArrWithExperience = skillsWithTitle?.map((skill) => {
    let expt = personalData?.skills.filter((exp) => exp.id === skill.id)[0]
      .experience
    let obj = {
      id: skill.id,
      title: skill.title,
      experience: expt,
    }
    return obj
  })

  return (
    <div style={{ display: 'flex' }} className='skills__container'>
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
          <Errors
            message='Add at least one skill, duplicates not allowed'
            margin='20px'
          />
        ) : (
          ''
        )}

        {personalData.skills.length !== 0 ? (
          skillArrWithExperience?.map((skill) => (
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
  )
}

export default SkillsLeft
