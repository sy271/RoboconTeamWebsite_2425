import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import UTMRBCLOGO from '../../Picture/LogoClub/UTMRBCLOGO.png';
import { Link, NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import {links} from '../../Document/Link/Link';

const Nav = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timerRef.current); // Clear any previous timeout
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 100); // Adjust the delay time as needed
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="NAV">
      <div className="NavLeft">
        <span className="NavSkew">
          <Link to="/" className="NAV_logo" target="_blank">
            <img src={UTMRBCLOGO} alt="UTMRBCLOGO" className="NavNonSkew" />
            <p className="NavTitle NavNonSkew">UTMRBC</p>
          </Link>
        </span>
      </div>
      {/* {isSmallScreen && (
  <div className="pie-container">
    {links.map((link, index) => (
      <div className={`pie pie${index + 1}`} key={index} onClick={() => document.body.classList.remove('active')}>
        <div className={`pie-color pie-color${index + 1}`}>
          <NavLink to={link.path} className="pie-link">
            {link.name}
          </NavLink>
        </div>
      </div>
    ))}
  </div>
)} */}


      {!isSmallScreen && (
        <div className="NavRight">
          <ul className="desktop-menu">
            {links.map(({ name, path, subLinks }, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
              >
                <NavLink 
                    to={path} 
                    className={({ isActive }) => isActive ? "active" : undefined}
                  >
                    {name}
                  </NavLink>
                {subLinks && activeIndex === index && (
                  <ul className="Navsublink">
                    {subLinks.map(({ name, path }, subIndex) => (
                      <li key={subIndex}>
                        <NavLink 
                            to={path} 
                            className={({ isActive }) => isActive ? "active" : undefined}
                          >
                            {name}
                          </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <DarkMode />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
