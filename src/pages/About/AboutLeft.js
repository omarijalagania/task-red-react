import React, { useContext } from 'react'
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
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  willOrganizeDevTalk: JSON.parse(e.currentTarget.value),
                })
              }
              name='cheks'
              checked={personalData?.willOrganizeDevTalk ? true : false}
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
              onChange={(e) =>
                setPersonalData({
                  ...personalData,
                  willOrganizeDevTalk: JSON.parse(e.currentTarget.value),
                })
              }
              name='cheks'
            />
            <div>No</div>
          </div>
        </div>
      </div>
      {/* Next question */}
      <div className='covid'>
        <p className='covid__text'>how would you prefer to work?</p>
        {personalData?.DevTalkTopic.length < 10 ? (
          <Errors message='Please type at least 10 symbols' margin='10px' />
        ) : (
          <></>
        )}
        <TextArea
          onChange={(e) =>
            setPersonalData({
              ...personalData,
              DevTalkTopic: e.target.value,
            })
          }
          className='textArea'
          rows='6'
          placeholder='i would...'
        />
      </div>
      <div className='covid'>
        <p className='covid__text'>Tell us something special</p>
        {personalData?.somethingSpecial.length < 10 ? (
          <Errors message='Please type at least 10 symbols' margin='10px' />
        ) : (
          <></>
        )}
        <TextArea
          onChange={(e) =>
            setPersonalData({
              ...personalData,
              somethingSpecial: e.target.value,
            })
          }
          className='textArea'
          rows='3'
          placeholder='i...'
        />
      </div>
    </>
  )
}

export default AboutLeft