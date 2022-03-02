import React, { useState } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import './DatePicker.css'
import 'react-datepicker/dist/react-datepicker.css'

const MyDatePicker = ({ personalData, setPersonalData, when }) => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className='datePicker'>
      <DatePicker
        className='datePicker__calendar'
        selected={startDate}
        placeholderText='Date'
        onChange={(date) => {
          if (when === 'when_covid') {
            setPersonalData({
              ...personalData,
              hadCovidAt: moment(date).utc().local().format('YYYY-MM-DD'),
            })
            setStartDate(date)
          } else if (when === 'when_vaccination') {
            setPersonalData({
              ...personalData,
              hadVaccinationAt: moment(date).utc().local().format('YYYY-MM-DD'),
            })
            setStartDate(date)
          }
        }}
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
