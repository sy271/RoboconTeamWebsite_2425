import React from 'react'
import './Department.css'
import {BsCheck2Circle} from 'react-icons/bs'
import MechanismLogo2 from '../../Picture/LogoClub/MechanismLogo2.png'
import ElectronicLogo from '../../Picture/LogoClub/Electronic.png'
import ProgrammingLogo from '../../Picture/LogoClub/Programming.png'

const department = () => {
  return (
    <section id='department' className='departmentTask top'>
      <h5>What we learned?</h5>
      <h2>Task Distribution</h2>
<div>
      <div className='container department_container'>
        <a className='department' href='#programming'>
          <div className='department_head' >
              <img src={ProgrammingLogo} alt='Programming Logo' className='department_logo' />
            <h3><b>Programming</b></h3>
          </div>
          <ui className='department_list'>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Image Processing</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Robot Navigation System</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Positioning Sensor</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Web Development</p>
            </li>
          </ui>
        </a>

        <a className='department' href='#mechanism'>
          <div className='department_head'>
              <img src={MechanismLogo2} alt='Mechanism Logo' className='department_logo' />
            <h3><b>Mechanism</b></h3>
          </div>
          <ui className='department_list'>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Design robot <br/> (SolidWorks)</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>3D Printing</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Motor</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Pneumatic Cylinder</p>
            </li>
          </ui>
        </a>

        <a className='department' href='#electronic'>
          <div className='department_head'>
              <img src={ElectronicLogo} alt='Electronic Logo' className='department_logo' />
            <h3><b>Electronic</b></h3>
          </div>
          <ui className='department_list'>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>PCB Design</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Soldering</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Wiring</p>
            </li>
            <li>
              <BsCheck2Circle className='department_list-icon' />
              <p>Modify Embedded System</p>
            </li>
          </ui>
        </a>
      </div>
      </div>
      <br/>
        </section>
  )
}

export default department