import React from 'react'
import HeadText from '../../components/HeadText'
import Text from '../../components/Text'
import TextField from '../../components/TextField'
import { texts } from '../../texts/'
import '../../pages/Personal/Page.css'
import '../Covid/Covid.css'
import '../../components/TextArea/TextArea.css'
import TextArea from '../../components/TextArea'

const About = () => {
  return (
    <div className='page'>
      <div className='page__left'>
        <HeadText text='Tell us about your skills' className='page__heading' />

        <div className='covid'>
          <p className='covid__text'>how would you prefer to work?</p>
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
                value='test'
                name='cheks'
              />
              <span>Yes</span>
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
                value='test'
                name='cheks'
              />
              <span>No</span>
            </div>
          </div>
        </div>
        {/* Next question */}
        <div className='covid'>
          <p className='covid__text'>how would you prefer to work?</p>
          <TextArea className='textArea' rows='6' placeholder='i would...' />
        </div>
        <div className='covid'>
          <p className='covid__text'>Tell us something special</p>
          <TextArea className='textArea' rows='3' placeholder='i...' />
        </div>
      </div>
      <div className='page__right'>
        <HeadText text='Redberrian Insights' className='page__heading' />
        <Text className='page__text' text={texts.about} />
      </div>
    </div>
  )
}

export default About
