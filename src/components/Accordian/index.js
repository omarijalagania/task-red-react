import React, { useState, useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { motion } from 'framer-motion'
import { pageTransition } from '../../utils/animation'
import { ChevronUpOutline, ChevronDownOutline } from 'react-ionicons'
import SecondaryText from '../SecondaryText'
import TextArea from '../TextArea'
import TextField from '../TextField'
import './Accordian.css'

const Accordian = () => {
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

  return <div>Accordian</div>
}

export default Accordian
