import React, { useState, useEffect } from 'react'
import Accordian from '../../components/Accordian'
import { useAxios } from '../../hooks/useAxios'
import env from 'react-dotenv'
import './SubmitedPage.css'
import NoItems from '../NoItems'
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

  if (data?.length === 0) {
    return <NoItems />
  }

  return (
    <div className='submited'>
      {data?.map((item, index) => (
        <Accordian key={Math.random(2) * 21} index={index} item={item} />
      ))}
    </div>
  )
}

export default SubmitedPage
