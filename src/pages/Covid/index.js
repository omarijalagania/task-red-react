import React from 'react'
import HeadText from '../../components/HeadText'
import { texts } from '../../texts/'
import '../../pages/Personal/Page.css'
import Text from '../../components/Text'
import TextField from '../../components/TextField'
import './Covid.css'
import MyDatePicker from '../../components/MyDatePicker'
const Covid = () => {
  return (
    <>
      <div className='page'>
        <div className='page__left'>
          <HeadText text='Covid Stuff' className='page__heading' />
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
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  value='test'
                  name='cheks'
                />
                <div>From Home</div>
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
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  value='test'
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
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  value='test'
                  name='cheks'
                />
                <div>No</div>
              </div>
            </div>
          </div>
          {/* Next question */}
          <div className='covid'>
            <p className='covid__text'>When?</p>
            <div className='covid__box'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <MyDatePicker />
              </div>
            </div>
          </div>
          {/* Next question */}
          <div className='covid'>
            <p className='covid__text'>
              When did you get your last covid vaccine?
            </p>
            <div className='covid__box'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <MyDatePicker />
              </div>
            </div>
          </div>
        </div>

        <div className='page__right'>
          <HeadText text='Redberry Covid Policies' className='page__heading' />
          <Text className='page__text' text={texts.covid} />
        </div>
      </div>
    </>
  )
}

export default Covid
