import React, { useContext } from 'react'
import Text from '../../components/Text'
import HeadText from '../../components/HeadText'
import { texts } from '../../texts'
import TextField from '../../components/TextField'
import { DataContext } from '../../Context/dataContext'
import { regEmail, regPhone } from '../../utils/regex'
import './Page.css'

const Personal = () => {
  const [personalData, setPersonalData] = useContext(DataContext)

  return (
    <div className='page'>
      <div className='page__left'>
        <HeadText
          text='Hey, Rocketeer, what are your coordinates?'
          className='page__heading'
        />
        <TextField
          placeholder='First Name'
          value={personalData.name}
          onChange={(e) =>
            setPersonalData({ ...personalData, name: e.target.value })
          }
          type='text'
          width='300px'
        />
        <span>
          {personalData?.name.length < 2 ? (
            <div style={{ color: 'red', fontSize: '10px' }}>
              სახელი არ უნდა იყოს 2 სიმბოლოზე ნაკლები
            </div>
          ) : (
            ''
          )}
        </span>
        <TextField
          placeholder='Last Name'
          value={personalData.lastName}
          onChange={(e) =>
            setPersonalData({ ...personalData, lastName: e.target.value })
          }
          type='text'
          width='300px'
        />
        {personalData?.lastName.length < 2 ? (
          <div style={{ color: 'red', fontSize: '10px' }}>
            სახელი არ უნდა იყოს 2 სიმბოლოზე ნაკლები
          </div>
        ) : (
          ''
        )}
        <TextField
          placeholder='Email'
          onChange={(e) =>
            setPersonalData({ ...personalData, email: e.target.value })
          }
          type='email'
          width='300px'
        />
        {!regEmail.test(personalData?.email) ? (
          <div style={{ color: 'red', fontSize: '10px' }}>მაილი არასწორია</div>
        ) : (
          ''
        )}
        <TextField
          placeholder='+995_ _ _ _'
          onChange={(e) =>
            setPersonalData({ ...personalData, phone: e.target.value })
          }
          type='mobile'
          width='300px'
        />
        {!regPhone.test(personalData?.phone) ? (
          <div style={{ color: 'red', fontSize: '10px' }}>
            მობილური არასწორია
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='page__right'>
        <HeadText
          text='Redberry Origins
          '
          className='page__heading'
        />
        <Text className='page__text' text={texts.personal} />
      </div>
    </div>
  )
}

export default Personal
