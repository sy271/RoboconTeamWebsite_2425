import React, {useState} from 'react';
import './eachDepartment.css';
import ProgrammingLogo from '../../Picture/LogoClub/Programming.png';
import HeadOfDepartmentImage from '../../Document/Member/2024/Programming/meh.png';
import Sy from '../../Document/Member/2024/Programming/sy.png';
import JX from '../../Document/Member/2024/Programming/jx.png';
import Moh from '../../Document/Member/2024/Programming/moh.png';

import HeadOfDepartmentImage2 from '../../Document/Member/2024/Programming/meh2.jpg';
import Sy2 from '../../Document/Member/2024/Programming/sy2.jpg';
import JX2 from '../../Document/Member/2024/Programming/jx2.jpg';
import Moh2 from '../../Document/Member/2024/Programming/moh2.jpg';

const Programming = () => {
    const electronicMembers = [
        {
            name: 'Chen Shu Yan',
            course: 'Bachelor of Computer Science (Software Engineering)',
            year: 'Year 2',
            faculty: 'Faculty of Computing',
            picture: Sy,
            picture2: Sy2,
        },
        {
            name: 'Wong Jia Xuan',
            course: 'Bachelor of Computer Science (Software Engineering)',
            year: 'Year 2',
            faculty: 'Faculty of Computing',
            picture: JX,
            picture2: JX2,
        },
        {
            name: 'Moh Nian Chun',
            course: 'Bachelor of Engineering(Electrical-Mechatronics) with Honours',
            year: 'Year 2',
            faculty: 'Faculty of Electical-Engineering',
            picture: Moh,
            picture2: Moh2,
        }
    ]

    const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section id='programming' className="eachDepartment">
        <div className="eachDepartment_head">
            <img src={ProgrammingLogo} alt="Programming Logo" />
        </div>
            <h2>Programming Department</h2>
        
            <div className="head_member">
                <div
                className="headmember_picture"
                onMouseEnter={() => setHoveredMember('head')}
                onMouseLeave={() => setHoveredMember(null)}
                >
                <img
                    src={hoveredMember === 'head' ? HeadOfDepartmentImage2 : HeadOfDepartmentImage}
                    alt="Head of Programming Department: Wong Jen Yang"
                />
                </div>
                <h3>Wong Jen Yang</h3>
                <p className='position'>Head of Department</p>
                <p className='description'>Faculty of Electrical-Engineering</p>
                <p className='description'>Year 3</p>
            </div>

        <div className="prog-member">
        {electronicMembers.map((member, index) => {
          return (
            <div
              className="prog-member_info"
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
                <p className='position'>Programming Senior</p>
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

export default Programming;
