import React, { useContext, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import { DataContext } from '../../Context/dataContext'
import HeadText from '../../components/HeadText'
import '../Personal/Page.css'
import TextField from '../../components/TextField'
import './Covid.css'
import MyDatePicker from '../../components/MyDatePicker'
import Errors from '../../components/Errors'

const CovidLeft = () => {
  const [personalData, setPersonalData] = useContext(DataContext)
  const [localWorkPreferences, setWorkLocalPrefrences] = useLocalStorage(
    'workPreferences',
    '',
  )
  const [localHadCovid, setLocalHadCovid] = useLocalStorage('localHadCovid', '')
  const [localHadCovidAt, setLocalHadCovidAt] = useLocalStorage(
    'hadCovidAt',
    '',
  )
  const [localHadVaccinacion, setLocalHadVaccinacion] = useLocalStorage(
    'localHadVaccinacion',
    '',
  )

  const [localHadVaccinacionAt, setLocalHadVaccinationAt] = useLocalStorage(
    'hadVaccinationAt',
    '',
  )

  console.log(personalData)

  useEffect(() => {
    setPersonalData({
      ...personalData,
      name: JSON.parse(localStorage.getItem('user'))
        ? JSON.parse(localStorage.getItem('user'))
        : '',
      lastName: JSON.parse(localStorage.getItem('lastName'))
        ? JSON.parse(localStorage.getItem('lastName'))
        : '',
      email: JSON.parse(localStorage.getItem('email'))
        ? JSON.parse(localStorage.getItem('email'))
        : '',
      phone: JSON.parse(localStorage.getItem('phone'))
        ? JSON.parse(localStorage.getItem('phone'))
        : '',
      skills: JSON.parse(localStorage.getItem('skills'))
        ? JSON.parse(localStorage.getItem('skills'))
        : '',
      workPreferences: localWorkPreferences ? localWorkPreferences : '',
      hadCovid: localHadCovid ? JSON.parse(localHadCovid) : false,
      hadCovidAt: localHadCovidAt ? localHadCovidAt : '',
      hadVaccination: localHadVaccinacion
        ? JSON.parse(localHadVaccinacion)
        : false,
      hadVaccinationAt: localHadVaccinacionAt ? localHadVaccinacionAt : '',
    })
  }, [
    localHadCovid,
    localWorkPreferences,
    localHadVaccinacion,
    localHadCovidAt,
    localHadVaccinacionAt,
  ])

  return (
    <>
      <HeadText text='Covid Stuff' className='page__heading' />
      <div className='covid'>
        <p className='covid__text'>how would you prefer to work?</p>
        {localWorkPreferences ? (
          <></>
        ) : (
          <Errors message='Choose one answer' margin='10px' />
        )}
        <div className='covid__box'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TextField
              className='covid__textField'
              width='18px'
              type='radio'
              value='from_office'
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  workPreferences: localWorkPreferences,
                })
                setWorkLocalPrefrences(e.currentTarget.value)
              }}
              checked={localWorkPreferences === 'from_office' ? true : false}
              name='cheks1'
            />
            <div>From Sairme Office</div>
          </div>
        </div>
        <div className='covid__box'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TextField
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  workPreferences: localWorkPreferences,
                })
                setWorkLocalPrefrences(e.currentTarget.value)
              }}
              className='covid__textField'
              width='18px'
              type='radio'
              value='from_home'
              checked={localWorkPreferences === 'from_home' ? true : false}
              name='cheks1'
            />
            <div>From Home</div>
          </div>
        </div>
        <div className='covid__box'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TextField
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  workPreferences: localWorkPreferences,
                })
                setWorkLocalPrefrences(e.currentTarget.value)
              }}
              className='covid__textField'
              width='18px'
              type='radio'
              value='hybrid'
              name='cheks1'
              checked={localWorkPreferences === 'hybrid' ? true : false}
            />
            <div>Hybrid</div>
          </div>
        </div>
      </div>
      {/* Next question */}
      <div className='covid'>
        <p className='covid__text'>Did you contact covid 19? :(</p>
        <div className='covid__box'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TextField
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  hadCovid: localHadCovid,
                })
                setLocalHadCovid(JSON.parse(e.currentTarget.value))
              }}
              className='covid__textField'
              width='18px'
              type='radio'
              checked={localHadCovid === true ? true : false}
              value={true}
              name='cheks'
            />
            <div>Yes</div>
          </div>
        </div>
        <div className='covid__box'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TextField
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  hadCovid: localHadCovid,
                })
                setLocalHadCovid(JSON.parse(e.currentTarget.value))
              }}
              className='covid__textField'
              width='18px'
              type='radio'
              checked={localHadCovid === false ? true : false}
              value={false}
              name='cheks'
            />
            <div>No</div>
          </div>
        </div>
      </div>
      {/* Next question */}

      {localHadCovid && (
        <div className='covid'>
          <p className='covid__text'>When?</p>
          <div className='covid__box'>
            {personalData.hadCovidAt === '' ? (
              <Errors message='Choose Date' margin='10px' />
            ) : (
              <></>
            )}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <MyDatePicker
                when='when_covid'
                setLocalHadCovidAt={setLocalHadCovidAt}
                personalData={personalData}
                setPersonalData={setPersonalData}
              />
            </div>
          </div>
        </div>
      )}

      {/* Had Vaccination */}
      <div className='covid'>
        <p className='covid__text'>Have you been vaccinated?</p>
        <div className='covid__box'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TextField
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  hadVaccination: localHadVaccinacion,
                })
                setLocalHadVaccinacion(JSON.parse(e.currentTarget.value))
              }}
              className='covid__textField'
              width='18px'
              type='radio'
              value='true'
              checked={localHadVaccinacion === true ? true : false}
              name='cheks3'
            />
            <div>Yes</div>
          </div>
        </div>
        <div className='covid__box'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TextField
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  hadVaccination: localHadVaccinacion,
                })
                setLocalHadVaccinacion(JSON.parse(e.currentTarget.value))
              }}
              className='covid__textField'
              width='18px'
              type='radio'
              value='false'
              checked={localHadVaccinacion === false ? true : false}
              name='cheks3'
            />
            <div>No</div>
          </div>
        </div>
      </div>
      {localHadVaccinacion && (
        <div className='covid'>
          <p className='covid__text'>
            When did you get your last covid vaccine?
          </p>
          <div className='covid__box'>
            {personalData.hadVaccinationAt === '' ? (
              <Errors message='Choose Date' margin='10px' />
            ) : (
              <></>
            )}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <MyDatePicker
                setLocalHadVaccinationAt={setLocalHadVaccinationAt}
                when='when_vaccination'
                personalData={personalData}
                setPersonalData={setPersonalData}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CovidLeft
