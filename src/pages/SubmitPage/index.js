import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { DataContext } from '../../Context/dataContext'
import { useAxios } from '../../hooks/useAxios'
import '../home/Home.css'
import './SubmitPage.css'

const SubmitPage = () => {
  const [personalData, setPersonalData] = useContext(DataContext)

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
