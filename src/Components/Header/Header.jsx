import React, { useEffect, useState } from 'react'
import './Header.css'
import Typed from 'typed.js'; 

import CTA from './CTA'
import Logo from '../../Picture/LogoClub/UTMRBCLOGO.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
    const options = {
      strings: ['2024/2025'],
      typeSpeed: 150,
      backSpeed: 200,
      loop: true
    };
    const typed = new Typed('.text-light', options);
    return () => {
      typed.destroy();
    };
  }, 
  []); // Empty dependency array to run the effect once on mount
  return (
    <section className={`header top ${setHasAnimated ? 'show-animation' : ''}`}>
      <div className="container header_container">
        <h5>Hello, we are</h5>
        <h1>UTM ROBOCON</h1>
        <div className="header__divider">
          <h5 className='text-light'></h5>
        </div>
        <CTA />
        <img src={Logo} alt="UTM ROBOCON" />
        <h6 className='shadow'>UTM ROBOCON</h6>
        <a href="#footer" className="scroll_down"> Scroll Down</a>
        <HeaderSocials />
      </div>
    </section>
  )
}

export default Header