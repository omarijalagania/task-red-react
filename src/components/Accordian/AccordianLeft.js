import React from 'react'
import SecondaryText from '../SecondaryText'
import TextField from '../TextField'
import './AccordianLeft.css'
const AccordianLeft = ({ item }) => {
  return (
    <div className='accordian__left'>
      <div className='accordian__content'>
        {/* Personal info */}
        <div className='accordian__container'>
          <SecondaryText text='Personal Information' />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '40px',
              width: '100%',
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
              width: '100%',
            }}
          >
            <p>Last Name</p>
            <p>{item.first_name}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '40px',
              width: '100%',
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
              width: '100%',
            }}
          >
            <p>Phone</p>
            <p>{item.phone}</p>
          </div>
        </div>
        {/* Covid */}
        <div className='accordian__container'>
          <SecondaryText text='Covid Situation' />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              marginBottom: '40px',
              width: '100%',
            }}
          >
            <h4 className='accordian__subTitle'>
              how would you prefer to work?
            </h4>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <TextField
                className='covid__textField'
                width='18px'
                type='radio'
                value={true}
                checked={item?.work_preference === 'from_home' ? true : false}
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
              }}
            >
              <TextField
                className='covid__textField'
                width='18px'
                type='radio'
                checked={item?.work_preference === 'from_office' ? true : false}
                readOnly={true}
                disabled={true}
                value={true}
                name='cheks1'
              />
              <div>Work Office</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
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
            {/* Have Covid? */}
            <h4 className='accordian__subTitle'>Did you had Covid 19?</h4>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
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
                name='cheks32'
              />
              <div>No</div>
            </div>
          </div>
          {/* When Covid */}
          {item.had_covid && (
            <>
              <h4 className='accordian__subTitle'>
                When did you have covid 19
              </h4>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <TextField
                  className='covid__textField covid__date'
                  placeholder={item?.had_covid_at}
                  disabled={true}
                  type='text'
                  width='230px'
                />
              </div>
            </>
          )}
          {/* Vaccine */}
          <h4 className='accordian__subTitle'>Have you been vaccinated?</h4>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
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
          {/* Vaccine Date */}
          {item.vaccinated && (
            <>
              <h4 className='accordian__subTitle'>
                When did you get covid vaccine?
              </h4>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <TextField
                  className='covid__textField'
                  placeholder={item?.vaccinated_at}
                  disabled={true}
                  type='text'
                  width='230px'
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccordianLeft
