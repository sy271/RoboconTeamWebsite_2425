import React, {useState} from 'react'
import './Event.css'
import Forum2016 from '../../Picture/2016/2016Forum.jpg'
import Gathering2016 from '../../Picture/2016/2016Gathering.jpg'
import JustDoIt2016 from '../../Picture/2016/2016JustDoIt.jpg'
import ABURobocon2016 from '../../Picture/2016/2016ABU.jpg'
import {TfiFacebook} from 'react-icons/tfi'
import {AiFillInstagram} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

const Event = () => {
  const eventsData = [
    {
        imgSrc: JustDoIt2016,
        title: 'Just Do It 2016',
        extra: 'https://www.facebook.com/media/set/?set=a.934228233327688&type=3',
    },
    {
        imgSrc: ABURobocon2016,
        title: 'ABU Robocon 2016',
        extra: 'https://www.facebook.com/media/set/?set=a.967586439991867&type=3',
    },
    {
        imgSrc: Forum2016,
        title: 'Forum 2016',
        extra: 'https://www.facebook.com/media/set/?set=a.1119804444770065&type=3',
    },
    {
        imgSrc: Gathering2016,
        title: 'Robocon Alumni Gathering 2016',
        extra: 'https://www.facebook.com/media/set/?set=a.1119812331435943&type=3'
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
      <h4>2016</h4>
      
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
