import React from 'react';
import './Testinomials.css';
import Daniel from '../../Document/Member/DANIELT.jpeg';
import Beh from '../../Document/Member/BEHT.jpeg';
import PeiSen from '../../Document/Member/PST.jpeg';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Testimonials = () => {
  const Review = [
    {
      id: 1,
      name: 'Daniel',
      department: 'Mechanism',
      picture: Daniel,
      year: '2022/2023',
      text: 'This might be your one and only chance in your university life where you can bond with a community full of interesting yet knowledgeable people.',
    },
    {
      id: 2,
      name: 'Zhen Xian',
      department: 'Electronic',
      picture: Beh,
      year: '2022/2023',
      text: 'Believe me, when I tell you that every goal that you achieve here in UTM ROBOCON with your own efforts will bring you greater excitement.',
    },
    {
      id: 3,
      name: 'Pei Sen',
      department: 'Programming',
      picture: PeiSen,
      year: '2022/2023',
      text: 'We regard every determined, disciplined, hardcore individuals irrelevant of their technical background, races or religions. ',
    }
  ];

  const [index, setIndex] = React.useState(0);

  const handlePrevClick = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? Review.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => (prevIndex === Review.length - 1 ? 0 : prevIndex + 1));
  };

  const prevIndex = index === 0 ? Review.length - 1 : index - 1;
  const nextIndex = index === Review.length - 1 ? 0 : index + 1;

  return (
    <section id="testimonials" className='top'>
      <h5>What we LEARN</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
        <div className="testimonials_card left">
          <div className="testimonials_top">
            <img src={Review[prevIndex].picture} alt={`Testimonial by ${Review[prevIndex].name}`} />
          </div>
          <div className="testimonials_content">
            <h3>Name: {Review[prevIndex].name}</h3>
            <h4>Department: <br/>{Review[prevIndex].department}</h4>
            <p>Year: {Review[prevIndex].year}</p>
            <p>Review: {Review[prevIndex].text}</p>
          </div>
        </div>
        <div className="testimonials_card center">
          <div className="testimonials_top">
            <img src={Review[index].picture} alt={`Testimonial by ${Review[index].name}`} />
          </div>
          <div className="testimonials_content">
            <h3>Name: {Review[index].name}</h3>
            <h4>Department: <br/>{Review[index].department}</h4>
            <p>Year: {Review[index].year}</p>
            <p>Review: {Review[index].text}</p>
          </div>
        </div>
        <div className="testimonials_card right">
          <div className="testimonials_top">
            <img src={Review[nextIndex].picture} alt={`Testimonial by ${Review[nextIndex].name}`} />
          </div>
          <div className="testimonials_content">
            <h3>Name: {Review[nextIndex].name}</h3>
            <h4>Department: <br/>{Review[nextIndex].department}</h4>
            <p>Year: {Review[nextIndex].year}</p>
            <p>Review: {Review[nextIndex].text}</p>
          </div>
        </div>
      </div>
      <div className="testimonials_btn">
        <button className="btn" onClick={handlePrevClick}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button className="btn" onClick={handleNextClick}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
         
    </section>
  );
};

export default Testimonials;
