import React, { useState, useEffect } from 'react'
import Accordian from '../../components/Accordian'
import { useAxios } from '../../hooks/useAxios'
import env from 'react-dotenv'
import './SubmitedPage.css'
const SubmitedPage = () => {
  const [data, setData] = useState([])

  console.log(data)

  const { response } = useAxios({
    method: 'get',
    url: `/applications?token=${env.REACT_APP_TOKEN}`,
  })
  useEffect(() => {
    if (response !== null) {
      setData(response)
    }
  }, [response])

  return (
    <div className='submited'>
      <Accordian />
    </div>
  )
}

export default SubmitedPage
