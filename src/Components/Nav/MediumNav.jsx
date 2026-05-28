import React, { useState, useEffect } from 'react';
import './MediumNav.css'
import { Link, NavLink } from 'react-router-dom';

import {AiFillHome} from 'react-icons/ai'
import {BsQuestionDiamondFill} from 'react-icons/bs'
import {RiOrganizationChart} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
import {BsFillCalendar2EventFill} from 'react-icons/bs'
import {BsFillTrophyFill} from 'react-icons/bs'
import Nav from './Nav';

const Nav2 = () => {
    const [activeNav, setActiveNav] = useState('#');
    const links = [
      { name: 'Home', 
        path: '/' ,
        icon: <AiFillHome/>
      },
      { name: 'About Us',
        path: '/about-us',
        icon: <BsQuestionDiamondFill/>
      },
      {
      name: 'Achievement',
      path: '/achievement',
      },
      {
      name: 'Event',
      path: '/our-event',
      icon: <BsFillCalendar2EventFill/>,
      },
      { name: 'Partnership',
        path: '/our-partnership',
        icon: <FaUserFriends/>
      },
      { name: 'Contact Us',
        path: '/contact-us',
        icon: <AiFillMessage/>
      }
    ];
  return (
    <nav className='Nav2'>
      {links.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        onClick={() => setActiveNav(link.path)}
        className={activeNav === link.path ? 'active2' : ''}
      >
        {link.icon}
      </NavLink>
    ))}
    </nav>
  )
}

export default Nav2