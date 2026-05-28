import React, {useState} from 'react'
import './Event.css'
import BasicWorkshop2015 from '../../Picture/2015/2015BasicWorkshop.jpg'
import Autocar2015 from '../../Picture/2015/2015Autocar.jpg'
import AutocarCompetition2015 from '../../Picture/2015/2015AutocarCompetition.jpg'
import KTC2015 from '../../Picture/2015/2015KTC.jpg'
import RTMShooting2015 from '../../Picture/2015/2015RTMShooting.jpg'
import {TfiFacebook} from 'react-icons/tfi'
import {AiFillInstagram} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

const Event = () => {
  const eventsData = [
    {
        imgSrc: KTC2015,
        title: 'Recruitment(KTC) 2015',
        extra: 'https://www.facebook.com/media/set/?set=a.867315336685645&type=3',
    },
    {
        imgSrc: BasicWorkshop2015,
        title: 'Basic Workshop 2015',
        extra: 'https://www.facebook.com/media/set/?set=a.876070719143440&type=3',
    },
    {
        imgSrc: Autocar2015,
        title: 'Autocar Mentor-Mentee 2015',
        extra: 'https://www.facebook.com/media/set/?set=a.879326295484549&type=3',
    },
    {
        imgSrc: AutocarCompetition2015,
        title: 'Autocar Competition 2015',
        extra: 'https://www.facebook.com/media/set/?set=a.889749561108889&type=3',
    },
    {
        imgSrc: RTMShooting2015,
        title: 'RTM Shooting 2015',
        extra: 'https://www.facebook.com/media/set/?set=a.906880606062451&type=3'
    }
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
      <h4>2015</h4>
      
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
