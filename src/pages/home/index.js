import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import HeadText from '../../components/HeadText'
import './Home.css'
function Home() {
  return (
    <div
      className='home'
      style={{
        backgroundImage: `url('/images/stars.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='home__container'>
        <HeadText text='Welcome Rocketeer!' className='home__headText' />
        <Button title='Start Questionnaire' className='home__button' />
        <Link to='/'>
          <h3 className='home__applications'>Submited Applications</h3>
        </Link>
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
