import React, { useContext, useState, useEffect } from 'react'
import Errors from '../../components/Errors'
import HeadText from '../../components/HeadText'
import TextField from '../../components/TextField'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { DataContext } from '../../Context/dataContext'
import PhoneInput from 'react-phone-number-input'
import { regEmail } from '../../utils/regex'
import './Page.css'

const PersonalLeft = () => {
  const [personalData, setPersonalData] = useContext(DataContext)
  const [mobileValue, setMobileValue] = useState('')

  //validate phone number
  let validNum = isPossiblePhoneNumber(String(mobileValue))

  //add number to store if it is valid
  useEffect(() => {
    if (validNum) {
      setPersonalData({ ...personalData, phone: String(mobileValue) })
    }
  }, [mobileValue])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
        className='page__textField'
        required={true}
        placeholder='First Name'
        value={personalData.name}
        onChange={(e) =>
          setPersonalData({ ...personalData, name: e.target.value })
        }
        type='text'
        width='280px'
      />

      {personalData?.lastName.length < 2 ? (
        <Errors message='Lastname Must be at least 2 symbols' />
      ) : (
        ''
      )}
      <TextField
        className='page__textField'
        required={true}
        placeholder='Last Name'
        value={personalData.lastName}
        onChange={(e) =>
          setPersonalData({ ...personalData, lastName: e.target.value })
        }
        type='text'
        width='280px'
      />

      {!regEmail.test(personalData?.email) ? (
        <Errors message='Email is incorect' />
      ) : (
        ''
      )}
      <TextField
        className='page__textField'
        required={true}
        placeholder='Email'
        onChange={(e) =>
          setPersonalData({ ...personalData, email: e.target.value })
        }
        type='email'
        width='280px'
      />

      {isPossiblePhoneNumber(String(mobileValue)) ? (
        ''
      ) : (
        <Errors message='Phone is incorrect' />
      )}
      <PhoneInput
        placeholder='+995_ _ _ _'
        defaultCountry='GE'
        value={mobileValue}
        onChange={setMobileValue}
      />
    </div>
  )
}
export default PersonalLeft
