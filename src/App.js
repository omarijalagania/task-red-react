import Home from './pages/home'
import { Routes, Route, useLocation } from 'react-router-dom'
import Page from './pages/Personal'
import Skills from './pages/Skills'
import Pagination from './components/Pagination'
import Covid from './pages/Covid'
import About from './pages/About'
import SubmitPage from './pages/SubmitPage'
import NotFound from './pages/NotFound'
import SubmitedPage from './pages/SubmitedPage'
import THanksPage from './pages/ThanksPage'

function App() {
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/personal' element={<Page />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/covid' element={<Covid />} />
        <Route path='/about' element={<About />} />
        <Route path='/submit' element={<SubmitPage />} />
        <Route path='/submited' element={<SubmitedPage />} />
        <Route path='/thanks' element={<THanksPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {location.pathname !== '/' &&
      location.pathname !== '/submit' &&
      location.pathname !== '/thanks' &&
      location.pathname !== '/submited' ? (
        <Pagination />
      ) : (
        <></>
      )}
    </>
  )
}

export default App
