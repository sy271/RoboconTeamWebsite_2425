import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdOutgoingMail} from 'react-icons/md'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.facebook.com/utmrbc/" target="_blank"><AiFillFacebook/></a>
        <a href="https://www.instagram.com/utm.rbc/" target="_blank"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/company/utmrbc" target="_blank"><AiFillLinkedin/></a>
        <a href='mailto:utmroboconsecretary@gmail.com' target="_blank"><MdOutgoingMail/></a>
    </div>
  )
}

export default HeaderSocials