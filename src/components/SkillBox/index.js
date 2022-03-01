import React from 'react'
import './SkillBox.css'
const SkillBox = ({ skill, onClick }) => {
  return (
    <div className='skillBox'>
      <p className='skillBox__language'>{skill.skill}</p>
      <p className='skillBox__years'>
        Years of expirience: {skill.expirienceYears}
      </p>
      <img
        onClick={onClick}
        className='skillBox__delete'
        src='/images/remove.png'
        alt='delete'
      />
    </div>
  )
}

export default SkillBox
