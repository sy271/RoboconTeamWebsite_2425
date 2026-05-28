import React, {useState} from 'react'
import './Event.css'
import VisitVitrox2022 from '../../Picture/2022/2022VisitVitrox.jpg'
import RoboconMalaysia2022 from '../../Picture/2022/2022RoboconMalaysia.jpg'
import BasicWorkshop2022 from '../../Picture/2022/2022BasicWorkshop.jpg'
import Autocar2022 from '../../Picture/2022/2022Autocar.jpg'
import AutocarCompetition2022 from '../../Picture/2022/2022AutocarCompetition.jpg'
import KoreaLabVisiting2022 from '../../Picture/2022/2022LabVisiting.jpg'
import AntiDadah2022 from '../../Picture/2022/2022GimikAnti-dadah.JPG'
import MidAutumn from '../../Picture/2022/2022MidAutumn.jpeg'
import {TfiFacebook} from 'react-icons/tfi'
import {AiFillInstagram} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

const Event = () => {
  const eventsData = [
    {
        imgSrc: MidAutumn,
        title: 'Mid-Autumn Festival 2022',
    },
    {
        imgSrc: AntiDadah2022,
        title: 'Anti-Drug Campaign 2022',
    },
    {
        imgSrc: BasicWorkshop2022,
        title: 'Basic Workshop 2022',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0Vzp6PRy85w4dV32Haive8NnKf7tK5ZrzAj297y1aFzuS6Gh1KX8Tn6hpU6nUYivYl&id=100057174472712&mibextid=Nif5oz',
        instagram: 'https://www.instagram.com/p/CnUiNelvWeW/?igshid=MzRlODBiNWFlZA==',
        other: 'https://www.instagram.com/p/CnUiEAjP2pN/?igshid=MzRlODBiNWFlZA==',
    },
    {
        imgSrc: Autocar2022,
        title: 'Autocar Mentor-Mentee 2022',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0hs48peJpfuPma5RZy4W77uVcLRrLYvjWHbrJFdbQcBiY51ZnETs6iuAR5ZPzmXPDl&id=100057174472712&mibextid=Nif5oz',
    },
    {
        imgSrc: AutocarCompetition2022,
        title: 'Autocar Competition 2022',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0hs48peJpfuPma5RZy4W77uVcLRrLYvjWHbrJFdbQcBiY51ZnETs6iuAR5ZPzmXPDl&id=100057174472712&mibextid=Nif5oz',
        instagram: 'https://www.instagram.com/p/CnUiprBvu9L/?igshid=MzRlODBiNWFlZA==',
        other: 'https://www.instagram.com/p/CnUjPvLP2TH/?igshid=MzRlODBiNWFlZA==',
    },
    {
        imgSrc: KoreaLabVisiting2022,
        title: 'Lab Visit By Korean Ulsan Meister High School Boys 2022',
        facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid02KPJZRyPAN6zTRKWBKF3TUGsRWSbgz3kXg36MTPZc3rf62TEGCcVEpqCMDneWU7Qgl&id=100057174472712&mibextid=Nif5oz',
        instagram: 'https://www.instagram.com/p/CnUji9GvgvT/?igshid=MzRlODBiNWFlZA=',
    },
    {
      imgSrc: RoboconMalaysia2022,
      title: 'Robocon Malaysia 2022',
      facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0tLA5K9znCEuQczB3Bk4q3FWC8CvSDaULvNr2YVafHLanffZyN9NLUxkcJNuX78hJl&id=506571616093354&mibextid=Nif5oz',
    },
    {
      imgSrc: VisitVitrox2022,
      title: 'Industrial Visit Vitrox 2022',
      facebook: 'https://m.facebook.com/story.php?story_fbid=pfbid0UVmwmnZYtfqEXBm5TYEJCcsD9pLJmvChKbVHRcxqqWMAu981xJwaEGYPpPYB62Z8l&id=100057174472712&mibextid=Nif5oz',
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
      <h4>2022</h4>
      
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
