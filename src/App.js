import React from 'react'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
import Page from './pages/Personal'
import SubmitPage from './pages/SubmitPage'
import NotFound from './pages/NotFound'
import SubmitedPage from './pages/SubmitedPage'
import THanksPage from './pages/ThanksPage'

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
