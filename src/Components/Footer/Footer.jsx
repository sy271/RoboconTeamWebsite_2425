import React from 'react';
import './Footer.css';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube, AiOutlineMail } from 'react-icons/ai';
import {RxDiscordLogo}  from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import UTMRBCLOGO from '../../Picture/LogoClub/UTMRBCLOGO.png';
import Vitrox from '../../Picture/LogoPartnership/Diamond/Vitrox.png';
import IFM from '../../Picture/LogoPartnership/Diamond/IFM.png';
import SRM from '../../Picture/LogoPartnership/Diamond/SRM.png';
import StratusAutomation from '../../Picture/LogoPartnership/Diamond/StratusAutomation.png';
import FTP from '../../Picture/LogoPartnership/Platinum/FTP.png';
import TSH from '../../Picture/LogoPartnership/Diamond/TSH.png';
import RS from '../../Picture/LogoPartnership/Diamond/RS.jpg';
import EasternLogo from '../../Picture/LogoPartnership/Diamond/EasternLogo.png';
import MiTech from '../../Picture/LogoPartnership/Platinum/MiTech.png';
import Odrive from '../../Picture/LogoPartnership/Platinum/Odrive.png';
import SMC from '../../Picture/LogoPartnership/Diamond/SMC.png';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer_logo'><img src={UTMRBCLOGO} alt='UTM Robocon Logo'/>UTM ROBOCON</a>
      <ul className='permalinks'>
        <li><Link to='/about-us'>About Us</Link></li>
        <li><Link to='/our-event'>Event</Link></li>
        <li><Link to='/our-partnership'>Partnership</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.facebook.com/utmrbc/" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /></a>
        <a href="https://www.instagram.com/utm.rbc/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
        {/* <a href="https://www.linkedin.com/company/utmrbc" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a> */}
        <a href="https://www.youtube.com/@utmrbcteam" target='_blank' rel="noopener noreferrer"><AiOutlineYoutube /></a>
        <a href='https://discord.gg/Zcg2s83ett' target="_blank" rel="noopener noreferrer"><RxDiscordLogo /></a>
        <a href='mailto:utmroboconsecretary@gmail.com' rel="noopener noreferrer"><AiOutlineMail /></a>
      </div>
      <div className='footer_partnership'>
        <h3>Partnership</h3>
        <ul className='permaliknks'> 
          <li><a href='' target='_blank' rel="noopener noreferrer"><img src={EasternLogo} alt='Eastern Logo'/></a></li>
          <li><a href='https://stratusauto.com/' target='_blank' rel="noopener noreferrer"><img src={StratusAutomation} alt='Stratus Automation Logo'/></a></li>
          <li><a href='https://www.srm.com.my/' target='_blank' rel="noopener noreferrer"><img src={SRM} alt='SRM Logo'/></a></li>
          <li><a href='http://www.rs-online.com' target='_blank' rel="noopener noreferrer"><img src={RS} alt='RS Logo'/></a></li>
          <li><a href='https://www.smcautomation.com.my/' target='_blank' rel="noopener noreferrer"><img src={SMC} alt='SMC Logo'/></a></li>
          <li><a href='https://www.ifm.com/my/en' target='_blank' rel="noopener noreferrer"><img src={IFM} alt='IFM Logo'/></a></li>
          <li><a href='https://www.vitrox.com/' target='_blank' rel="noopener noreferrer"><img src={Vitrox} alt='Vitrox Logo'/></a></li>
          <li><a href='https://www.tshgroup.com.sg/' target='_blank' rel="noopener noreferrer"><img src={TSH} alt='TSH Logo'/></a></li>
        </ul>
        <ul className='permaliknks'>
          <li><a href='' className='footerspe' target='_blank' rel="noopener noreferrer"><img src={FTP} alt='FTP Logo'/></a></li>
          <li><a href='https://mi-technovation.com/' className='footerspe' target='_blank' rel="noopener noreferrer"><img src={MiTech} alt='MiTech Logo'/></a></li>
          <li><a href='https://odriverobotics.com' className='footerspe' target='_blank' rel="noopener noreferrer"><img src={Odrive} alt='Odrive Logo'/></a></li>
        </ul>
        {/* <ul className='permaliknks'> 
          <li><a href='https://www.mrdiy.com/' target='_blank' rel="noopener noreferrer"><img src={MRDIY} alt='MRDIY Logo'/></a></li>
        </ul> */}
      </div>
      <div className='footer_copyright'>
        <small>&copy; UTM ROBOCON Team {new Date().getFullYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
