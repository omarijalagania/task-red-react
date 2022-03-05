import React, { useState, useEffect } from 'react'
import Accordian from '../../components/Accordian'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import env from 'react-dotenv'
import './SubmitedPage.css'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import HeadText from '../../components/HeadText'
const SubmitedPage = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const { response, loading } = useAxios({
    method: 'get',
    url: `/applications?token=${env.REACT_APP_TOKEN}`,
  })
  useEffect(() => {
    if (response !== null) {
      setData(response)
    }
  }, [response])

  if (loading) {
    return <Loader />
  }

  // :)
  const withoutEmptySkills = data?.filter((item) => item.skills.length > 0)

  return (
    <div className='submited'>
      <div
        style={{
          display: 'flex',
          textAlign: 'left',
          padding: '25px 0',
          maxWidth: '65%',
          margin: '0 auto',
          justifyContent: 'flex-start',
          display: 'flex',
        }}
      >
        <HeadText text='Submitted Applications' className='submited__text' />
      </div>
      {withoutEmptySkills?.map((item, index) => (
        <Accordian key={Math.random(2) * 21} index={index} item={item} />
      ))}
      <Button
        className='submited__btn'
        title='Main Page'
        onClick={() => navigate('/')}
      />
    </div>
  )
}

export default SubmitedPage
