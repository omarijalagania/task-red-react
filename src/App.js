import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Page from './Pages/Personal'
import SubmitPage from './Pages/SubmitPage'
import NotFound from './Pages/NotFound'
import SubmitedPage from './Pages/SubmitedPage'
import THanksPage from './Pages/ThanksPage'

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/covid' element={<Page />} />
      <Route path='/personal' element={<Page />} />
      <Route path='/skills' element={<Page />} />
      <Route path='/about' element={<Page />} />
      <Route path='/submit' element={<SubmitPage />} />
      <Route path='/submited' element={<SubmitedPage />} />
      <Route path='/thanks' element={<THanksPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
