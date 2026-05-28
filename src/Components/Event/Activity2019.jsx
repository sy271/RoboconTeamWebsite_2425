import React, {useState} from 'react'
import './Event.css'
import BasicWorkshop2019 from '../../Picture/2019/2019BasicWorkshop.jpg'
import Autocar2019 from '../../Picture/2019/2019Autocar.jpg'
import AutocarCompetition2019 from '../../Picture/2019/2019AutocarCompetition.jpg'
import DSI2019 from '../../Picture/2019/2019DSI.jpg'
import FarewellParty2019 from '../../Picture/2019/2019Farewell.jpg'
import IMPower2019 from '../../Picture/2019/2019IMPower.jpg'
import KTC2019 from '../../Picture/2019/2019KTC.jpg'
import SeniorGraduation2019 from '../../Picture/2019/2019SeniorGraduation.jpg'
import TechnicalInterview2019 from '../../Picture/2019/2019TechnicalInterview.jpg'
import WelcomingParty2019 from '../../Picture/2019/2019WelcomingParty.jpg'
import RoboconMalaysia2019 from '../../Picture/2019/2019RoboconMalaysia.jpg'
import Urock2019 from '../../Picture/2019/2019Urock.jpg'
import {TfiFacebook} from 'react-icons/tfi'
import {AiFillInstagram} from 'react-icons/ai'
import {BiPlus} from 'react-icons/bi'

const Event = () => {
  const eventsData = [
    {
        imgSrc: Urock2019,
        title: 'Urock 2019',
        extra: 'https://www.facebook.com/media/set/?set=a.2503089759774853&type=3',
    },
    {
        imgSrc: DSI2019,
        title: 'Recruitment(DSI) 2019',
        extra: 'https://www.facebook.com/media/set/?set=a.2849372928479866&type=3',
      },
      {
          imgSrc: KTC2019,
          title: 'Recruitment(KTC) 2019',
          extra: 'https://www.facebook.com/media/set/?set=a.2849322088484950&type=3',
      },
    {
        imgSrc: BasicWorkshop2019,
        title: 'Basic Workshop 2019',
        extra: 'https://www.facebook.com/media/set/?set=a.2456423834441446&type=3',
    },
    {
        imgSrc: Autocar2019,
        title: 'Autocar Mentor-Mentee 2019',
        extra: 'https://www.facebook.com/media/set/?set=a.2849405945143231&type=3',
    },
    {
        imgSrc: AutocarCompetition2019,
        title: 'Autocar Competition 2019',
        extra: 'https://www.facebook.com/media/set/?set=a.2517130518370777&type=3',
      },
      {
          imgSrc: WelcomingParty2019,
          title: 'Junior Welcoming Party 2019',
          extra: 'https://www.facebook.com/media/set/?set=a.2849449791805513&type=3',
      },
    {
        imgSrc: FarewellParty2019,
        title: 'Farewell Party 2019',
        facebook: 'https://www.facebook.com/media/set/?set=a.2849298601820632&type=3',
    },
    {
        imgSrc: IMPower2019,
        title: 'IMPower 2019',
        facebook: 'https://www.facebook.com/media/set/?set=a.2849515278465631&type=3',
    },
    {
      imgSrc: TechnicalInterview2019,
      title: 'Technical Interview 2019',
      extra: 'https://www.facebook.com/media/set/?set=a.2849437521806740&type=3',
    },
    {
        imgSrc: RoboconMalaysia2019,
        title: 'Robocon Malaysia 2019',
      },
      {
          imgSrc: SeniorGraduation2019,
          title: 'Senior Graduation 2019',
          extra: 'https://www.facebook.com/media/set/?set=a.2849425385141287&type=3',
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
        <h4>2019</h4>
        
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
  