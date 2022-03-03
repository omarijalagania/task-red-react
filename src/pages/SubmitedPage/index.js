import React, { useState, useEffect } from 'react'
import Accordian from '../../components/Accordian'
import { useAxios } from '../../hooks/useAxios'
import env from 'react-dotenv'
import './SubmitedPage.css'
import NoItems from '../NoItems'
const SubmitedPage = () => {
  const [data, setData] = useState([])

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

  // :)
  const withoutEmptySkills = data?.filter((item) => item.skills.length > 0)

  return (
    <div className='submited'>
      {withoutEmptySkills?.map((item, index) => (
        <Accordian key={Math.random(2) * 21} index={index} item={item} />
      ))}
    </div>
  )
}

export default SubmitedPage
