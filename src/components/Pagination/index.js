import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context/dataContext'
import Icon from '../Icon/'
import './Pagination.css'
const Pagination = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [pageData, setPageData] = useContext(DataContext)

  const navigateHandler = (page) => {
    if (
      pageData.name > 2 &&
      pageData.lastName > 2 &&
      pageData.email !== '' &&
      pageData.phone !== ''
    ) {
      navigate(`${page}`)
    }
  }

  return (
    <div className='pagination'>
      <Icon name='right' />
      <span
        onClick={() => navigateHandler('/personal')}
        className={`pagination__circle ${
          location.pathname === '/personal' ? 'active' : ''
        } `}
      />
      <span
        onClick={() => navigateHandler('/skills')}
        className={`pagination__circle ${
          location.pathname === '/skills' ? 'active' : ''
        } `}
      />
      <span
        onClick={() => navigateHandler('/covid')}
        className={`pagination__circle ${
          location.pathname === '/covid' ? 'active' : ''
        } `}
      />
      <span
        onClick={() => navigateHandler('/about')}
        className={`pagination__circle ${
          location.pathname === '/about' ? 'active' : ''
        } `}
      />
      <Icon name='left' />
    </div>
  )
}

export default Pagination
