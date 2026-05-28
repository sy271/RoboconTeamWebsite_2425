import React from 'react'
import './Autocar.css'
import '../../Components/Plan/Plan.css'
import GameField1 from '../../Document/Autocar/GameField1.png'
import GameField2 from '../../Document/Autocar/GameField2.png'
import GameField3 from '../../Document/Autocar/GameField3.png'
import Faq from '../Faq/AutocarFaq'
import QR from '../../Document/Recruitment/Register.png';
import { Link } from 'react-router-dom';

const Autocar = () => {
  return (
    <section id="autocar" className='top'>
        <h5>Have an interest in Autocar?</h5>
        <h2>Autocar Competition 2023</h2>
        
      <div className='container autocar_container'>
        {/* <div className='btn plan_btn'>
          <Link to='https://me-qr.com/vXLFC1Sk'><p>Register Now</p></Link>
          <img src={QR} alt='Register QR Code' />
        </div> */}
        <div className='autocar_btn'>
          <a href="#gameRules" className='btn btn-primary btn-autocar'>Game Rules</a>
          <a href="#prize" className='btn btn-primary btn-autocar'>Prize</a>
          <a href="#faq" className='btn btn-primary btn-autocar'>FAQ</a>
        </div>
        <div className='autocar_gamerules' id='gameRules'>
          <div className='autocar_title'>
          <h3>Game Rules</h3>
          </div>
        <a href="../../Document/Autocar/GameRules.pdf" download="GameRules.pdf">
          <button className='btn btn-primary btn-autocar'>Download GameRule</button>
        </a>
          <div className='autocar_card'>
            <div className='autocar_card-content'>
              <br/>
              <img src={GameField1} alt='GameField1' />
              <h3>Game Field Stage 1</h3>
              <br/>
            </div>
            <div className='autocar_card-content'>
              <br/>
              <img src={GameField2} alt='GameField2' />
              <h3>Top View of Game Field Stage 1</h3>
              <br/>
            </div>
            <div className='autocar_card-content'>
              <br/>
              <img src={GameField3} alt='GameField3' />
              <h3>Game Field Stage 2</h3>
              <br/>
            </div>
          </div>
        </div>
          
          
        <div className='autocar_prize' id='prize'>
          <div className='autocar_title'>
            <h3>Prize</h3>
          </div>
          <div className='autocar_prize-content'>
            <div className='autocar_prize-card'>
              <h2>Champion</h2>
              <ul>
                <li>Trophy</li>
                <li>Souvenir</li>
                <li>UTM Merit</li>
              </ul>
            </div>
            <div className='autocar_prize-card'>
              <h2>First Runner-Up</h2>
              <ul>
                <li>Trophy</li>
                <li>Souvenir</li>
                <li>UTM Merit</li>
              </ul>
            </div>
            <div className='autocar_prize-card'>
              <h2>Second Runner-Up</h2>
              <ul>
                <li>Trophy</li>
                <li>Souvenir</li>
                <li>UTM Merit</li>
              </ul>
            </div>
            <div className='autocar_prize-card'>
              <h2>Best Design Award</h2>
              <ul>
                <li>Trophy</li>
                <li>Souvenir</li>
                <li>UTM Merit</li>
              </ul>
            </div>
            <div className='autocar_prize-card'>
              <h2>Completer</h2>
              <ul>
                <li>Souvenir</li>
                <li>UTM Merit</li>
              </ul>
            </div>
            <div className='autocar_prize-card'>
              <h2>Participant</h2>
              <ul>
                <li>UTM Merit</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='autocar_faq' id='faq'>
          <div className='autocar_title'>
            <h3>FAQ</h3>
            </div>
          <Link to="./Document/Autocar/GameRules.pdf" >
            <button className='btn btn-primary btn-autocar'>Ask Question</button>
          </Link>
          <Faq /> 
        </div>
      </div>
    </section>
  )
}

export default Autocar