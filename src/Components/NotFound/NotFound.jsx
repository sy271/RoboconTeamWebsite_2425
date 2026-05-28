import React from 'react'
import './NotFound.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='top'>
      <div className='container notfound_container'>
        <h3><b>Page not found</b></h3>
        <Link to='/' className='btn btn-primary'>Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound