import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import HeadText from '../../components/HeadText'
import ParticleStars from '../../components/ParticlesStars'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className='home'>
      <ParticleStars />
      <div className='home__container'>
        <motion.div
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.7 }}
        >
          {' '}
          <HeadText text='Welcome Rocketeer!' className='home__headText' />
        </motion.div>

        <Link to='/personal'>
          <motion.div whileTap={{ scale: 4.5 }}>
            <Button title='Start Questionnaire' className='home__button' />
          </motion.div>
        </Link>

        <h3 onClick={() => navigate('/submited')} className='home__submitText'>
          Submited Applications
        </h3>
        <motion.div whileHover={{ scale: 0.8 }}>
          <img
            src='/images/rocketman.png'
            alt='rocket'
            className='home__rocket'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
