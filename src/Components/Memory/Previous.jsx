import React, { useState, useEffect } from 'react';
import './Previous.css';
import FarewellParty from '../../Picture/2024/farewell.jpg'; 
import PinangTrip from '../../Picture/2024/pinangtrip.JPG';
import FriendlyMatch from '../../Picture/2024/friendlymatch.JPG';
import OpenHouse from '../../Picture/2024/2024OpenHouse.JPG';
import VietnamTrip from '../../Picture/2024/Vietnam.JPG';
import ABU2024 from '../../Picture/2024/2024ABUAward.JPG';

const imagesList = [PinangTrip, FriendlyMatch, VietnamTrip, OpenHouse, FarewellParty, ABU2024];

const Previous = () => {
  const [isAnimationPaused, setAnimationPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); //to track which image is clicked

  // const toggleAnimation = () => {
  //   setAnimationPaused((prevPaused) => !prevPaused);
  // };

  //detect click on image
  const handleMouseEnter = () => {
    setAnimationPaused(true); // Pause animation when hovered
  };

  const handleMouseLeave = () => {
    if (selectedImage === null) {
      setAnimationPaused(false); // Resume animation if no image is selected
    }
  };

  const handleImageClick = (index) => {
    if(selectedImage === index){
      setSelectedImage(null); //Reset if the same image is clicked
      setAnimationPaused(false); //Resume animation when deselecting the image
    }else{
      setSelectedImage(index); //Set the clicked image
      setAnimationPaused(true); //Pause animation when selecting the image
    }
  };

  useEffect(() => {
    const images = document.querySelectorAll('#pic img');
    const picContainer = document.getElementById('pic');

    const handleImageAnimation = () => {
      images.forEach((img, index) => {
        img.style.display = 'block';
        if (isAnimationPaused) {
          img.style.animationPlayState = 'paused';
        } else {
          img.style.animationPlayState = 'running';
          img.style.animation = `fadeIn 0.5s ease ${index * 0}s`;
        }
        if (index === selectedImage) {
          img.classList.add('enlarged');
        } else {
          img.classList.remove('enlarged');
        }
      });

      if (isAnimationPaused) {
        picContainer.classList.add('paused');
      } else {
        picContainer.classList.remove('paused');
      }
    };

    handleImageAnimation();
      
  }, [isAnimationPaused,selectedImage]);
        // img.classList.add('show');
        // img.style.animationDelay = `${index * 0.2}s`; // Staggered effect

        

         // Apply the "enlarged" class to the clicked image
         
    // if (document.readyState === 'complete') {
    //   handleImageAnimation();
    // } else {
    //   window.addEventListener('load', handleImageAnimation);
    // }

    // const picContainer = document.getElementById('pic');
    // picContainer.addEventListener('click', toggleAnimation);
    // picContainer.addEventListener('mouseenter', () => setAnimationPaused(true));
    // picContainer.addEventListener('mouseleave', () => setAnimationPaused(false));

    // return () => {
    //   window.removeEventListener('load', handleImageAnimation);
    //   picContainer.removeEventListener('click', toggleAnimation);
    //   picContainer.removeEventListener('mouseenter', () => setAnimationPaused(true));
    //   picContainer.removeEventListener('mouseleave', () => setAnimationPaused(false));
    // };

  return (
    <section className='top'>
      <h5>What we DONE?</h5>
      <h2>Interesting Activities</h2>
      <div className="previous-container ">
        <div className="previous-card">
          <div id='pic'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={PinangTrip} alt="Pinang Trip"   onClick={() => handleImageClick(0)} />
            <img src={FriendlyMatch} alt="Friendly Match"  onClick={() => handleImageClick(1)} />
            <img src={VietnamTrip} alt="Vietnam Trip"  onClick={() => handleImageClick(2)} />
            <img src={OpenHouse} alt="Open House"   onClick={() => handleImageClick(3)} />
            <img src={FarewellParty} alt="Farewell Party"   onClick={() => handleImageClick(4)} />
            <img src={ABU2024} alt="ABU Robocon"   onClick={() => handleImageClick(5)} />
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="previous-modal" onClick={() => handleImageClick(selectedImage)}>
          <span className="close-modal">&times;</span> 
          <img src={imagesList[selectedImage]} alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default Previous;
