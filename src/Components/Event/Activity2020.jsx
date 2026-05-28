import React, {useState} from 'react'
import './Event.css'
import ActionXUTMRBC2020 from '../../Picture/2020/2020ActionXUTM2.jpg'
import FrontLine2020 from '../../Picture/2020/2020Frontline-19HealthScreeningSystem.jpg'
import HkustXUTMRBC2020 from '../../Picture/2020/2020HkustXUTM.jpg'
import MasukIPT2020 from '../../Picture/2020/2020MasukIPT.jpg'
import OpenCVWorkshop2020 from '../../Picture/2020/2020OpenCVWorkshop.jpg'
import OpenVirtualHackathon2020 from '../../Picture/2020/2020OpenVirtualHackathon.jpg'
import RoboconMalaysia2020 from '../../Picture/2020/2020RoboconMalaysia.png'
import TechnicalBriefingRoboconMalaysia2020 from '../../Picture/2020/2020TechnicalBriefingRoboconMalaysia.jpg'
import TUTXUTMRBC2020 from '../../Picture/2020/2020TUTxUTM.jpg'
import UnityWorkshop2020 from '../../Picture/2020/2020UnityWorkshop.png'
import WebWorkshop2020 from '../../Picture/2020/2020WebDevelopmentWorkshop.jpg'
import {TfiFacebook} from 'react-icons/tfi'
import {AiFillInstagram} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

const Event = () => {
  const eventsData = [
    {
        imgSrc: MasukIPT2020,
        title: 'Masuk ke IPT 2020',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid02pFw9QKxzrxP1dQR7inD4HRMuCKDxDcbsw7J1y8tVXNgSymrU96DKRSBYLLC572uHl&id=506571616093354&mibextid=Nif5oz',
        other: 'https://www.facebook.com/media/set/?set=a.2849492668467892&type=3',
    },
    {
        imgSrc: WebWorkshop2020,
        title: 'Web Development Workshop 2020',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid02TLAzusqnxkcXLQmVD9aNooosSpZGPuqFNHsJeSZhc6MkZpUxxiZ6j89ou5DnBZNRl&id=506571616093354&mibextid=Nif5oz',
        extra: 'https://www.facebook.com/media/set/?set=a.2849554948461664&type=3',
    },
    {
        imgSrc: FrontLine2020,
        title: 'Frontline 19 Health Screening System',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid02tENH7xTTieP5tCk128YYCHSRo4ypfhvwPxkA3HNS4wphSJPaVVVV5jsTDgqcLiU7l&id=506571616093354&mibextid=Nif5oz',
    },
    {
        imgSrc: OpenVirtualHackathon2020,
        title: 'Open Virtual Hackathon 2020',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0k7nL5tCkorfyUGhn1BzmMmEgjpTDMALY1ZKgLvopz1yk1Fom7GW43Fms5MshBHTgl&id=506571616093354&mibextid=Nif5oz',
    },
    {
        imgSrc: OpenCVWorkshop2020,
        title: 'OpenCV Workshop 2020',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0fmQ2RX1bM1v2sPv79wBRPProt4BtjcYjRbEBuzPh253fRbLMqPk4jKE4Sukq6qxsl&id=506571616093354&mibextid=Nif5oz',
    },
    {
        imgSrc: UnityWorkshop2020,
        title: 'Unity Workshop 2020',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0QmRvSJS1nv3nNay8azy7Dg812vnsWvjCXpZ2XGj5LggumhtKSFsUoC7v1pumzjghl&id=506571616093354&mibextid=Nif5oz',
    },
    {
      imgSrc: HkustXUTMRBC2020,
      title: 'HKUST X UTM RBC 2020',
      facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid02Btefv11rL1t4KMZJJhyqvbPj1AbY5cG8zTxd6z1EuXRcx9Ugn9VMdLFnPFyX7BpDl&id=506571616093354&mibextid=Nif5oz',
    },
    {
        imgSrc: ActionXUTMRBC2020,
        title: 'Action X UTM RBC 2020',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0i556QpSqWYYXXDDnZYc8DRtN99kJmoVMyW5aXhqCZjDFCStDzQjDMt1YkZMSHcXAl&id=506571616093354&mibextid=Nif5oz',
    },
    {
        imgSrc: TUTXUTMRBC2020,
        title: 'TUT Robocon X UTM RBC 2020',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0AmEaX4U7WMPPu4j1H3qAGURQAUHWstrbCYjcqrcK7sJfC7ZsXnBzNbhrmkeYNPj9l&id=506571616093354&mibextid=Nif5oz',
    },
    {
        imgSrc: TechnicalBriefingRoboconMalaysia2020,
        title: 'Technical Briefing Robocon Malaysia 2020',
        other: 'https://www.facebook.com/media/set/?set=a.2849466551803837&type=3',
    },
    {
        imgSrc: RoboconMalaysia2020,
        title: 'Robocon Malaysia 2020',
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
      <h4>2020</h4>
      
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
