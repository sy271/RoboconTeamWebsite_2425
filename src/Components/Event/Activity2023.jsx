import React ,{ useState } from 'react';
import './Event.css'
import OpenHouse2023 from '../../Picture/2023/2023OpenHouse.JPG'
import RoboconMAlaysia2023 from '../../Picture/2023/2023RoboconMalaysia.JPG'
import MyRobot2023 from '../../Picture/2023/2023MyRobot.JPG'
import VitroxVisit2023 from '../../Picture/2023/2023VitroxVisit.JPG'
import Gathering2023 from '../../Picture/2023/2023Gathering.JPG'
import Faulhaber2023 from '../../Picture/2023/2023Faulhaber.jpg'
import MiniGame2023 from '../../Picture/2023/2023MiniGame.JPG'
import Merdeka2023 from '../../Picture/2023/2023Merdeka.JPG'
import IceSkating from '../../Picture/2023/2023IceSkating.JPG'
import FarewellParty from '../../Picture/2023/2023FarewellParty.JPG'
import ABU from '../../Picture/2023/2023RohmAward.jpeg'
import RTM from '../../Picture/2023/2023RTMShooting.jpeg'
import Junior from '../../Picture/2023/2023Welcoming.JPG'
import TJU from '../../Picture/2023/2023TJUxUTM.JPG'
import JuniorTraining from '../../Picture/2023/2023JuniorTraining.jpeg'
import PenangTrip from '../../Picture/2023/2023Penang.JPG'
import DepartmentTraining from '../../Picture/2023/2023DepartmentTraining.JPG'
import LabCleaning from '../../Picture/2023/2023LabCleaning.jpg'
import MidAutumn from '../../Picture/2023/2023MidAutumn.jpg'
import TSH1 from '../../Picture/2023/2023TSHIndustrialVisit.jpg'
import TSH2 from '../../Picture/2023/2023FineTechIndustrialVisit.jpg'
import SMKotaTinggi from '../../Picture/2023/2023SMKotaTinggi.jpg'
import Unbocs from '../../Picture/2023/2023Unbocs.jpeg'
import BasicWorkshop from '../../Picture/2023/2023BaiscWorkshop.jpg'
import AutorMentorMentee from '../../Picture/2023/2023AutorMentorMentee.jpg'
import AutocarChallenge from '../../Picture/2023/2023AutocarCompetition.jpeg'
import WinterSolticeDay from '../../Picture/2023/2023Winter.jpg'
import {TfiFacebook} from 'react-icons/tfi'
import {AiFillInstagram} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

const Event = () => {
  const eventsData = [
    {
      imgSrc: JuniorTraining,
      title: 'Junior Training 2023',
    },
    {
      imgSrc: Junior,
      title: 'Junior Welcoming Party 2023',
    },
    {
      imgSrc: DepartmentTraining,
      title: 'Department Training 2023',
    },
    {
      imgSrc: MiniGame2023,
      title: 'Mini Game 2023',
    },
    {
      imgSrc: OpenHouse2023,
      title: 'Dr Ridzuan Open House 2023',
      instagram: 'https://www.instagram.com/p/CsfqAFsyJKU/?igshid=MzRlODBiNWFlZA=',
    },
    {
      imgSrc: MyRobot2023,
      title: 'International Youth Robotics Competition(IYRC) 2023',
      instagram: 'https://www.instagram.com/p/CtEuNgeS5H6/?igshid=MzRlODBiNWFlZA==',
    },
    {
      imgSrc: RoboconMAlaysia2023,
      title: 'Robocon Malaysia 2023',
      facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0NgrkuSSvKJAsbtUGhJZjTJpq94t6QgEpx6WzRxoesB3jtxAidSPLnxccsuoARLeVl&id=100057174472712&mibextid=Nif5oz',
      instagram: 'https://www.instagram.com/p/Ctk3Za8Sn7M/?igshid=MzRlODBiNWFlZA==',
    },
    {
      imgSrc: Gathering2023,
      title: 'Robocon member Gathering 2023',
    },
    {
      imgSrc: VitroxVisit2023,
      title: 'Industrial Visit ViTrox 2023',
      instagram: 'https://www.instagram.com/p/CtinpLPytA6/?igshid=MzRlODBiNWFlZA==',
    },
    {
      imgSrc: PenangTrip,
      title: 'Penang Trip 2023',
    },
    {
      imgSrc: Faulhaber2023,
      title: 'Lab Visit from Faulhaber 2023',
    },
    {
      imgSrc: RTM,
      title: 'RTM Shooting 2023',
    },
    {
      imgSrc: IceSkating,
      title: 'Ice Skating 2023',
    },
    {
      imgSrc: FarewellParty,
      title: 'Farewell Party 2023',
    },
    {
      imgSrc: Merdeka2023,
      title: 'Independence Day 2023',
    },
    {
      imgSrc: TJU,
      title: 'TJU X UTM 2023',
    },
    {
      imgSrc: ABU,
      title: 'ABU Robocon 2023',
    },
    {
      imgSrc: LabCleaning,
      title: 'Lab Cleaning 2023',
    },
    {
      imgSrc: TSH1,
      title: 'Industrial Visit to TSH Contract Manufacturing 2023',
    },
    {
      imgSrc: TSH2,
      title: 'Industrial Visit to FINETECH PRECISION 2023',
    },
    {
      imgSrc: MidAutumn,
      title: 'Mid-Autumn Festival 2023',
    },
    {
      imgSrc: SMKotaTinggi,
      title: 'Lab Visit from SM Sains Kota Tinggi 2023',
    },
    {
      imgSrc: Unbocs,
      title: 'UNBOCS 2023',
    },
    {
      imgSrc: BasicWorkshop,
      title: 'Basic Workshop 2023',
    },
    {
      imgSrc: AutorMentorMentee,
      title: 'Author Mentor Mentee 2023',
    },
    {
      imgSrc: AutocarChallenge,
      title: 'Autocar Competition 2023',
    },
    {
      imgSrc: WinterSolticeDay,
      title: 'Winter Soltice Day 2023',
    },
  ];
  const [isImageFullSize, setIsImageFullSize] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const toggleImageFullSize = (imageUrl) => {
    setIsModalOpen(!isModalOpen);
    setSelectedImage(imageUrl);
  };
  
  const handleImageClick = (e) => {
    if (e.target.classList.contains('modal-img')) {
      setIsModalOpen(true);
      return;
    }
    if (e.target.classList.contains('modal-content')) {
      setIsModalOpen(false);
      return;
    }
    if (e.target.classList.contains('modal')) {
      setIsModalOpen(false);
      return;
    }
    if (e.target.classList.contains('close')) {
      setIsModalOpen(false);
      return;
    }
  };
  
  return (
    <section id='event'>
      <h4>2023</h4>
      
      {eventsData.length > 0 && (
      <div className='container event_container'>
        {eventsData.map((event, index) => (
          <article className='event_item' key={index}>
            <div className='event_item-img'>
            <img
                  src={event.imgSrc}
                  alt={event.title}
                  className={isImageFullSize === event.imgSrc ? 'full-screen' : ''}
                  onClick={() => toggleImageFullSize(event.imgSrc)}
              />
            </div>
            <h3>{event.title}</h3>
            <div>
            {event.facebook && (
              <>
              <div className='event_btn'>
              <a href={event.facebook} className="btn btn-same " target="_blank">FaceBook</a>
              </div>
              </>
              )}
              {event.instagram && (
                <>
                <div className='event_btn'>
                <a href={event.instagram} className="btn btn-same event_btn" target="_blank">Instagram</a>
                </div>
                </>
                )}
                {event.extra && (
                  <>
                  <div className='event_btn'>
                  <a href={event.extra} className="btn btn-same event_btn" target="_blank">Other</a>
                  </div>
                  </>
                  )}
              </div>
              <div className='event_ICON'>
            {event.facebook && (
              <>
              <a href={event.facebook} className='event_icon' target="_blank"><TfiFacebook /></a>
              </>
              )}
              {event.instagram && (
                <>
                <a href={event.instagram} className='event_icon' target="_blank"><AiFillInstagram /></a>
                </>
                )}
                {event.extra && (
                  <>
                  <a href={event.extra} className="event_icon" target="_blank"><BiPlus/></a>
                  </>
                  )}
                  </div>
          </article>
        ))}
      </div>
      )}
      {isModalOpen && (
        <div
          className={`modal ${isModalOpen ? 'open' : ''}`}
          onClick={handleImageClick}
        >
          <span className="close" onClick={handleImageClick}>
            &times;
          </span>
        <div className="modal-content">
          <img className="modal-img"src={selectedImage} alt="Enlarged Image" />
        </div>
      </div>
      
      )}

    </section>
  );
}

export default Event;
