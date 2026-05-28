import React, {useState} from 'react';
import './eachDepartment.css';
import ElectronicLogo from '../../Picture/LogoClub/Electronic.png';
import HeadOfDepartmentImage from '../../Document/Member/2024/Electronic/YeePeng.png';
import Ivy from '../../Document/Member/2024/Electronic/Ivy.png';
import JX from '../../Document/Member/2024/Electronic/chia.png';
import Moaz from '../../Document/Member/2024/Electronic/Moaz.png';

import HeadOfDepartmentImage2 from '../../Document/Member/2024/Electronic/YeePeng2.png';
import Ivy2 from '../../Document/Member/2024/Electronic/Ivy2.png';
import JX2 from '../../Document/Member/2024/Electronic/chia2.png';
import Moaz2 from '../../Document/Member/2024/Electronic/Moaz2.png';

const Electronic = () => {
    const electronicMembers = [
        {
            name: 'Chia Jing Xiang',
            picture: JX,
            picture2: JX2,
            course: 'Bachelor of Electrical Engineering with Honours',
            year: 'Year 2',
            faculty: 'Faculty of Electrical - Engineering',
            status: 'odd',
        },
        {
            name: 'Ivy Ling Hock Hong',
            course: 'Bachelor of Electronic Engineering with Honours',
            year: 'Year 2',
            faculty: 'Faculty of Electical-Engineering',
            picture: Ivy,
            picture2: Ivy2,
            status: 'even'
        },
        {
          name: 'Moaz Hany Elbakhsha',
          picture: Moaz,
          picture2: Moaz2,
          course: 'Bachelor of Engineering (Electrical – Mechatronic) with Honours',
          year: 'Year 3',
          faculty: 'Faculty of Electical - Engineering',
          status: 'odd'
        }
    ]

    const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section id='electronic' className="eachDepartment">
        <div className="eachDepartment_head">
            <img src={ElectronicLogo} alt="Electronic Logo" />
        </div>
            <h2>Electronic Department</h2>
        
            <div className="head_member">
                <div
                className="headmember_picture"
                onMouseEnter={() => setHoveredMember('head')}
                onMouseLeave={() => setHoveredMember(null)}
                >
                <img
                    src={hoveredMember === 'head' ? HeadOfDepartmentImage2 : HeadOfDepartmentImage}
                    alt="Head of Electronic Department: Ong Yee Peng"
                />
                </div>
                <h3>Ong Yee Peng</h3>
                <p className='position'>Head of Department</p>
                <p className='description'>Faculty of Electrical-Engineering</p>
                <p className='description'>Year 2</p>
            </div>

        <div className="electro-member">
        {electronicMembers.map((member, index) => {
          return (
            <div
              className="electro-member_info"
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
                <p className='position'>Electronic Senior</p>
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

export default Electronic;
