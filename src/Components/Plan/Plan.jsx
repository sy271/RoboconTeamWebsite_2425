// plans.js

import React from 'react';
import './Plan.css';
import QR from '../../Document/Recruitment/Register.png';
import {Link} from 'react-router-dom';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {AiOutlineCar} from 'react-icons/ai';
import {BsCheck2All} from 'react-icons/bs';
import {TiTick} from 'react-icons/ti';
import {ImCross} from 'react-icons/im';

const plans = () => {
  const Package = [
    {
      id: 1,
      name: "Basic Workshop",
      logo: <FaChalkboardTeacher/>,
      price: "RM 35",
      description: "A robot building and programming workshop gives participants a foundational understanding of the subject as well as practical practice. ",
      features: [
        { feature: 'Basic Workshop', available: true },
        { feature: 'Autocar', available: false },
      ]
    },
    {
      id: 2,
      name: "All in One",
      logo: <BsCheck2All/>,
      price: "RM 250",
      description: "Apply the skills you learned in Basic Workshop to build your own automatic or manual line-following vehicle.",
      features: [
        { feature: 'Basic Workshop', available: true },
        { feature: 'Autocar', available: true },
      ]
    },
    {
      id: 3,
      name: "Autocar",
      logo: <AiOutlineCar/>,
      price: "RM 220",
      description: "With effort and perseverance, you can construct your own car in a month.",
      features: [
        { feature: 'Basic Workshop', available: false },
        { feature: 'Autocar', available: true },
      ]
    },
  ]

  return (
    <section id="plans" className='top'>
      <h5>Get to Know</h5>
      <h2>What is our program?</h2>
      <Link to='https://forms.gle/NGB3xJgbXdqqikjD7' className='plans_title '>
        <h3>Exciting Announcement:</h3>
        <p>Be among the first 200 All-in-One participants before October 22 and receive a complimentary Addon Proskit Soldering Gun Set worth RM35!</p>
      </Link>

      <div className='container plans_container'>
        {Package.map((item) => {
          return (
            <Link to='https://forms.gle/NGB3xJgbXdqqikjD7' key={item.id} className='plans_card'>
              <div className='plans_logo'>
                {item.logo}
              </div>
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
              <p>{item.description}</p>
              <ul>
                {item.features.map(({ feature, available }, index) => {
                  return (
                    <li key={index} className={!available ? 'disabled' : ''}>{feature}</li>
                  );
                })}
              </ul>
              <div className='btn choose_btn'> 
                <Link to='https://forms.gle/NGB3xJgbXdqqikjD7'>Choose Plan</Link>
              </div>
            </Link>
          );
        })}
      </div>
        <a href='https://forms.gle/NGB3xJgbXdqqikjD7' className='btn plan_btn'>
          <p>Register Now</p>
          <img src={QR} alt='Register QR Code' />
        </a>
    </section>
    
  )
}

export default plans;
