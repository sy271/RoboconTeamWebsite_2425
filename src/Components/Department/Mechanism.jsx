import React, {useState} from 'react';
import './eachDepartment.css';
import MechanismLogo from '../../Picture/LogoClub/MechanismLogo2.png';
import HeadOfDepartmentImage from '../../Document/Member/2024/Mechanism/wilson.png';
import Ennis from '../../Document/Member/2024/Mechanism/ennis.png';
import JY from '../../Document/Member/2024/Mechanism/jinyi.png';
import Khalifah from '../../Document/Member/2024/Mechanism/khalifah.png';
import Mak from '../../Document/Member/2024/Mechanism/mak.png';
import Ps from '../../Document/Member/2024/Mechanism/ps.png';
import Tea from '../../Document/Member/2024/Mechanism/tea.png';
import WL from '../../Document/Member/2024/Mechanism/weilun.png';
import JK from '../../Document/Member/2024/Mechanism/jk.png';
import Amr from '../../Document/Member/2024/Mechanism/amr.png';

import HeadOfDepartmentImage2 from '../../Document/Member/2024/Mechanism/wilson2.jpg';
import Ennis2 from '../../Document/Member/2024/Mechanism/ennis2.jpg';
import JY2 from '../../Document/Member/2024/Mechanism/jinyi2.jpg';
import Khalifah2 from '../../Document/Member/2024/Mechanism/khalifah2.jpg';
import Mak2 from '../../Document/Member/2024/Mechanism/mak2.jpg';
import Ps2 from '../../Document/Member/2024/Mechanism/ps2.jpg';
import Tea2 from '../../Document/Member/2024/Mechanism/tea2.jpg';
import WL2 from '../../Document/Member/2024/Mechanism/weilun2.jpg';
import JK2 from '../../Document/Member/2024/Mechanism/jk2.jpg';
import Amr2 from '../../Document/Member/2024/Mechanism/amr2.jpg';

const Mechanism = () => {
    const electronicMembers = [
        {
            name: <p>Amr Mohamed Fathy<br/> Abdelkader Elbermawy</p>,
            course: 'Bachelor of Engineering (Electrical - Mechatronic) with Honours',
            year: 'Year 3',
            faculty: 'Faculty of Electical-Engineering',
            picture: Amr,
            picture2: Amr2,
        },
        {
            name: 'Ennis Lam Si Hoong',
            picture: Ennis,
            picture2: Ennis2,
            course: 'Bachelor of Computer Science (Graphics and Multimedia Software)',
            year: 'Year 2',
            faculty: 'Faculty of Computer Science',
        },
        {
            name: <p>Khalifah Hadi <br/> Subih Ba Abbad</p>,
            course: 'Bachelor of Mechanical Engineering with Honours',
            year: 'Year 3',
            faculty: 'Faculty of Mechanical Engineering',
            picture: Khalifah,
            picture2: Khalifah2,
        },
        {
          name: 'Liew Jin Yi',
          picture: JY,
          picture2: JY2,
          course: 'Bachelor of Engineering (Electrical – Mechatronic) with Honours',
          year: 'Year 2',
          faculty: 'Faculty of Electrical-Engineering', 
        },
        {
          name: 'Mak Zhi Hoong',
          picture: Mak,
          picture2: Mak2,
          course: 'Bachelor of Engineering (Electrical – Mechatronic) with Honours',
          year: 'Year 2',
          faculty: 'Faculty of Electrical-Engineering', 
        },
        {
          name: 'Ng Ping Shean',
          picture: Ps,
          picture2: Ps2,
          course: 'Bachelor of Engineering (Electrical – Mechatronic) with Honours',
          year: 'Year 2',
          faculty: 'Faculty of Electrical-Engineering', 
        },
        {
          name: 'Ngu Jia Kang',
          course: 'Bachelor of Electronic Engineering with Honours',
          year: 'Year 2',
          faculty: 'Faculty of Electrical - Engineering',
          picture: JK,
          picture2: JK2,
        },
        {
          name: 'Ong Wei Lun',
          course: 'Bachelor of Mechanical Engineering with Honours',
          year: 'Year 3',
          faculty: 'Faculty of Mechanical Engineering',
          picture: WL,
          picture2: WL2,
        },
        {
          name: 'Tea Chi Yang',
          course: 'Bachelor of Mechanical Engineering with Honours',
          year: 'Year 2',
          faculty: 'Faculty of Mechanical Engineering',
          picture: Tea,
          picture2: Tea2,
        }
    ]
    const [hoveredMember, setHoveredMember] = useState(null);

    return (
      <section id='mechanism' className="eachDepartment">
          <div className="eachDepartment_head">
              <img src={MechanismLogo} alt="Mechanism Logo" />
          </div>
              <h2>Mechanism Department</h2>
          
              <div className="head_member">
                  <div
                  className="headmember_picture"
                  onMouseEnter={() => setHoveredMember('head')}
                  onMouseLeave={() => setHoveredMember(null)}
                  >
                  <img
                      src={hoveredMember === 'head' ? HeadOfDepartmentImage2 : HeadOfDepartmentImage}
                      alt="Head of Mechanism Department: Goh Wil-Son"
                  />
                  </div>
                  <h3>Goh Wil-Son</h3>
                  <p className='position'>Head of Department</p>
                  <p className='description'>Faculty of Mechanical Engineering</p>
                  <p className='description'>Year 2</p>
              </div>
  
          <div className="member">
          {electronicMembers.map((member, index) => {
            return (
              <div
                className="member_info"
                key={index}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="member_picture">
                  <img
                    src={hoveredMember === index ? member.picture2 : member.picture}
                    alt={member.name}
                  />
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <p className='position'>Mechanism Senior</p>
                <p className='description'>{member.faculty}</p>
                <p className='description'>{member.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  
  export default Mechanism;
      