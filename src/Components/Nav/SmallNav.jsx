import React from 'react'
import './SmallNav.css'
import {AiFillHome} from 'react-icons/ai'
import {BsQuestionDiamondFill} from 'react-icons/bs'
import {RiOrganizationChart} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
import {BsFillCalendar2EventFill} from 'react-icons/bs'
import {BsFillTrophyFill} from 'react-icons/bs'

const SmallNav = () => {
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
      { name: 'Event',
        path: '/our-event',
        icon: <BsFillCalendar2EventFill/>
      },
      { name: 'Achievement',
        path: '/our-achievement',
        icon: <BsFillTrophyFill/>
      },
      { name: 'Organization',
        path: '/our-organization',
        icon: <RiOrganizationChart/>
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
    <ul>
        {links.map((link) => (
        <li
            
            key={link.path}
            href={link.path}
            onClick={() => setActiveNav(link.path)}
            className={activeNav === link.path ? 'active2' : ''}
        >
            {link.icon}
        </li>
        ))}
    </ul>
  )
}

export default SmallNav