import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import env from 'react-dotenv'
import { pageTransition } from '../../utils/animation'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { DataContext } from '../../Context/dataContext'
import axios from 'axios'
import '../home/Home.css'
import './SubmitPage.css'

const SubmitPage = () => {
  const [personalData, setPesonalData] = useContext(DataContext)
  const [data, setData] = useState([])

  const navigate = useNavigate()

  const bodySubmit = {
    token: personalData.token,
    first_name: personalData.name,
    last_name: personalData.lastName,
    email: personalData.email,
    phone: personalData.phone,
    skills: personalData.skills,
    work_preference: personalData.workPreferences,
    had_covid: personalData.hadCovid,
    had_covid_at: personalData.hadCovidAt,
    vaccinated: personalData.hadVaccination,
    vaccinated_at: personalData.hadVaccinationAt,
    will_organize_devtalk: personalData.willOrganizeDevTalk,
    devtalk_topic: personalData.DevTalkTopic,
    something_special: personalData.somethingSpecial,
  }

  const handleSubmit = async () => {
    if (
      personalData.name !== '' &&
      personalData.lastName !== '' &&
      personalData.email !== '' &&
      personalData.phone !== '' &&
      personalData.skills !== '' &&
      personalData.workPreferences !== '' &&
      personalData.willOrganizeDevTalk !== '' &&
      personalData.somethingSpecial !== ''
    ) {
      try {
        const response = await axios.post('/application', bodySubmit)
        const res = await response
        setData(res)
        //clear state after submit
        setPesonalData({
          token: env.REACT_APP_TOKEN,
          name: '',
          lastName: '',
          email: '',
          phone: '',
          skills: [],
          workPreferences: '',
          hadCovid: false,
          hadCovidAt: '',
          hadVaccination: false,
          hadVaccinationAt: '',
          willOrganizeDevTalk: true,
          DevTalkTopic: '',
          somethingSpecial: '',
        })

        navigate('/thanks')
      } catch (error) {
        alert('Error')
      }
    } else {
      alert('Really? Please fill all fields')
    }
  }

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageTransition}
      className='submitPage'
    >
      <Button title='Submit' onClick={handleSubmit} className='home__button' />

      <h3 onClick={() => navigate(-1)} className='home__submitText'>
        go back
      </h3>
    </motion.div>
  )
}

export default SubmitPage
