import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { pageTransition } from '../../utils/animation'
import 'react-phone-number-input/style.css'
import './Page.css'
import PersonalLeft from './PersonalLeft'
import PersonalRight from './PersonalRight'
import Pagination from '../../components/Pagination'
import CovidLeft from '../Covid/CovidLeft'
import CovidRight from '../Covid/CovidRight'
import SkillsLeft from '../Skills/SkillsLeft'
import SkillsRight from '../Skills/SkillsRight'
import AboutRight from '../About/AboutRight'
import AboutLeft from '../About/AboutLeft'
import Home from '../home'

const Personal = () => {
  const location = useLocation()

  const renderLeft = () => {
    switch (location.pathname) {
      case '/personal':
        return <PersonalLeft />
      case '/covid':
        return <CovidLeft />
      case '/skills':
        return <SkillsLeft />
      case '/about':
        return <AboutLeft />
      default:
        return <Home />
    }
  }
  const renderRight = () => {
    switch (location.pathname) {
      case '/personal':
        return <PersonalRight />
      case '/covid':
        return <CovidRight />
      case '/skills':
        return <SkillsRight />
      case '/about':
        return <AboutRight />
      default:
        return <Home />
    }
  }

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageTransition}
      className='page'
    >
      <div className='page__left'>
        {renderLeft()}
        <Pagination />
      </div>
      <div className='page__right'>{renderRight()}</div>
    </motion.div>
  )
}

export default Personal
