import Home from './pages/home'
import { Routes, Route, useLocation, useMatch } from 'react-router-dom'
import Page from './pages/Personal'
import Skills from './pages/Skills'
import Pagination from './components/Pagination'
import Covid from './pages/Covid'
import About from './pages/About'
import SubmitPage from './pages/SubmitPage'
import NotFound from './pages/NotFound'

//import env from "react-dotenv";

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
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {location.pathname !== '/' && location.pathname !== '/submit' ? (
        <Pagination />
      ) : (
        <></>
      )}
    </>
  )
}

export default App

// const { response, loading, error } = useAxios({
//   method: 'post',
//   url: '/posts',
//   headers: JSON.stringify({ accept: '*/*' }),
//   body: JSON.stringify({
//       userId: 1,
//       id: 19392,
//       title: 'title',
//       body: 'Sample text',
//   }),
// });
// const [data, setData] = useState([]);

// useEffect(() => {
//   if (response !== null) {
//       setData(response);
//   }
// }, [response]);
