import React, {useState} from 'react'
import './Event.css'
import GrandDemo from '../../Picture/2012/2012GrandDemo.jpg'
import RoboconMalaysia from '../../Picture/2012/2012RoboconMalaysia.jpg'
import ABU from '../../Picture/2012/2012Abu.jpg'
import Hongkong from '../../Picture/2012/2012HongKong.jpg'
import BasicWorkshop from '../../Picture/2012/2012BasicWorkshop.jpg'
import {TfiFacebook} from 'react-icons/tfi'
import {AiFillInstagram} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

const Event = () => {
  const eventsData = [
    {
        imgSrc: GrandDemo,
        title: 'Grand Demo 2012',
        extra: 'https://www.facebook.com/media/set/?set=a.400237726709627&type=3',
    },
    {
        imgSrc: RoboconMalaysia,
        title: 'Robocon Malaysia 2012',
        extra: 'https://www.facebook.com/media/set/?set=a.400249770041756&type=3',
    },
    {
        imgSrc: ABU,
        title: 'ABU Robocon 2012',
        extra: 'https://www.facebook.com/media/set/?set=a.400939283306138&type=3',
    },
    {
        imgSrc: Hongkong,
        title: 'Hong Kong Trip 2012',
        extra: 'https://www.facebook.com/media/set/?set=a.400939283306138&type=3',
    },
    {
        imgSrc: BasicWorkshop,
        title: 'Basic Workshop 2012',
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
    <h4>2012</h4>
    
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
