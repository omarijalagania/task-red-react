import React from 'react'

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
        <HeadText text='Welcome Rocketeer!' className='home__headText' />
        <Link to='/personal'>
          <Button title='Start Questionnaire' className='home__button' />
        </Link>

        <h3 onClick={() => navigate('/submited')} className='home__submitText'>
          Submited Applications
        </h3>

        <img
          src='/images/rocketman.png'
          alt='rocket'
          className='home__rocket'
        />
      </div>
    </div>
  )
}

export default Home
