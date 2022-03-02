import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { DataContext } from '../../Context/dataContext'
import axios from 'axios'
import '../home/Home.css'
import './SubmitPage.css'

const SubmitPage = () => {
  const [personalData, setPersonalData] = useContext(DataContext)
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
    try {
      const response = await axios.post('/application', bodySubmit)
      const data = await response.data
      setData(data)
      navigate('/thanks')
    } catch (error) {
      alert('Error')
    }
  }

  return (
    <div className='submitPage'>
      <Button title='Submit' onClick={handleSubmit} className='home__button' />
      <Link to='/'>
        <h3 className='home__applications'>go back</h3>
      </Link>
    </div>
  )
}

export default SubmitPage
