import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Upcoming.css';
import { TiTick } from 'react-icons/ti';
import { BsQuestion } from 'react-icons/bs';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineMail } from 'react-icons/ai';
import {RxDiscordLogo}  from 'react-icons/rx';

// Import your upcoming data array here
import { upcoming } from '../../Document/Upcoming/Upcoming';

const Upcoming = () => {
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [isImageFullSize, setIsImageFullSize] = useState(null);

  const toggleDetails = (eventId) => {
    setExpandedEventId(eventId === expandedEventId ? null : eventId);
  };

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

    <section id="upcoming" className="upcoming top">
      <h5>What we DO?</h5>
      <h2>UTM RBC 24/25 Events</h2>
      <div className="container Upcoming_container">
        {upcoming.map((item) => (
          <Link
          to={item.link}
          key={item.id}
          className="upcoming_container"
          onClick={scrollToTop} // Scroll to the top when clicking the link
        >
            <div className="upcoming_picture">
              {(item.status === 'coming' || item.status === 'end') ? (
                <>
                  <img
                    src={item.picture}
                    alt={item.title}
                    className={`${isImageFullSize === item.picture ? 'full-screen' : ''
                    } blur-image`} /* Apply blur-image class */
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止事件冒泡
                      e.preventDefault(); // 阻止默认导航行为
                      toggleImageFullSize(item.picture); // 调用 toggleImageFullSize 函数
                    }}
                  />
                  <div className="upcoming_contentSpecial">
                    {item.status === 'coming' ? <BsQuestion/> : <p>End</p> }
                    {item.status === 'end' ? <TiTick /> : <p>Coming Soon</p> }
                  </div>
                </>
              ) : (
                <img
                  src={item.picture}
                  alt={item.title}
                  className={`${isImageFullSize === item.picture ? 'full-screen' : ''
                  } `} /* Apply blur-image class */
                  onClick={(e) => {
                    e.stopPropagation(); // 阻止事件冒泡
                    e.preventDefault(); // 阻止默认导航行为
                    toggleImageFullSize(item.picture); // 调用 toggleImageFullSize 函数
                  }}
                />
              )}
            </div>

            <div className="upcoming_content">
              <h3>{item.title}</h3>
              <hr />
              {item.status === 'end' ? (
                <>
                <div className="upcoming_contentList">
                  <div className="upcoming_contentListDetails">
                    <p>{item.text}</p>
                  </div>
                </div>
                </>
              ) : item.status === 'coming' ? (
                <>
                <div className="upcoming_contentList">
                  <div className="upcoming_contentListDetails">
                    <p>{item.text}</p>
                  </div>
                </div>
                </>
              ) : item.status === 'ing' ? (
                <>
                <div className="upcoming_contentList">
                  <div className="upcoming_contentListDetails">
                    <p>{item.text}</p>
                  </div>
                  <div>
                  <hr/>
                  </div>
                  <div className="upcoming_contentListButton">
                    <table>
                      {item.date && (
                      <tr>
                        <th>Date:</th>
                        <td>{item.date}</td>
                      </tr>
                      )}
                      {item.time && (
                        <tr>
                          <th>Time:</th>
                          <td>{item.time}</td>
                        </tr>
                      )}
                      {item.venue && (
                      <tr>
                        <th>Venue:</th>
                        <td>{item.venue}</td>
                      </tr>
                      )}
                    </table>
                  </div>
                </div>
                {item.register &&
                    <Link to={item.register} className="btn btn-primary"  onClick={(e) => e.stopPropagation()}> 
                      Register
                    </Link> }
                </>
              ) : null}
              {/*
              <div className="readMore">
                <button
                  onClick={() => toggleDetails(item.id)}
                  className="btn btn-primary"
                >
                  {expandedEventId === item.id ? 'Hide Details' : 'Read More'}
                </button>
                {expandedEventId === item.id && (
                  <div className="upcoming_details">
                    <p>{item.text}</p>
                    {item.link && (
                      <p className="btn">
                        <Link to={item.link}>Learn More</Link>
                      </p>
                    )}
                  </div>
                )}
                </div>*/}
            </div>
          </Link>
        ))}
        <div className="upcoming_container2">
            <div className="upcoming_content upcoming_contentCenter">
              <h3>More to come</h3>
              <hr />
              <div className="upcoming_contentSpecial2">
                <p>Stay tuned for more events!</p>
                <p>Follow us on our social media for more updates!</p>
                
                <div className='footer_socials'>
                  <a href="https://www.facebook.com/utmrbc/" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /></a>
                  <a href="https://www.instagram.com/utm.rbc/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
                  <a href="https://www.youtube.com/@utmrbcteam" target='_blank' rel="noopener noreferrer"><AiOutlineYoutube /></a>
                  <a href='https://discord.gg/Zcg2s83ett' target="_blank" rel="noopener noreferrer"><RxDiscordLogo /></a>
                  <a href='mailto:utmroboconsecretary@gmail.com' rel="noopener noreferrer"><AiOutlineMail /></a>
                </div>
              </div>
            </div>
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

export default Upcoming;
