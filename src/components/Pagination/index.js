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

  //from about to submit validation
  const isTrueAbout = () => {
    if (personalData?.willOrganizeDevTalk === true) {
      if (
        personalData?.DevTalkTopic === '' &&
        personalData?.somethingSpecial === ''
      ) {
        return false
      } else if (
        personalData?.DevTalkTopic.length !== '' &&
        personalData?.somethingSpecial !== ''
      ) {
        return true
      } else {
        return false
      }
    } else if (personalData?.willOrganizeDevTalk === false) {
      return true
    } else {
      return false
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
      active: personalData?.DevTalkTopic.length > 10,
    },
    {
      id: 5,
      path: '/submit',
      isValid: isTrueAbout(),
    },
  ]

  //Move to next page
  const handleForwart = () => {
    if (pageCount < pages.length - 1) {
      pages[pageCount + 1].isValid && setPageCount(pageCount + 1)
      pages[pageCount + 1].isValid && navigate(pages[pageCount + 1].path)
      console.log(pages[pageCount])
    }
  }

  //Move to previous page
  const handleBack = () => {
    if (pageCount > 0) {
      setPageCount(pageCount - 1)
      navigate(pages[pageCount - 1].path)
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
