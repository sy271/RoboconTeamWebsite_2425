import React from 'react'
import './NotFound.css'
import Footer from '../../Components/Footer/Footer'
import NotFound from '../../Components/NotFound/NotFound'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <Footer />
    </>
  )
}

export default NotFoundPage