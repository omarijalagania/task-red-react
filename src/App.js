import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Content from './pages/content'

//import env from "react-dotenv";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/start' element={<Content />} />
      </Routes>
    </Router>
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
