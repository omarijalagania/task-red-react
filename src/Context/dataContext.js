import React, { createContext, useState } from 'react'
import env from 'react-dotenv'
export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState({
    token: env.REACT_APP_TOKEN,
    name: '',
    lastName: '',
    email: '',
    phone: '',
    skills: [],
    workPreferences: '',
    hadCovid: false,
    hadCovidAt: '2022-01-01',
    hadVaccination: false,
    hadVaccinationAt: '2022-01-01',
    willOrganizeDevTalk: false,
    DevTalkTopic: '',
    somethingSpecial: '',
  })
  return (
    <DataContext.Provider value={[personalData, setPersonalData]}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
