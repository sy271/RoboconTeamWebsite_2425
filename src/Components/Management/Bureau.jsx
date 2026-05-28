import React, { useEffect, useState } from 'react';
import './Bureau.css'
import {BiSolidPurchaseTag} from 'react-icons/bi'
import {IoShareSocialSharp} from 'react-icons/io5'
import {FaUserFriends} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {IoGameController} from 'react-icons/io5'
import {PiBroomFill} from 'react-icons/pi'

const Bureau = () => {
    const Multimedia = [
        {
          index: 1,
          name: 'LIEW JIN YI',
          gmail: 'liewjinyi@graduate.utm.my',
          tel: '+6016-413 0625',
        },
        {
          index: 2,
          name: 'CHEN SHU YAN',
          gmail: 'chenshuyan@graduate.utm.my',
          tel: '+6017-201 1393',
        },
        {
          index: 3,
          name: 'LABIB ABDULLATIF ALSAIAD',
          gmail: 'alsaiad20@graduate.utm.my',
          tel: '+6011-1110 2830',
        },
      ]
    
      const GameManagement = [
        {
          index: 1,
          name: 'MAK ZHI HOONG',
          gmail: 'zhihoong@graduate.utm.my',
          tel: '+6017-658 1595',
        },
        {
          index: 2,
          name: 'ONG YEE PENG',
          gmail: 'ongyeepeng@graduate.utm.my',
          tel: '+6011-1052 1032',
        },
        {
          index: 3,
          name: 'ONG WEI LUN',
          gmail: 'onglun@graduate.utm.my',
          tel: '+6011-1659 0426',
        },
        {
          index: 4,
          name: 'WONG JEN YANG',
          gmail: 'wong.yang@graduate.utm.my',
          tel: '+6011-1226 6533',
        },
        {
          index: 5,
          name: 'CHIA JING XIANG',
          gmail: 'chiajingxiang@graduate.utm.my',
          tel: '+6012-806 3488',
        },
        {
          index: 6,
          name: 'MOHAMED SAIFELDIN MOHAMEDALI IBRAHIM',
          gmail: 'mohamedali20@graduate.utm.my',
          tel: '+6011-2964 5412',
        },
        {
          index: 7,
          name: 'TEE CHI YANG',
          gmail: 'teachiyang@graduate.utm.my',
          tel: '+6011-3609 8588',
        },
        {
          index: 8,
          name: 'MUBARK ELFATIH MOHAMED ABDEL-RAHMAN',
          gmail: 'mohamed.mubark@graduate.utm.my',
          tel: '+6018-250 3730',
        },
        {
          index: 9,
          name: 'MOAZ HANY ELBAKHSHA',
          gmail: 'Elsayed.moaz@graduate.utm.my',
          tel: '+6011-3704 7003',
        },
        {
          index: 10,
          name: 'KHALIFAH HADI SUBIH BA ABBAD',
          gmail: 'Subih@graduate.utm.my',
          tel: '+6017-2230588',
        },
        {
          index: 11,
          name: 'AMR MOHAMED FATHY ABDELKADER ELBERMAWY',
          gmail: 'fathya1@graduate.utm.my',
          tel: '6013-243 2340'
        },
        {
          index: 12,
          name: 'AHMED MOHAMED ELNOUR MOHAMED',
          gmail: 'ahmedmohamedelnour@graduate.utm.my',
          tel:'011-60858589'
        }
      ]
    
      const Partnership = [
        {
          index: 1,
          name: 'IVY LING HOCK HONG',
          gmail: 'ivylinghock@graduate.utm.my',
          tel: '+6017-307 1967',
        },
        {
          index: 2,
          name: 'ENNIS LAM SI HOONG',
          gmail: 'ennis@graduate.utm.my',
          tel:'+6018-665 9511',
        },
        {
          index: 3,
          name: 'AHMED AMIR EZALDIN AZRAG',
          gmail: 'amirezaldin@graduate.utm.my',
          tel: '+6011-6229 1047',
        }
      ]
    
      const Puchasing = [
        {
          index: 1,
          name: 'MOH NIAN CHUN',
          gmail: 'mohnianchun@graduate.utm.my',
          tel: '+6011-3155 6877',
        },
        {
          index: 2,
          name: 'NGU JIA KANG',
          gmail: 'ngujiakang@graduate.utm.my',
          tel: '+6010-536 1782',
        },
      ]
    
      const Mantainance = [
        {
          index: 1,
          name: 'HASSAN MURTADA HASSAN ABDALLA',
          gmail: 'hassan.h@graduate.utm.my', 
          tel: '+6012-352 6362',
        },
        {
          index: 2,
          name: 'MUHAMMAD EIMAN HAKIM BIN ABDULLAH',
          gmail: 'muhammadeimanhakim@graduate.utm.my',
          tel: '+6011-3540 2215',
        }
      ]
    
      const Inventory = [
        {
          index: 1,
          name: 'NG PING SHEAN',
          gmail: 'ngshean@graduate.utm.my', 
          tel: '+6018-966 0335',
        },
        {
          index: 2,
          name: 'ABUBAKR MOHAMMED ABDELHALIM MAHMOUD',
          gmail: 'abdelhalim@graduate.utm.my',
          tel: '+6012-352 6371',
        }
      ]
      const bureaus1 = [
        {
          title: 'Multimedia',
          icon: <IoShareSocialSharp className="bureau_icon" />,
          data: Multimedia,
          staus: 'dark',
        },
        {
          title: 'Partnership',
          icon: <FaUserFriends className="bureau_icon" />,
          data: Partnership,
          gmail: 'rbcutmpartnership@gmail.com',
          status: 'light'
        },
        {
          title: 'Purchasing',
          icon: <BiSolidPurchaseTag className="bureau_icon" />,
          data: Puchasing,
          status: 'dark'
        },
        {
            title: 'Maintainance & Inventory',
            icon: <div><FaTools className = "bureau_icon"/>< PiBroomFill className = "bureau_icon" /></div>, //how??? to pur tgt in a whole
            data: [ ...Mantainance, ... Inventory],
            status: 'light'
        },
        {
            title: 'Game Management',
            icon: <IoGameController className="bureau_icon" />,
            data: GameManagement,
            status: 'dark'
        },
      ];
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

      // Update windowWidth when the window size changes
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const isSmallScreen = windowWidth <= 700;

return (
    <section id="bureau">
        <div className="bureau-title">
        <h3>Bureau Board</h3>
        </div>
    <div className="container bureau-container">
        {bureaus1.map((bureau, index) => (
          <div className={`bureau ${bureau.status === 'light' ? 'status-light' : 'status-dark'}`} key={index}>
            <div className="bureau-smalltitle">
              <h3>{bureau.title}</h3>
            </div>
            {bureau.gmail ? ( // Check if the bureau has a link
              <a href='mailto:{bureau.gmail}'>
                <div className={`bureau-logo ${bureau.gmail ? 'gmail-have' : 'gmail-no'}`}>
                {bureau.icon}
              </div>
              </a>
            )  : (
            <div className={`bureau-logo ${bureau.gmail ? 'gmail-have' : 'gmail-no'}`}>
              {bureau.icon}
            </div>
            )}
            {!isSmallScreen || bureau.gmail ? (
              <div className="bureau_gmail">
                <a href={`mailto:${bureau.gmail}`}>
                  <p>
                    <b>{bureau.gmail}</b>
                  </p>
                </a>
              </div>
            ) : null}
            {bureau.data.map((person, index) => (
              <div className="bureau_person" key={index}>
                <p><b>{person.name}</b></p>
                <p>
                  <a href={`mailto:${person.gmail}`}>{person.gmail}</a>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bureau