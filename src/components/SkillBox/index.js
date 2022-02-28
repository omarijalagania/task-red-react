import React from 'react'
import './SkillBox.css'
const SkillBox = () => {
  return (
    <div className='skillBox'>
      <p className='skillBox__language'>PHP</p>
      <p className='skillBox__years'>Years of expirience: 3</p>
      <img className='skillBox__delete' src='/images/remove.png' alt='delete' />
    </div>
  )
}

export default SkillBox
