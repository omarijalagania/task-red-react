import React from 'react'
import SecondaryText from '../SecondaryText'
import TextArea from '../TextArea'
import TextField from '../TextField'
import './AccordianRight.css'

const AccordianRight = ({ item, skillTitles }) => {
  console.log(skillTitles)
  const skillsDrawer = () => {
    return item?.skills.map((skill, index2) => (
      <div
        key={Math.random(2) * 21}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '40px',
        }}
      >
        <p>{skillTitles[index2]?.title}</p>
        <p>Years of Experience: {skill?.experience}</p>
      </div>
    ))
  }
  return (
    <div className='accordian__right'>
      <div className='accordian__content'>
        {/* Personal info */}
        <div className='accordian__container'>
          <SecondaryText text='Skillset' />
          {skillsDrawer()}

          {/* Insights */}
          <SecondaryText text='Insights' />
          <h4 className='accordian__subTitle'>
            {' '}
            Would you attend Devtalks and maybe also organize your own?
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
              name='cheks22'
              checked={item?.will_organize_devtalk ? true : false}
              readOnly={true}
              disabled={true}
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
              checked={item?.will_organize_devtalk ? false : true}
              readOnly={true}
              disabled={true}
              name='cheks22'
            />
            <div>No</div>
          </div>
          {/* Devtalk? */}
          <h4 className='accordian__subTitle'>
            {' '}
            What would you speak about at Devtalk?
          </h4>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextArea
              disabled={true}
              className='textArea'
              rows='6'
              placeholder={item?.devtalk_topic}
            />
          </div>
          {/* When Devtalk */}
          <h4 className='accordian__subTitle'> Tell us somthing special</h4>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextArea
              disabled={true}
              className='textArea'
              rows='4'
              placeholder={item?.something_special}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordianRight
