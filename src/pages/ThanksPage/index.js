import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Thanks.css'
const THanksPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    //redirect user to home page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/')
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className='thanks__page'>
      <h1 className='thanks__title'>Thanks for Joining 😊</h1>
    </div>
  )
}

export default THanksPage
