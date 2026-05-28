import React, { useState, useEffect } from 'react';
import './PopUp.css';
import CountDown from './CountDown/CountDown';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import ABURobocon from '../../Picture/2023/2023RohmAward.jpeg';
import Champion from '../../Picture/2023/2023Champion.JPG';
import FirstRunnerUp from '../../Picture/2023/2023FirstRunnerUp.JPG';

const PopUp = () => {

  const UpcomingCard = [
    {
      title: 'ABU Robocon 2023',
      prize: 'Rohm Award',
      picture: ABURobocon,
    },
    {
      title: 'Robocon Malaysia 2023',
      prize: 'Champion',
      picture: Champion,
    },
    {
        title: 'Robocon Malaysia 2023',
        prize: 'First Runner Up',
        picture: FirstRunnerUp,
    },
  ];

  const [isOpen, setIsOpen] = useState(true); // Initially open
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageFullSize, setIsImageFullSize] = useState(false);

  const toggleImageSize = () => {
    const imageUrl = UpcomingCard[currentIndex].picture;
  
    // Set the window's location to the image URL, effectively replacing the content
    window.location.href = imageUrl;
  };
    
  
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? UpcomingCard.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === UpcomingCard.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // This effect will run when the component is mounted
    // Set a timeout to automatically close the pop-up after a certain time
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 50000000); // Adjust the time (in milliseconds) to your preference

    return () => {
      // This cleanup function will run when the component is unmounted
      clearTimeout(timer); // Clear the timeout to avoid any memory leaks
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>{UpcomingCard[currentIndex].title}</h2>
            <p>{UpcomingCard[currentIndex].date}</p>
            <div className='popup-image'>
              <button className='popUpBut' onClick={handlePrevClick}>
                <BsFillArrowLeftCircleFill />
              </button>
              <img
                src={UpcomingCard[currentIndex].picture}
                className={isImageFullSize ? 'full-screen' : ''}
                onClick={toggleImageSize}
              />
              <button className='popUpBut' onClick={handleNextClick}>
                <BsFillArrowRightCircleFill />
              </button>
            </div>
            <div className='popup-button'>
              {UpcomingCard[currentIndex].link &&(
                <button className='popUpButton btn-same' onClick={togglePopUp}><a href={UpcomingCard[currentIndex].link}>More</a></button>
              )}
              <button className='popUpButton btn-same' onClick={togglePopUp}>Close</button>
            </div>
          </div>
       </div>
      )}
    </div>
  );
};

export default PopUp;
