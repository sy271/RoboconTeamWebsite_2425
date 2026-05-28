import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css';
import { achievementsData as TeamData } from '../../Document/Achievement';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

const Introduction = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageFullSize, setIsImageFullSize] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeAchievement(activeIndex + 1);
    }, 50000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const toggleImageSize = () => {
    setIsImageFullSize(!isImageFullSize);
  };

  const changeAchievement = (index) => {
    setActiveIndex(index % TeamData.length);
  };

  const previousAchievement = () => {
    const newIndex = (activeIndex - 1 + TeamData.length) % TeamData.length;
    changeAchievement(newIndex);
  };

  const nextAchievement = () => {
    const newIndex = (activeIndex + 1) % TeamData.length;
    changeAchievement(newIndex);
  };

  const currentTeam = TeamData[activeIndex];

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'auto' for instant scrolling
    });
  };

  return (
    <section id="about" className="introduction">
      <h5>Get to Know</h5>
      <h2>About UTMRBC</h2>

      <div className="container introduction_container">
        <div>
          <blockquote>
            <Link to= "/about-us" onClick={scrollToTop}><h3>Experience is Our Credit, Excellence is Our Practice.</h3></Link>
          </blockquote>

          <blockquote>
            <Link to="/about-us/management" onClick={scrollToTop}><h3>All for One, One for All.</h3></Link>
          </blockquote>

          <blockquote>
            <Link to="/about-us/department" onClick={scrollToTop}><h3>1 time ABU Robocon Champion, 17 times representing Malaysia</h3></Link>
          </blockquote>
        </div>

        <Link to="/achievement" onClick={scrollToTop} className="introduction_team">
          <div className="introduction_team__title">
            <img
              src={currentTeam.logo}
              alt={currentTeam.year}
              className={isImageFullSize === currentTeam.logo ? 'full-screen' : ''}
              onClick={(e) => {
                e.stopPropagation(); // 阻止事件冒泡
                e.preventDefault(); // 阻止默认导航行为
                toggleImageFullSize(currentTeam.logo); // 调用 toggleImageFullSize 函数
              }}
            />
          </div>
          <div className="introduction_team__content">
            <h2>{currentTeam.year}</h2>
            <hr />
            <div className="introduction_team__content__description">
              <div>
                <h3><b>Domestic Achievement: </b></h3>
                <h3 className='introduction_award'>{currentTeam.domesticAward}</h3>
              </div>
              <div>
                <h3><b>International Achievement: </b></h3>
                <h3 className='introduction_award'>{currentTeam.internationalAward}</h3>
              </div>
            </div>
          </div>
        </Link>

        <div className="introduction_btn">
          <button className="btn btn-primary" onClick={previousAchievement}>
            <AiOutlineCaretLeft />
          </button>
          <button className="btn btn-primary" onClick={nextAchievement}>
            <AiOutlineCaretRight />
          </button>
        </div>
        <div className="introduction_btn">
          <Link to='/about-us/faq' onClick={scrollToTop} className="btn btn-primary">Club FAQ</Link>
        </div>
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

export default Introduction;
