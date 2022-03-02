import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/dataContext'
import { regEmail, regPhone } from '../../utils/regex'
import Icon from '../Icon/'
import './Pagination.css'

const pages = [
  {
    id: 1,
    path: '/personal',
  },
  {
    id: 2,
    path: '/skills',
  },
  {
    id: 3,
    path: '/covid',
  },
  {
    id: 4,
    path: '/about',
  },
  {
    id: 5,
    path: '/submit',
  },
]

const Pagination = () => {
  const location = useLocation()
  let navigate = useNavigate()
  const [pageCount, setPageCount] = useState(0)
  const [personalData, setPersonalData] = useContext(DataContext)

  //Move to next page
  const handleForwart = () => {
    if (pageCount < pages.length - 1) {
      setPageCount(pageCount + 1)
      navigate(pages[pageCount + 1].path)
    }
  }

  //Move to previous page
  const handleBack = () => {
    if (pageCount > 0) {
      setPageCount(pageCount - 1)
      navigate(pages[pageCount - 1].path)
    }
  }

  return (
    <div className='pagination'>
      <Icon onClick={handleBack} name='right' />
      <span
        onClick={() => navigate('/personal')}
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
          personalData?.hadCovid && personalData.hadCovidAt !== ''
            ? personalData.hadCovidAt !== ''
            : personalData?.hadCovid && navigate('/about')
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
      <Icon onClick={handleForwart} name='left' />
    </div>
  )
}

export default Pagination

// onClick={() =>
//   personalData?.workPreferences !== '' &&
//   personalData?.hadCovid &&
//   personalData?.hadCovidAt !== '' &&
//   personalData?.hadVaccination &&
//   personalData?.hadVaccinationAt !== '' &&
//   navigate('/about')
// }
