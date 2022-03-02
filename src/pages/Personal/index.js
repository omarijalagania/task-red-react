import React, { useContext } from 'react'
import Text from '../../components/Text'
import HeadText from '../../components/HeadText'
import { texts } from '../../texts'
import TextField from '../../components/TextField'
import { DataContext } from '../../Context/dataContext'
import { regEmail, regPhone } from '../../utils/regex'
import './Page.css'
import Errors from '../../components/Errors'

const Personal = () => {
  const [personalData, setPersonalData] = useContext(DataContext)

  return (
    <div className='page'>
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

        {!regPhone.test(personalData?.phone) ? (
          <Errors message='Phone is incorrect' />
        ) : (
          ''
        )}
        <TextField
          required={false}
          placeholder='+995_ _ _ _'
          onChange={(e) =>
            setPersonalData({ ...personalData, phone: e.target.value })
          }
          type='mobile'
          width='300px'
        />
      </div>
      <div className='page__right'>
        <HeadText text='Redberry Origins' className='page__heading' />
        <Text className='page__text' text={texts.personal} />
      </div>
    </div>
  )
}

export default Personal
