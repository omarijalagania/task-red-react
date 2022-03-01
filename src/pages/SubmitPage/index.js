import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import '../home/Home.css'
import './SubmitPage.css'

const SubmitPage = () => {
  return (
    <div className='submitPage'>
      <Button title='Submit' className='home__button' />
      <Link to='/'>
        <h3 className='home__applications'>go back</h3>
      </Link>
    </div>
  )
}

export default SubmitPage
