import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/dataContext'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { regEmail } from '../../utils/regex'
import Icon from '../Icon/'
import './Pagination.css'

const Pagination = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [pageCount, setPageCount] = useState(0)
  const [personalData] = useContext(DataContext)

  //from covid page to about page validation
  const isTrue = () => {
    if (
      personalData?.hadCovid === true &&
      personalData?.hadVaccination === true &&
      personalData?.hadCovidAt === '' &&
      personalData?.hadVaccinationAt === ''
    ) {
      return false
    } else if (
      personalData?.hadCovid === true &&
      personalData?.hadVaccination === true &&
      personalData?.hadCovidAt !== '' &&
      personalData?.hadVaccinationAt !== ''
    ) {
      return true
    } else if (
      personalData?.hadCovid === true &&
      personalData?.hadCovidAt !== ''
    ) {
      return true
    } else if (
      personalData?.hadVaccination === true &&
      personalData?.hadVaccinationAt !== ''
    ) {
      return true
    } else if (
      personalData?.hadCovid === false &&
      personalData?.hadVaccination === false
    ) {
      return true
    }
  }

  const pages = [
    {
      id: 1,
      path: '/personal',
      isValid:
        personalData?.name.length > 2 &&
        personalData?.lastName.length > 2 &&
        regEmail.test(personalData?.email) &&
        isPossiblePhoneNumber(String(personalData?.phone)),
      active: personalData?.name.length !== 0,
    },
    {
      id: 2,
      path: '/skills',
      isValid:
        personalData?.name.length > 2 &&
        personalData?.lastName.length > 2 &&
        regEmail.test(personalData?.email) &&
        isPossiblePhoneNumber(String(personalData?.phone)),
      active: personalData?.skills.length !== 0,
    },
    {
      id: 3,
      path: '/covid',
      isValid: personalData?.skills.length !== 0,
      active: personalData?.workPreferences !== '',
    },
    {
      id: 4,
      path: '/about',
      isValid: personalData?.workPreferences !== '' && isTrue(),
      active: personalData?.DevTalkTopic !== '',
    },
    {
      id: 5,
      path: '/submit',
      isValid:
        personalData?.DevTalkTopic !== '' &&
        personalData?.somethingSpecial !== '' &&
        personalData?.willOrganizeDevTalk === true,
    },
  ]

  //navigation handlers

  const handleForwart = () => {
    pages.map((page, index) => {
      if (page.path === location.pathname) {
        if (pages[index + 1].isValid) {
          navigate(pages[index + 1].path)
        }
      }
    })
  }

  const handleBack = () => {
    if (location.pathname === '/about') {
      navigate('/covid')
    } else if (location.pathname === '/covid') {
      navigate('/skills')
    } else if (location.pathname === '/skills') {
      navigate('/personal')
    }
  }

  //pagination buttons with validation
  const navCircles = () =>
    pages.map((page) => {
      return (
        <span
          key={page.id}
          onClick={() => page.isValid && navigate(`${page.path}`)}
          className={`pagination__circle ${
            location.pathname === `${page.path}` || page.active ? 'active' : ''
          } `}
        />
      )
    })

  return (
    <div className='pagination'>
      <Icon className='pagination__icon' onClick={handleBack} name='right' />
      {navCircles()}
      <Icon className='pagination__icon' onClick={handleForwart} name='left' />
    </div>
  )
}

export default Pagination
