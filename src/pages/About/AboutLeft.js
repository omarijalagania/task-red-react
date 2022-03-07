import React, { useContext, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import HeadText from '../../components/HeadText'
import TextField from '../../components/TextField'
import { DataContext } from '../../Context/dataContext'
import '../Personal/Page.css'
import '../Covid/Covid.css'
import '../../components/TextArea/TextArea.css'
import TextArea from '../../components/TextArea'
import Errors from '../../components/Errors'

const AboutLeft = () => {
  const [personalData, setPersonalData] = useContext(DataContext)

  const [localWillOrganizeDevTalk, setLocalWillOrganizeDevTalk] =
    useLocalStorage('willOrganizeDevTalk', true)
  const [localDevTalkTopic, setLocalDevTalkTopic] = useLocalStorage(
    'DevTalkTopic',
    '',
  )
  const [localSomethingSpecial, setLocalSomethingSpecial] = useLocalStorage(
    'somethingSpecial',
    '',
  )

  //fill page with info from localStorage
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
      workPreferences: JSON.parse(localStorage.getItem('workPreferences'))
        ? JSON.parse(localStorage.getItem('workPreferences'))
        : '',
      hadCovid: JSON.parse(localStorage.getItem('hadCovid'))
        ? JSON.parse(localStorage.getItem('workPreferences'))
        : personalData?.hadCovid,
      hadCovidAt: JSON.parse(localStorage.getItem('hadCovidAt'))
        ? JSON.parse(localStorage.getItem('hadCovidAt'))
        : '',
      hadVaccination: JSON.parse(localStorage.getItem('localHadVaccination'))
        ? JSON.parse(localStorage.getItem('localHadVaccination'))
        : personalData?.hadVaccination,
      hadVaccinationAt: JSON.parse(localStorage.getItem('hadVaccinationAt'))
        ? JSON.parse(localStorage.getItem('hadVaccinationAt'))
        : '',
      willOrganizeDevTalk: localWillOrganizeDevTalk
        ? JSON.parse(localWillOrganizeDevTalk)
        : false,
      DevTalkTopic: localDevTalkTopic ? localDevTalkTopic : '',
      somethingSpecial: localSomethingSpecial ? localSomethingSpecial : '',
    })
  }, [localDevTalkTopic, localWillOrganizeDevTalk, localSomethingSpecial])

  return (
    <>
      <HeadText text='Tell us about your skills' className='page__heading' />

      <div className='covid'>
        <p className='covid__text'>
          Would you attend Devtalks and maybe also organize your own?
        </p>
        <div className='covid__box'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <TextField
              on
              className='covid__textField'
              width='18px'
              type='radio'
              value={true}
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  willOrganizeDevTalk: localWillOrganizeDevTalk,
                })
                setLocalWillOrganizeDevTalk(JSON.parse(e.currentTarget.value))
              }}
              name='cheks'
              checked={localWillOrganizeDevTalk ? true : false}
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
              className='covid__textField'
              width='18px'
              type='radio'
              value={false}
              onChange={(e) => {
                setPersonalData({
                  ...personalData,
                  willOrganizeDevTalk: localWillOrganizeDevTalk,
                })
                setLocalWillOrganizeDevTalk(JSON.parse(e.currentTarget.value))
              }}
              name='cheks'
              checked={localWillOrganizeDevTalk ? false : true}
            />
            <div>No</div>
          </div>
        </div>
      </div>
      {/* Next question */}
      {localWillOrganizeDevTalk && (
        <div className='covid'>
          <p className='covid__text'>how would you prefer to work?</p>
          {personalData.DevTalkTopic?.length < 1 ? (
            <Errors message='Please fill the field' margin='10px' />
          ) : (
            <></>
          )}

          <TextArea
            onChange={(e) => {
              setPersonalData({
                ...personalData,
                DevTalkTopic: localDevTalkTopic,
              })
              setLocalDevTalkTopic(e.target.value)
            }}
            className='textArea'
            rows='6'
            value={localDevTalkTopic}
            placeholder='i would...'
          />
        </div>
      )}
      {localWillOrganizeDevTalk && (
        <div className='covid'>
          <p className='covid__text'>Tell us something special</p>
          {personalData?.somethingSpecial.length < 1 ? (
            <Errors message='Please fill the field' margin='10px' />
          ) : (
            <></>
          )}
          <TextArea
            onChange={(e) => {
              setPersonalData({
                ...personalData,
                somethingSpecial: localSomethingSpecial,
              })
              setLocalSomethingSpecial(e.target.value)
            }}
            className='textArea'
            value={localSomethingSpecial}
            rows='3'
            placeholder='i...'
          />
        </div>
      )}
    </>
  )
}

export default AboutLeft
