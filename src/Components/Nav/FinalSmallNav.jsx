import React, { useState, useEffect, useRef } from 'react';
import './FinalSmallNav.css';
import UTMRBCLOGO from '../../Picture/LogoClub/UTMRBCLOGO.png';
import { Link } from 'react-router-dom';
import { TfiMenuAlt } from 'react-icons/tfi';
import { ImCross } from 'react-icons/im';
import { links } from '../../Document/Link/Link';
import DarkMode from '../DarkMode/DarkMode';

// ... (previous imports and code remain the same)

const FinalSmallNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(0);
  const [menuIcon, setMenuIcon] = useState(<TfiMenuAlt />);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setShowMenu(false);
        setDisplayedItems(0);
        setMenuIcon(<TfiMenuAlt />);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      const timer = setTimeout(() => {
        if (displayedItems < links.length) {
          setDisplayedItems(displayedItems + 1);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [showMenu, displayedItems]);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
    setDisplayedItems(0);
    if (!showMenu) {
      setMenuIcon(<ImCross />);
    } else {
      setMenuIcon(<TfiMenuAlt />);
    }
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
    setDisplayedItems(0);
    setMenuIcon(<TfiMenuAlt />);
  };

  return (
    <nav className="NAV" ref={navRef}>
      <div className="NavLeft">
        <span className="NavSkew">
          <Link to="/" className="NAV_logo" target="_blank">
            <img src={UTMRBCLOGO} alt="UTMRBCLOGO" className="NavNonSkew" />
            <p className="NavTitle NavNonSkew">UTMRBC</p>
          </Link>
        </span>
      </div>
      <div className="NavMenu" onClick={handleMenuClick}>
        {menuIcon}
      </div>
      {showMenu && (
        <div className="menu__content">
          <ul>
            {links.slice(0, displayedItems).map((link, index) => (
              <li key={index} className={`menu-item menu-item${index + 1}`} onClick={handleMenuItemClick}>
                <div className={`sub-menuColor sub-menuColor${index + 1}`}>UTM RBC </div>
                <Link to={link.path} className={`link-${index + 1}`}>
                  {link.name}
                </Link>
                {link.subLinks && (
                  <ul>
                    {link.subLinks.map((sublink, subIndex) => (
                      <li
                        key={subIndex}
                        className={`menu-items menu-items${index + 1}`}
                        onClick={handleMenuItemClick}
                      >
                        <Link to={sublink.path}>{sublink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default FinalSmallNav;

