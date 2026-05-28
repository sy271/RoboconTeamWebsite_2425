import React, { useState } from 'react';
import './Faq.css';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

const Faq = () => {
  const [selectedId, setSelectedId] = useState(null);

  const clubFaq = [
    
    {
      id: 2,
      question: 'What if I join the requitment challenge without having any basics?',
      answer: 'Of course. In fact, many of our members did not have any basics. All that is needed is your dedication and hard work.',
    },
    {
      id: 3,
      question: 'What should I prepare before the challenge?',
      answer: 'You can try to learn the basis of the C/C++ language and also how microcontrollers like Arduino or Blue Pill STM32 work; having the basics of electronic components and Solidworks can also put you in an advantageous position',
    },
    {
      id: 6,
      question: 'What is the requirement to join Robocon Club?',
      answer: 'You must be a UTM student and have a passion for robotics. First of all, you need to join Autocar for one month. After that, you need to join junior training for 6 weeks. After that, you will be a full member of the Robocon Club',
    },
    {
      id: 8,
      question: 'What should I do after registration?',
      answer:'You need to join our Discord group, which is in the registration form. Then you have just to wait for our announcement there.',
    }
  ];

  const handleQuestionClick = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="clubfaq">
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
    </section>
  );
};

export default Faq;
