import React, { useState } from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardMain from './CardMain';
import CardButtons from './CardButtons';

const Card = () => {
  const [activeSection, setActiveSection] = useState('#about');

  return (
    <section id="partnership" className="top">
      <h5>Our Partners</h5>
      <h2>Partnership</h2>
      <div className="partnership_container">
        <div className="diamond_sponsors">
          <h3>Diamond Sponsors</h3>
            <div className={`sponsoring ${activeSection !== '#about' ? 'is-active' : ''}`} data-state={activeSection}>
            <CardHeader />
            <CardMain activeSection={activeSection} />
            <CardButtons activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
        </div>
      </div>
    </section>
    
  );
};

export default Card;
