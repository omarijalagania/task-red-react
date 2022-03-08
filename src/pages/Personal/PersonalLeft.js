import React, { useContext, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
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
  const [user, setUser] = useLocalStorage('user', '')
  const [lastName, setLastName] = useLocalStorage('lastName', '')
  const [email, setEmail] = useLocalStorage('email', '')
  const [phone, setPhone] = useLocalStorage('phone', '')

  //get info from local storage

  useEffect(() => {
    setPersonalData({
      ...personalData,
      name: user,
      lastName: lastName,
      email: email,
      phone: String(phone),
    })
  }, [user, lastName, email, phone])

  console.log(phone)

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

      {user?.length < 2 ? (
        <Errors message='Name Must be at least 2 symbols' />
      ) : (
        ''
      )}

      <TextField
        className='page__textField'
        required={true}
        placeholder='First Name'
        value={user}
        onChange={(e) => setUser(e.target.value)}
        type='text'
        width='280px'
      />

      {user?.length < 2 ? (
        <Errors message='Lastname Must be at least 2 symbols' />
      ) : (
        ''
      )}
      <TextField
        className='page__textField'
        required={true}
        placeholder='Last Name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type='text'
        width='280px'
      />

      {!regEmail.test(email) ? <Errors message='Email is incorect' /> : ''}
      <TextField
        className='page__textField'
        required={true}
        value={email}
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        width='280px'
      />

      {isPossiblePhoneNumber(String(phone)) ? (
        ''
      ) : (
        <Errors message='Phone is incorrect' />
      )}
      <PhoneInput
        placeholder='+995_ _ _ _'
        defaultCountry='GE'
        value={phone}
        onChange={setPhone}
      />
    </div>
  )
}
export default PersonalLeft
