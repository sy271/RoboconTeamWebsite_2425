import React, { useState } from 'react';
import './Faq.css';
import Way from '../../Document/Recruitment/ROBOCONERflyer.png';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

const Faq = () => {
  const [selectedId, setSelectedId] = useState(null);

  const clubFaq = [
{
    id: 1,  
  question: 'What is Robocon?',
  answer: 'Robocon is the name of our club. We are one of the robotics clubs at UTM. The name Robocon comes from Abu Robocon, which is an international robotic competition.',
      },
      {
    id: 2,
  question: 'What if I join the recruitment challenge without having any basics?',
    answer: 'Of course, you may. In fact, the majority of our members did not have any basics at the beginning. All that is needed is your dedication and hard work.',
      },
      {
    id: 3,
  question: 'What should I prepare before the challenge?',
  answer: 'You can try to learn the basics of the C/C++ language and also how to use microcontrollers like Arduino or Blue Pill STM32; having the basics of electronic components and Solidworks will put you in an advantageous position.',
      },    
      {
    id: 4,
  question: 'What are the activities in Robocon Skills?',
  answer: 'Our main goal is to build robots that participate in the annual domestic and international Robocon competition. At the same time, we train our technical skills and increase our knowledge.',
      },
      {
    id: 5,
  question: 'What are the benefits of joining Robocon Club?',
  answer: 'You will gain a lot of experience and knowledge in the robotics field. Also, your soft skills will be improved, such as leadership, teamwork, and communication skills. You will also meet a lot of new friends and make new memories.',
      },
      {
    id: 6,
  question: 'What is the requirement to join Robocon Club?',
  answer: 'You must be a UTM student and have a passion for robotics. First, you need to join our 1-month autocar challenge. After that, you will join our junior training for 6 weeks. Then, you will become one of us.',
      },
      {
    id: 7,
  question: 'How long will I stay in this club?',
  answer: 'You can stay as long as you are a UTM student. Most of the members stay in the club for two years. We will focus on training in the first year, while we will focus on preparation for the competition in the second year.',
      },
      {
    id: 8,
  question: 'What should I do after submitting my recruitment registration?',
  answer: 'You need to join our Discord group, which is in the registration form or social media platform. This is due to the fact that we will make the announcement there.',
      },
      {
    id: 9,
  question: 'What is the Robocon Malaysia?',
  answer: 'Robocon Malaysia is a national-level robotics competition organized by the Malaysian Robocon Organizing Committee (MROC). The competition started in 2002 and has been held every year since. Each year, the competition is held in a different state. The theme and game rules change every year. The competition aims to create friendship among young people with similar interests who will lead their countries in the 21st century, as well as help advance engineering and broadcasting technologies in the region.'      
      },
      {
    id: 10,
  question: 'What is ABU Robocon?',
  answer: 'ABU Robocon is an international robotics competition organized by the Asia-Pacific Broadcasting Union (ABU). The competition started in 2002 and has been held every year since. Each year, the competition is held in a different country. The theme and game rules change every year. The competition aims to create friendship among young people with similar interests who will lead their countries in the 21st century, as well as help advance engineering and broadcasting technologies in the region.',
      }
    ];

  const handleQuestionClick = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

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
    <section className="clubfaq top">
      <h5>Want to Know Us?</h5>
      <h2>Club FAQ</h2>                
      <img src={Way} alt="Step to Become a Roboconer" 
      className={isImageFullSize === Way ? 'full-screen' : ''}
      onClick={() => toggleImageFullSize(Way)}/>
      <div className="clubfaq_container">
        {clubFaq.map(({ id, question, answer }) => (
          <article
            className={`clubfaq_card ${selectedId === id ? 'selected' : ''}`}
            key={id}
            onClick={() => handleQuestionClick(id)}
          >
            <div className="clubfaq_question ">
              <h3>{question}</h3>
              <button className="clubfaq_button">
                {selectedId === id ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
              </button>
            </div>
            <div className="clubfaq_answer">
              {selectedId === id && <p>{answer}</p>}
            </div>
          </article>
        ))}
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

export default Faq;
