import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './PopUp.css';
import CountDown from './CountDown/CountDown';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import BasicWorkshop from '../../Document/Recruitment/Recruitment.png';
import Autocar from '../../Document/Recruitment/Autocar2.png';
import RoboconMalaysia from '../../Picture/2023/2023FullRoboconMalaysia.JPG';
import Abu from '../../Picture/2023/2023RohmAward.jpeg';
import ABU2024 from '../../Picture/2024/2024ABUAward.JPG';
import Video from './Video/Video';
import {ImCross} from 'react-icons/im';

const PopUp = ({ closePopUp }) => {
  const targetDateTimeBasicWorkshop = '2023-10-27T08:00:00';
  const targetDateTimeAutocar = '2023-11-03T00:00:00';
  const targetDateTimeAutocarCompetition = '2023-11-25T08:00:00';

  const UpcomingCard = [
    {
      slide: '1',
      title: 'Introduction to UTM RBC',
      venue: <div className="venue-content">Experience is Our Credit, <br/>Excellence is Our Practice.</div>,
      video: <Video/>,
    },
    // {
    //   slide: '2',
    //   title: 'Basic Workshop 2023',
    //   status: 'reqruitment',
    //   countDown: <CountDown targetDateTime={targetDateTimeBasicWorkshop} />,
    //   picture: BasicWorkshop,
    //   link: ' https://forms.gle/NGB3xJgbXdqqikjD7',
    // },
    // {
    //   slide: '3',
    //   title: 'Autocar 2023',
    //   status: 'reqruitment',
    //   picture: Autocar,
    //   countDown: <CountDown targetDateTime={targetDateTimeAutocar} />,
    //   link: ' https://forms.gle/NGB3xJgbXdqqikjD7',
    // },
    {
      slide: '3',
      title: 'Robocon Malaysia 2024',
      venue: <ul><li><b>Achievements</b></li> <li>Panasonic Connect Award</li></ul>,
      picture: ABU2024,
    },
    {
      slide: '4',
      title: 'Robocon Malaysia 2023',
      venue: <ul><li><b>Achievements</b></li> <li>Champion</li> <li>First Runner Up</li> <li>Best Team Award</li> <li>Best Engineering Award</li> <li>Best Technology Award</li></ul>,
      picture: RoboconMalaysia,
    },
    {
      slide: '5',
      title: 'ABU Robocon 2023',
      venue: <ul><li><b>Achievements</b></li> <li>Rohm Award</li></ul>,
      picture: Abu,
    },/*
    {
      slide: '6',
      title: 'Autocar Competition 2023',
      date: 'Date: 25th November 2023',
      venue: 'Venue: P10, FKE, UTM Johor Bahru',
      status: 'reqruitment',
      countDown: <CountDown targetDateTime={targetDateTimeAutocarCompetition} />,
      link: '/autocar',
    }*/

  ];
  
  const [isOpen, setIsOpen] = useState(true); // Initially open
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageFullSize, setIsImageFullSize] = useState(false);

  // Debug popup state
  useEffect(() => {
    console.log('PopUp component mounted, isOpen:', isOpen);
    // Hardware acceleration removed as requested
  }, [isOpen]);

  const toggleImageSize = () => {
    const imageUrl = UpcomingCard[currentIndex].picture;
    if (imageUrl) {
      // Open image in new tab instead of navigating away
      window.open(imageUrl, '_blank');
    }
  };
  
  const handleClose = () => {
    console.log('Closing popup from within component');
    setIsOpen(false);
    closePopUp(); // Call the parent's closePopUp function
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? UpcomingCard.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === UpcomingCard.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePopupClick = (event) => {
    // Only close if clicking directly on the overlay background
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  // Return null if not open
  if (!isOpen) {
    return null;
  }

  // Check if current slide has video
  const hasVideo = Boolean(UpcomingCard[currentIndex].video);

  return (
    <div className="popup" onClick={handlePopupClick}>
      <div className="popup-content">
        <button className='closeButton bottom' onClick={handleClose}>
          <ImCross/>
        </button>
        <h2>{UpcomingCard[currentIndex].title}</h2>
        {UpcomingCard[currentIndex].date && <p>{UpcomingCard[currentIndex].date}</p>}
        {UpcomingCard[currentIndex].venue && <div className="venue-wrapper">{UpcomingCard[currentIndex].venue}</div>}
        {UpcomingCard[currentIndex].countDown && <div className="countdown-wrapper">{UpcomingCard[currentIndex].countDown}</div>}
        <div className={`popupImg ${hasVideo ? 'video-slide' : ''}`}>
          <button className='popUpBut popUpButLeft' onClick={handlePrevClick}>
            <BsFillArrowLeftCircleFill />
          </button>
          {UpcomingCard[currentIndex].picture ? (
            <img
              src={UpcomingCard[currentIndex].picture}
              className={`${isImageFullSize ? 'full-screen' : ''} ${
                UpcomingCard[currentIndex].status === 'reqruitment' ? 'req_img' : 'popup-image'
              }`}
              onClick={toggleImageSize}
              alt={UpcomingCard[currentIndex].title}
            />
          ) : (
            UpcomingCard[currentIndex].video
          )}
          <button className='popUpBut popUpButRight' onClick={handleNextClick}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        {UpcomingCard[currentIndex].link && (
          <div className='popup-button'>
            <a className='btn' onClick={handleClose} href={UpcomingCard[currentIndex].link}>Register</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUp;
