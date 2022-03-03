import React, { useState, useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { motion } from 'framer-motion'
import { ChevronUpOutline, ChevronDownOutline } from 'react-ionicons'
import SecondaryText from '../SecondaryText'
import TextArea from '../TextArea'
import TextField from '../TextField'
import './Accordian.css'

const Accordian = ({ index, item }) => {
  const [active, setActive] = useState(false)
  const [skills, setSkills] = useState([])

  const { response } = useAxios({
    method: 'get',
    url: '/skills',
  })
  useEffect(() => {
    if (response !== null) {
      setSkills(response)
    }
  }, [response])

  //extract skills titles by comparing ids
  const skillTitles = skills?.filter((skill1) =>
    item?.skills.some((skill2) => skill1.id === skill2.id),
  )

  const skillsDrawer = () => {
    return item.skills.map((skill, index) => (
      <div
        key={Math.random(2) * 21}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '40px',
        }}
      >
        <p>{skillTitles[index].title}</p>
        <p>Years of Experience: {skill.experience}</p>
      </div>
    ))
  }

  const pageTransition = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -100,
    },
  }

  return (
    <div className='accordian'>
      <div className='accordian__box'>
        <p>{index + 1}</p>
        <span className='accordian__icon' onClick={() => setActive(!active)}>
          {active ? (
            <ChevronUpOutline color={'#00000'} height='25px' width='25px' />
          ) : (
            <ChevronDownOutline color={'#00000'} height='25px' width='25px' />
          )}
        </span>
      </div>
      {active && (
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={pageTransition}
          className='accordian__item'
        >
          <div className='accordian__content'>
            <div className='accordian__info__box'>
              <div className='accordian__info'>
                <SecondaryText text='Personal Information' />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '40px',
                  }}
                >
                  <p>First Name</p>
                  <p>{item.first_name}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '40px',
                  }}
                >
                  <p>Last Name</p>
                  <p>{item.last_name}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '40px',
                  }}
                >
                  <p>Email</p>
                  <p>{item.email}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '40px',
                  }}
                >
                  <p>Phone</p>
                  <p>{item.phone}</p>
                </div>
              </div>
              <div className='accordian__skillset'>
                <SecondaryText text='Skillset' />

                {skillsDrawer()}
              </div>
            </div>
          </div>
          {/* New Section */}
          <div className='accordian__content'>
            <div className='accordian__info__box'>
              <div className='accordian__info'>
                <SecondaryText text='Covid Situation' />
                <h4 className='accordian__subTitle'>
                  how would you prefer to work?
                </h4>
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
                    value={true}
                    checked={
                      item?.work_preference === 'from_home' ? true : false
                    }
                    readOnly={true}
                    disabled={true}
                    name='cheks1'
                  />
                  <div>Work from home</div>
                </div>
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
                    checked={
                      item?.work_preference === 'from_office' ? true : false
                    }
                    readOnly={true}
                    disabled={true}
                    value={true}
                    name='cheks1'
                  />
                  <div>Work from Office</div>
                </div>
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
                    value={true}
                    checked={item?.work_preference === 'hybrid' ? true : false}
                    readOnly={true}
                    disabled={true}
                    name='cheks1'
                  />
                  <div>Hybrid</div>
                </div>
              </div>
              <div className='accordian__skillset'>
                <SecondaryText text='Insigts' />
                <h4 className='accordian__subTitle'>
                  Would you attend Devtalks and maybe also organize your own?
                </h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
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
                      value={true}
                      name='cheks22'
                      checked={item?.will_organize_devtalk ? true : false}
                      readOnly={true}
                      disabled={true}
                    />
                    <div>Yes</div>
                  </div>
                </div>
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
                    value={true}
                    checked={item?.will_organize_devtalk ? false : true}
                    readOnly={true}
                    disabled={true}
                    name='cheks22'
                  />
                  <div>No</div>
                </div>
              </div>
            </div>
            <div className='accordian__info__box'>
              <div className='accordian__skillset'>
                <h4 className='accordian__subTitle'>Did you have Covid 19?</h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
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
                      value={true}
                      checked={item?.had_covid ? true : false}
                      readOnly={true}
                      disabled={true}
                      name='cheks32'
                    />
                    <div>Yes</div>
                  </div>
                </div>
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
                    value={true}
                    checked={item?.had_covid ? false : true}
                    readOnly={true}
                    disabled={true}
                    name='cheks3'
                  />
                  <div>No</div>
                </div>
              </div>
              {/* Section */}
              <div className='accordian__skillset'>
                <h4 className='accordian__subTitle'>
                  What would you speak about at Devtalk?
                </h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                ></div>
                <TextArea
                  disabled={true}
                  className='textArea'
                  rows='6'
                  placeholder={item?.devtalk_topic}
                />
              </div>
            </div>
            {/* Section */}
            <div className='accordian__info__box'>
              <div className='accordian__skillset'>
                {item?.had_covid && (
                  <>
                    <h4 className='accordian__subTitle'>
                      When did you have covid 19?
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    ></div>
                    <TextField
                      className='covid__textField'
                      placeholder={item?.had_covid_at}
                      disabled={true}
                      type='text'
                      width='300px'
                    />
                  </>
                )}
              </div>
              {/* Section */}
              <div className='accordian__skillset'>
                <h4 className='accordian__subTitle'>
                  Tell us somthing special
                </h4>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                ></div>
                <TextArea
                  disabled={true}
                  className='textArea'
                  rows='4'
                  placeholder={item?.something_special}
                />
              </div>
            </div>
            <div className='accordian__skillset vaccine'>
              <h4 className='accordian__subTitle'>Have you been vaccinated?</h4>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
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
                    value={true}
                    checked={item?.vaccinated ? true : false}
                    readOnly={true}
                    disabled={true}
                    name='cheks3'
                  />
                  <div>Yes</div>
                </div>
              </div>
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
                  value={true}
                  checked={item?.vaccinated ? false : true}
                  readOnly={true}
                  disabled={true}
                  name='cheks3'
                />
                <div>No</div>
              </div>
            </div>
            <div className='accordian__info__box'>
              <div className='accordian__skillset'>
                {item?.vaccinated && (
                  <>
                    <h4 className='accordian__subTitle'>
                      When did you get covid vaccine?
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    ></div>
                    <TextField
                      className='covid__textField'
                      placeholder={item?.vaccinated_at}
                      disabled={true}
                      type='text'
                      width='300px'
                    />
                  </>
                )}
              </div>
              {/* Section */}
              <div className='accordian__skillset'></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Accordian
