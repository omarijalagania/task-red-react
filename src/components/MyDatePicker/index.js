import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import './DatePicker.css'
import 'react-datepicker/dist/react-datepicker.css'

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className='datePicker'>
      <DatePicker
        className='datePicker__calendar'
        selected={startDate}
        placeholderText='Date'
        onChange={(date) => setStartDate(date)}
      />
      <img
        className='datePicker__image'
        src='/images/calendar.png'
        alt='calendar'
      />
    </div>
  )
}

export default MyDatePicker
