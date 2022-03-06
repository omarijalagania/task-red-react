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
import useLocalStorage from 'use-local-storage'

const SkillsLeft = () => {
  const [personalData, setPersonalData] = useContext(DataContext)
  const [data, setData] = useState([])
  const [chosenSkill, setChosenSkill] = useState('HTML')
  const [expirienceYears, setExpirienceYears] = useState('')

  const [localSkills, setLocalSkills] = useLocalStorage('skills', [])
  const [localYear, setLocalYear] = useLocalStorage('year', '')
  const [localChosenSkill, setLocalChosenSkill] = useLocalStorage(
    'skill',
    'HTML',
  )

  useEffect(() => {
    setPersonalData({
      ...personalData,
      name: JSON.parse(localStorage.getItem('user'))
        ? JSON.parse(localStorage.getItem('user'))
        : '',
      lastName: JSON.parse(localStorage.getItem('lastName'))
        ? JSON.parse(localStorage.getItem('lastName'))
        : '',
      email: JSON.parse(localStorage.getItem('email'))
        ? JSON.parse(localStorage.getItem('email'))
        : '',
      phone: JSON.parse(localStorage.getItem('phone'))
        ? JSON.parse(localStorage.getItem('phone'))
        : '',
      skills: localSkills,
    })
  }, [])

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
  const duplicate = localSkills?.some((item) => item.title === localChosenSkill)

  //extract ids from skills array
  const skillId = data?.find((item) => item.title === localChosenSkill)?.id

  //add skill to personalData.skills
  const addProgrammingLangHandler = (e) => {
    if (localChosenSkill !== '' && !duplicate && localYear !== '') {
      setPersonalData({
        ...personalData,
        skills: [
          ...localSkills,
          {
            id: skillId,
            experience: JSON.parse(localYear),
          },
        ],
      })
      setLocalSkills([
        ...personalData.skills,
        {
          id: skillId,
          experience: JSON.parse(localYear),
        },
      ])
    }
  }

  console.log(personalData)

  //remove skill from personalData.skills

  const removeSkillHandler = (id) => {
    setPersonalData({
      ...personalData,
      skills: localSkills?.filter((skill) => skill.id !== id),
    })
    setLocalSkills(localSkills?.filter((skill) => skill.id !== id))
  }

  //get skills titles by id to show it on screen :)
  const skillsWithTitle = data?.filter((skill1) =>
    localSkills?.some((skill2) => skill1.id === skill2.id),
  )

  let skillArrWithExperience = skillsWithTitle?.map((skill) => {
    let expt = localSkills?.filter((exp) => exp.id === skill.id)[0].experience
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
      <Select
        onChange={(e) => setLocalChosenSkill(e.target.value)}
        data={data}
      />
      <TextField
        onChange={(e) => setLocalYear(e.target.value)}
        className='textField skills__textField'
        placeholder='Experience Duration in Years'
        type='number'
        width='287px'
        value={localYear}
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
