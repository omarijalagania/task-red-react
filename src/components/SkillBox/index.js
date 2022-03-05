import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './SkillBox.css'

const SkillBox = ({ skill, onClick }) => {
  return (
    <motion.div
      initial={{ x: `300px`, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring' }}
      className='skillBox'
    >
      <p className='skillBox__language'>{skill.title}</p>
      <p className='skillBox__years'>Years of expirience: {skill.experience}</p>
      <div onClick={onClick}>
        <img
          className='skillBox__delete'
          src='/images/remove.png'
          alt='delete'
        />
      </div>
    </motion.div>
  )
}

export default SkillBox
