import React, { useState } from 'react';
import './Achievement.css';
import { achievementsData } from '../../Document/Achievement'; // Update the path as needed

const Achievements = () => {

  const [activeIndex, setActiveIndex] = useState(0); // Initialize with a default value
  
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
    <section id='achievements' className='top'>
    <h5>What we DONE</h5>
    <h2>Achievement of UTMRBC</h2>
    <div className="achievement">
      <table>
        <thead>
          <tr className='table_head'>
            <th>Competition</th>
            <th>Logo & Theme</th>
            <th>Team Picture</th>
            <th>Award</th>
          </tr>
        </thead>
        <tbody>
          {achievementsData.map((achievement, index) => (
            <tr key={index}>
              <td>{achievement.year}</td>
              <td>
                <div className='logoANDtheme'>
                <div className='logo_theme'>
                <img
                  src={achievement.logo}
                  alt='Competition Logo'
                  className={isImageFullSize === achievement.logo ? 'full-screen' : ''}
                  onClick={() => toggleImageFullSize(achievement.logo)}
                />
                </div>
                <div className='theme'>
                  <p>{achievement.theme}</p>
                </div>
                </div>
              </td>
              <td>
              {achievement.teamPicture ? (
              <div className='award'>
                <img
                  src={achievement.teamPicture}
                  alt='Team Picture'
                  className={isImageFullSize === achievement.teamPicture ? 'full-screen' : ''}
                  onClick={() => toggleImageFullSize(achievement.teamPicture)}
                />
              </div>
            ) : (
              <p>Mystery Team Picture</p>
            )}
                </td>
              <td>
                <div className='award'>
                  {achievement.domesticAward?
                    <p><b>Domestic: </b><br />
                    {achievement.domesticAward}
                    <br />
                    <br/>
                    </p>: ''}
                    {achievement.internationalAward?
                    <p><b>International: </b><br />
                    {achievement.internationalAward} 
                    <br />
                    <br/>
                    </p>: ''}
                    
                </div>  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
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
};

export default Achievements;
