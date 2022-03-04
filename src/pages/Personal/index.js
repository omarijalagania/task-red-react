import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Text from '../../components/Text'
import HeadText from '../../components/HeadText'
import { texts } from '../../texts'
import { pageTransition } from '../../utils/animation'
import TextField from '../../components/TextField'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { DataContext } from '../../Context/dataContext'
import { regEmail } from '../../utils/regex'
import './Page.css'
import Errors from '../../components/Errors'

const Personal = () => {
  const [personalData, setPersonalData] = useContext(DataContext)
  const [mobileValue, setMobileValue] = useState('')

  //validate phone number
  let validNum = isPossiblePhoneNumber(String(mobileValue))
  useEffect(() => {
    if (validNum) {
      setPersonalData({ ...personalData, phone: String(mobileValue) })
    }
  }, [mobileValue])

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageTransition}
      className='page'
    >
      <div className='page__left'>
        <HeadText
          text='Hey, Rocketeer, what are your coordinates?'
          className='page__heading'
        />

        {personalData?.name.length < 2 ? (
          <Errors message='Name Must be at least 2 symbols' />
        ) : (
          ''
        )}

        <TextField
          required={true}
          placeholder='First Name'
          value={personalData.name}
          onChange={(e) =>
            setPersonalData({ ...personalData, name: e.target.value })
          }
          type='text'
          width='300px'
        />

        {personalData?.lastName.length < 2 ? (
          <Errors message='Lastname Must be at least 2 symbols' />
        ) : (
          ''
        )}
        <TextField
          required={true}
          placeholder='Last Name'
          value={personalData.lastName}
          onChange={(e) =>
            setPersonalData({ ...personalData, lastName: e.target.value })
          }
          type='text'
          width='300px'
        />

        {!regEmail.test(personalData?.email) ? (
          <Errors message='Email is incorect' />
        ) : (
          ''
        )}
        <TextField
          required={true}
          placeholder='Email'
          onChange={(e) =>
            setPersonalData({ ...personalData, email: e.target.value })
          }
          type='email'
          width='300px'
        />

        {isPossiblePhoneNumber(String(mobileValue)) ? (
          ''
        ) : (
          <Errors message='Phone is incorrect' />
        )}
        {/* <TextField
          required={false}
          placeholder='+995_ _ _ _'
          onChange={(e) =>
            setPersonalData({ ...personalData, phone: e.target.value })
          }
          type='tel'
          width='300px'
        /> */}
        <PhoneInput
          placeholder='+995_ _ _ _'
          defaultCountry='GE'
          value={mobileValue}
          onChange={setMobileValue}
        />
      </div>
      <div className='page__right'>
        <HeadText text='Redberry Origins' className='page__heading' />
        <Text className='page__text' text={texts.personal} />
      </div>
    </motion.div>
  )
}

export default Personal
