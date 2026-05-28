import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='header_cta'>
        <a href="#about" className='button'>About us</a>
        <a href="https://forms.gle/sLH7G2Eecwc9Mg9j7" target='_blank' className='button'>Join Us</a>
    </div>
  )
}

export default CTA