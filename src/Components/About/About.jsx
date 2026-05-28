import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can use 'auto' for instant scrolling 
    });
  };
  
  return (
    <section id="about3" className="about3 top">
      <h5>Who we are?</h5>
      <h2>About us</h2>
      <div className='container about3_container'>
        <div className='about3-box'>
          <div className='about3-story'>
            <h3>Our Story</h3>
            <p>
              Universiti Teknologi Malaysia proudly launched UTM Robocon in 2002, aiming to showcase the incredible talent and dedication of its students in the field of robotics and technology.
            </p>
          </div>
        </div>
        <div className='about3-box'>
          <div className='about3-mission'>
            <h3>Our Mission</h3>
            <p>
              To promote excellence of Universiti Teknologi Malaysia in robotics and technology, especially the spirit, dedication and thoroughness of students in constructing robots.
            </p>
          </div>
          <div className='about3-vision'>
            <h3>Our Vision</h3>
            <p>
              To become the best team in every ABU ROBOCON competition.
            </p>
          </div>
        </div>
      </div>
      <div className="about_btn">
          <Link to='/about-us/faq' onClick={scrollToTop} className="btn btn-primary">Club FAQ</Link>
        </div>
    </section>
  )
}

export default About