import React from 'react'
import MyDatePicker from '../MyDatePicker'
import SecondaryText from '../SecondaryText'
import TextArea from '../TextArea'
import TextField from '../TextField'
import './Accordian.css'

const Accordian = () => {
  return (
    <div className='accordian'>
      <div className='accordian__box'>
        <p>1</p>
        <span>^</span>
      </div>
      <div className='accordian__item'>
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
                <p>Eren</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '40px',
                }}
              >
                <p>Last Name</p>
                <p>Eren</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '40px',
                }}
              >
                <p>Email</p>
                <p>eren@gmail.com</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '40px',
                }}
              >
                <p>Phone</p>
                <p>+995 999 999</p>
              </div>
            </div>
            <div className='accordian__skillset'>
              <SecondaryText text='Skillset' />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '40px',
                }}
              >
                <p>PHP</p>
                <p>Years of Experience: 3</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '40px',
                }}
              >
                <p>React</p>
                <p>Years of Experience: 2</p>
              </div>
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
                  name='cheks'
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
                  value={true}
                  name='cheks'
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
                  name='cheks'
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
                    name='cheks'
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
                  name='cheks'
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
                    name='cheks'
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
                  name='cheks'
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
                className='textArea'
                rows='6'
                placeholder='i would...'
              />
            </div>
          </div>
          {/* Section */}
          <div className='accordian__info__box'>
            <div className='accordian__skillset'>
              <h4 className='accordian__subTitle'>
                When did you have covid 19?
              </h4>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              ></div>
              <MyDatePicker />
            </div>
            {/* Section */}
            <div className='accordian__skillset'>
              <h4 className='accordian__subTitle'>Tell us somthing special</h4>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              ></div>
              <TextArea
                className='textArea'
                rows='4'
                placeholder='i would...'
              />
            </div>
          </div>
          <div className='accordian__info__box'>
            <div className='accordian__skillset'>
              <h4 className='accordian__subTitle'>
                When did you get covid vaccine?
              </h4>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              ></div>
              <MyDatePicker />
            </div>
            {/* Section */}
            <div className='accordian__skillset'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordian
