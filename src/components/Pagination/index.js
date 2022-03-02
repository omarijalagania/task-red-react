import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/dataContext'
import { regEmail, regPhone } from '../../utils/regex'
import Icon from '../Icon/'
import './Pagination.css'
const Pagination = () => {
  const location = useLocation()
  let navigate = useNavigate()

  const [personalData, setPersonalData] = useContext(DataContext)

  const navigateHandler = (page) => {
    navigate(page)
  }

  return (
    <div className='pagination'>
      <Icon name='right' />
      <span
        onClick={() => navigateHandler('/personal')}
        className={`pagination__circle ${
          location.pathname === '/personal' || personalData.name !== ''
            ? 'active'
            : ''
        } `}
      />
      <span
        onClick={() =>
          personalData.name.length > 2 &&
          personalData.lastName.length > 2 &&
          regEmail.test(personalData.email) &&
          regPhone.test(personalData.phone)
            ? navigate('/skills')
            : ''
        }
        className={`pagination__circle ${
          location.pathname === '/skills' || personalData?.skills.length !== 0
            ? 'active'
            : ''
        } `}
      />
      <span
        onClick={() => personalData?.skills.length !== 0 && navigate('/covid')}
        className={`pagination__circle ${
          location.pathname === '/covid' || personalData?.workPreferences
            ? 'active'
            : ''
        } `}
      />
      <span
        onClick={() =>
          personalData?.workPreferences !== '' &&
          personalData?.hadCovid &&
          personalData?.hadCovidAt !== '' &&
          personalData?.hadVaccination &&
          personalData?.hadVaccinationAt !== '' &&
          navigate('/about')
        }
        className={`pagination__circle ${
          location.pathname === '/about' ? 'active' : ''
        } `}
      />
      <span
        onClick={() =>
          personalData?.DevTalkTopic.length < 10
            ? false
            : true && personalData?.somethingSpecial.length < 10
            ? false
            : true && navigate('/submit')
        }
        className={`pagination__circle ${
          location.pathname === '/submit' ? 'active' : ''
        } `}
      />
      <Icon name='left' />
    </div>
  )
}

export default Pagination
