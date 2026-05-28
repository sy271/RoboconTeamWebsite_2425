import React from 'react'
import MyRobotLogo from '../../Picture/LogoPartnership/MyRobotLogo.png'
import VitroxLogo from '../../Picture/LogoPartnership/VitroxLogo.png'
import CytronLogo from '../../Picture/LogoPartnership/CytronLogo.png'
import IFMLogo from '../../Picture/LogoPartnership/IFMLogo.png'
import SRMLogo from '../../Picture/LogoPartnership/SRMLogo.png'
import StratusAutomationLogo from '../../Picture/LogoPartnership/StratusAutomationLogo.png'
import {BiLogoFacebook} from 'react-icons/bi'
import {BiLogoInstagram} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import {AiOutlineYoutube} from 'react-icons/ai'
import { FaLinkedinIn } from "react-icons/fa"

import './Partnerhip.css'

const sponsor = [
  
  {
    id: 1,
    image: CytronLogo,
    name: 'Cytron',
    text: 'Founded in 2004, Cytron strives to provide solution for educators and students to build smart electronic & robotic projects. We believe learning digital making is through building projects. We place importance in our team that understand the needs of our customer and are passionate about digital making.',
    website: 'https://www.cytron.io/',
    fbacc: 'Cytron Technologies Malaysia',
    facebook: 'https://www.facebook.com/cytronmy/?mibextid=LQQJ4d',
    ytacc: 'Cytron Technologies',
    youtube: 'https://youtu.be/vnpw75bxoDo',
    igacc: '@cytrontech',
    instagram: 'https://instagram.com/cytrontech?igshid=MzRlODBiNWFlZA==',
  },
  {
      id: 2,
    image: VitroxLogo,
    name: 'Vitrox',
    text: 'At present, ViTrox is well recognized as one of the world-leading automated machine vision inspection solution providers with an extensive customer base in Malaysia, Singapore, Indonesia, Thailand, Vietnam, Philippines, Taiwan, China, Japan, Korea, India, Australia, Europe, Brazil, Mexico, the USA and more',    
    website: 'https://www.vitrox.com/',
    fbacc: 'ViTrox',
    facebook: 'https://www.facebook.com/ViTroxCorp?mibextid=LQQJ4d',
    ytacc: 'ViTrox Corporation Berhad',
    youtube: 'https://youtu.be/WzpTRH5--Uw',
    igacc: '@vitroxcorp',
    instagram: 'https://instagram.com/vitroxcorp?igshid=MzRlODBiNWFlZA==',
  },
  {
    id: 3,
    image: MyRobotLogo,
    name: 'MyRobot',
    text: 'My-Robot is the leading educational robotics and coding academy in Malaysia. We are a dedicated company with a mission to provide the latest innovative ways to engage students in Science, Technology, Engineering, and Mathematics (STEM).',
    fbacc: 'My-Robot HQ',
    facebook: 'https://www.facebook.com/myrobot2020/',
    website: 'https://myrobot.com.my/',
  },
  {
    id: 4,
    image: IFMLogo,
    name: 'IFM',
    //text: 'ifm stands for the optimisation and solution of technical processes by means of sensors, networking and control systems. Close customer contact, quality and innovations have made us the market leader in many areas. ifm develops, produces and sells sensors, controllers, software and systems for industrial automation.',
    text: 'ifm develops, produces and sells sensors, controllers, software and systems for industrial automation.ifm develops, produces and sells sensors, controllers, software and systems for industrial automation.',
    website: 'https://www.ifm.com/my/en',
    fbacc: 'ifm Malaysia',
    facebook: 'https://www.facebook.com/ifmMalaysia/',
  },
  {
    id: 5,
    image: SRMLogo,
    name: 'SRM',
    text: 'Superb Quality Integrated IC Chips Test Handlers as one of the world\'s leading suppliers and solutions providers of semiconductors and advanced standard hi-speed test handlers.SRM can meet most of or all your requirements. We are your partner of choice for superb quality integrated IC chips test-handlers with flexible solutions.',
    website: 'https://www.srm.com.my/',
    fbacc: 'SRM Integration',
    facebook: 'https://www.facebook.com/profile.php?id=100063871759393',
  },
  {
    id: 6,
    image: StratusAutomationLogo,
    name: 'Stratus Automation',
    text: 'Stratus Automation is one of the leading, most cost-efficient and high-quality cleanroom Automated Material Handling System (AMHS) provider in the world.We provide a complete turnkey AMHS mainly for semiconductor fabs, solar cell, medical industries as well as OEM supplier for many world class semiconductor automation system integrator.',
    website: 'https://stratusauto.com/',
    fbacc: 'Stratus Automation Malaysia',
    facebook: 'https://www.facebook.com/people/Stratus-Automation-Malaysia/100063185860944/',
    linkedlnacc: 'Stratus Automation Sdn. Bhd.',
    linkedln: 'https://www.linkedin.com/company/stratus-automation/',
  }
]   

const Partnership = () => {
  return (
    <section id="partnership" className='top'>
      <h5>Our Partners</h5>
      <h2>Partnership</h2>
      <div className="partnership_container">
        {sponsor.map((item) => {
          const { id, image, name, text, fbacc, facebook, igacc, instagram, youtube, ytacc, website, linkedln, linkedlnacc } = item;
          return (
            <div key={id} className="sponsor_card">
                <img src={image} alt={name} />
              <div className="sponsor_desc">
              <p>{text}</p>
              <div className="sponsor_link">
              {facebook && (
                <a href={facebook} className="btn" target="_blank">
                  <BiLogoFacebook className='partnership_logo'/> 
                  <div className="tooltiptext">{fbacc}</div>
                </a>
              )}
              {instagram && (
                <a href={instagram} className="btn " target="_blank">
                  <BiLogoInstagram className='partnership_logo'/> 
                  <div className='tooltiptext'>{igacc}</div> </a>
              )}
              {youtube && (
                <a href={youtube} className="btn" target="_blank">
                  <AiOutlineYoutube className='partnership_logo'/> 
                  <div className='tooltiptext'>{ytacc}</div></a>
              )}
              {website && (
                <a href={website} className="btn" target="_blank">
                  <CgWebsite className='partnership_logo'/> </a>
              )}
              {linkedln && (
                <a href={item.linkedln} className="btn" target="_blank">
                  <FaLinkedinIn className='partnership_logo'/> 
                  <div className='tooltiptext'>{linkedlnacc}</div></a>
              )}
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partnership;





