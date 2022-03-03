import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/animation'
import { DataContext } from '../../Context/dataContext'
import HeadText from '../../components/HeadText'
import { texts } from '../../texts/'
import '../../pages/Personal/Page.css'
import Text from '../../components/Text'
import TextField from '../../components/TextField'
import './Covid.css'
import MyDatePicker from '../../components/MyDatePicker'
import Errors from '../../components/Errors'
const Covid = () => {
  const [personalData, setPersonalData] = useContext(DataContext)
  return (
    <>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={pageTransition}
        className='page covid__page'
      >
        <div className='page__left'>
          <HeadText text='Covid Stuff' className='page__heading' />
          <div className='covid'>
            <p className='covid__text'>how would you prefer to work?</p>
            {personalData.workPreferences ? (
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
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      workPreferences: e.currentTarget.value,
                    })
                  }
                  checked={
                    personalData.workPreferences === 'from_office'
                      ? true
                      : false
                  }
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
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      workPreferences: e.currentTarget.value,
                    })
                  }
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  value='from_home'
                  checked={
                    personalData.workPreferences === 'from_home' ? true : false
                  }
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
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      workPreferences: e.currentTarget.value,
                    })
                  }
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  value='hybrid'
                  name='cheks1'
                  checked={
                    personalData.workPreferences === 'hybrid' ? true : false
                  }
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
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      hadCovid: JSON.parse(e.currentTarget.value),
                    })
                  }
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  checked={personalData.hadCovid === true ? true : false}
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
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      hadCovid: JSON.parse(e.currentTarget.value),
                    })
                  }
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  checked={personalData.hadCovid === false ? true : false}
                  value={false}
                  name='cheks'
                />
                <div>No</div>
              </div>
            </div>
          </div>
          {/* Next question */}

          {personalData?.hadCovid && (
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
                    personalData={personalData}
                    setPersonalData={setPersonalData}
                  />
                </div>
              </div>
            </div>
          )}
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
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      hadVaccination: JSON.parse(e.currentTarget.value),
                    })
                  }
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  value={true}
                  checked={personalData.hadVaccination === true ? true : false}
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
                  onChange={(e) =>
                    setPersonalData({
                      ...personalData,
                      hadVaccination: JSON.parse(e.currentTarget.value),
                    })
                  }
                  className='covid__textField'
                  width='18px'
                  type='radio'
                  value={false}
                  checked={personalData.hadVaccination === false ? true : false}
                  name='cheks3'
                />
                <div>No</div>
              </div>
            </div>
          </div>
          {personalData?.hadVaccination && (
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
                    when='when_vaccination'
                    personalData={personalData}
                    setPersonalData={setPersonalData}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='page__right'>
          <HeadText text='Redberry Covid Policies' className='page__heading' />
          <Text className='page__text' text={texts.covid} />
        </div>
      </motion.div>
    </>
  )
}

export default Covid
