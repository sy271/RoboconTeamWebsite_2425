import './Organization.css';
import React, { useEffect, useState } from 'react';
import TeamManagerImage from '../../Document/Member/DRO.png';
import TeamLeaderImage from '../../Document/Member/2024/management/ENNIS1.png';
import ViceTeamLeaderImage from '../../Document/Member/2024/management/SY1.png';
import SecretaryImage from '../../Document/Member/2024/management/JX1.png';
import TreasurerImage from '../../Document/Member/2024/management/MOH1.png';
import HumanResourceImage from '../../Document/Member/2024/management/WL1.png';

const Organization = () => {

  return (
    <section id = "organization" className='organization top'>
      <h5>How we Work</h5>
      <h2>Organization of UTM RBC</h2>
      <h3>Management Board of Committe</h3>
    <div className="container organization_container">
      <div className="Orow">
        <div className="person">
          <div className='person_picture'>         
            <img src={TeamManagerImage} alt="Team Manager" />
          </div>
          <div className='person_info'>
            <b><h3>Team Manager</h3></b>
            <hr/>
            <b><h6>Assoc. Prof. Ir. Ts. Dr. Mohd Ridzuan Bin Ahmad</h6></b>
                <p><a href="mailto:ridzuan@fke.utm.my ">ridzuan@fke.utm.my </a></p>
                <p><a href="tel:+6013 761 2778 ">+6013-761 2778 </a></p>
          </div>
        </div>
      </div>
      
      <div className="Orow">
        <div className="person">
          <div className='person_picture'>
            <img src={TeamLeaderImage} alt="Team Leader" />
          </div>
          <div className='person_info'>
            <b><h3>Team Leader</h3></b>
            <hr/>
            <b><h6>Ennis Lam Si Hoong</h6></b>
              <p><a href="mailto:theleaderrbc@gmail.com "> theleaderrbc@gmail.com </a></p>
              <p><a href="mailto:ennis@graduate.utm.my "> ennis@graduate.utm.my </a></p>
              <p><a href="tel:+6018-665 9511 ">+6018-665 9511 </a></p>
          </div>
        </div>
        <div className="person">
          <div className='person_picture'>
            <img src={ViceTeamLeaderImage} alt="Vice Team Leader" />
          </div>
          <div className='person_info'>
            <b><h3>Vice Team Leader</h3></b>
            <hr/>
            <b><h6>Chen Shu Yan</h6></b>
              <p><a href="mailto:utmrbcvp@gmail.com"> utmrbcvp@gmail.com </a></p>
              <p><a href="mailto:chenshuyan@graduate.utm.my"> chenshuyan@graduate.utm.my </a></p>
              <p><a href="tel:+6017-201 1393"> +6017-201 1393</a></p>
          </div>
        </div>
      </div>
      
      <div className="Orow">
        <div className="person">
          <div className='person_picture'>
            <img src={TreasurerImage} alt="Treasurer" />
          </div>
          <div className='person_info'>
            <b><h3>Treasurer</h3></b>
            <hr/>
            <b><h6>Moh Nian Chun</h6></b>
              <p><a href="mailto:utmrbctreasurer@gmail.com"> utmrbctreasurer@gmail.com </a></p>
              <p><a href="mailto:mohnianchun@graduate.utm.my"> mohnianchun@graduate.utm.my              </a></p>
              <p><a href="tel:+6011-3155 6877"> +6011-3155 6877</a></p>
          </div>
        </div>
        <div className="person">
          <div className='person_picture'>
            <img src={HumanResourceImage} alt="Human Resource" />
          </div>
          <div className='person_info'>
            <b><h3>Human Resource</h3></b>
            <hr/>
            <b><h6>Ong Wei Lun</h6></b>
              <p><a href="mailto:utmrbchr@gmail.com"> utmrbchr@gmail.com </a></p>
              <p><a href="mailto:onglun@graduate.utm.my"> onglun@graduate.utm.my </a></p>
              <p><a href="tel:+6011-1659 0426"> +6011-1659 0426 </a></p>
          </div>
        </div>
        <div className="person">
          <div className='person_picture'>
            <img src={SecretaryImage} alt="Secretary" />
          </div>
          <div className='person_info'>
            <b><h3>Secretary</h3></b>
            <hr/>
            <b><h6>Wong Jia Xuan</h6></b>
                <p><a href="mailto:utmroboconsecretary@gmail.com"> utmroboconsecretary@gmail.com </a></p>
                <p><a href="mailto:wongjia.xuan@graduate.utm.my"> wongjia.xuan@graduate.utm.my </a></p>
                <p><a href="tel: +6011-11978253">  +6011-11978253 </a></p>
          </div>
        </div>
      </div>
    </div>
    
    </section>
  );
};

export default Organization;
