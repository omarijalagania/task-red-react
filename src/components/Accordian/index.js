import React, { useState, useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { motion } from 'framer-motion'
import { ChevronDownOutline, ChevronUpOutline } from 'react-ionicons'
import { pageTransition } from '../../utils/animation'
import './Accordian.css'
import AccordianLeft from './AccordianLeft'
import AccordianRight from './AccordianRight'

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

  return (
    <div className='accordian'>
      <div className='accordian__box'>
        <div className='accordian__box__header'>
          <p>{index + 1}</p>
          <span className='accordian__icon' onClick={() => setActive(!active)}>
            {active ? (
              <ChevronUpOutline color={'#00000'} height='25px' width='25px' />
            ) : (
              <ChevronDownOutline color={'#00000'} height='25px' width='25px' />
            )}
          </span>
        </div>
      </div>
      {active && (
        <motion.div
          initial='out'
          animate='in'
          exit='out'
          variants={pageTransition}
          className='accordian__item'
        >
          <AccordianLeft item={item} />
          <AccordianRight item={item} skillTitles={skillTitles} />
        </motion.div>
      )}
    </div>
  )
}

export default Accordian
