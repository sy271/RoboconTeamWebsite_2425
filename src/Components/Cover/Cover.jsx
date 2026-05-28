import React, { useState, useEffect } from 'react';
import './Cover.css';
import robot from '../../Picture/Cover/Robot.gif';
import frame from '../../Picture/Cover/Shuai.gif';
import sound from '../../Picture/Cover/rock-cinematic-161648.mp3';

const Cover = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);
  const [phrases, setPhrases] = useState([
    "Hello, welcome to the UTM Robocon Community",
    "Click me to start your journey"
  ]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const handleCoverClick = () => {
    setClicked(true);
    const audio = new Audio(sound);
    audio.play();
    setTimeout(() => {
      onClick(); // Call the function from props after the delay
    }, 2000); // Adjust the delay time (in milliseconds) as needed
  };

  useEffect(() => {
    const audio = new Audio(sound);
    audio.addEventListener('ended', () => {
      setClicked(false);
    });
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the interval time (in milliseconds) as needed

    return () => {
      clearInterval(interval);
      audio.removeEventListener('ended', () => {
        setClicked(false);
      });
    };
  }, [phrases]);

  return (
    <div className={`Cover ${clicked ? 'zoomOut' : ''}`} onClick={handleCoverClick}>
      <img className='frame' src={frame} alt="Frame" />
      <img className="robot" src={robot} alt="Robot" />
      <div className="shiningText">
        {phrases.map((phrase, index) => (
          <p key={index} style={{ opacity: index === currentPhraseIndex ? 1 : 0 }}>
            {phrase}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cover;
