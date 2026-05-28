import React, { useState } from 'react';
import './News.css'; // Make sure to adjust the path to your CSS file
import Champion from '../../Picture/2023/2023Champion.JPG';
import FirstRunnerUp from '../../Picture/2023/2023FirstRunnerUp.JPG';
import BestTeamAward from '../../Picture/2023/2023BestTeamAward.JPG';
import BestEngineeringAward from '../../Picture/2023/2023BestEngineeringAward.JPG';
import BestTechonologyAward from '../../Picture/2023/2023BestTechnologyAward.JPG';

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  
  const panels = [
    {
      title: ' Best Team Award ',
      image: BestTeamAward,
    },
    {
        title: 'First Runner Up',
        image: FirstRunnerUp,
    },
    {
        title: ' Champion ',
        image: Champion,
    },
    {
        title: 'Best Engineering Award',
        image: BestEngineeringAward,
    },
    {
        title: 'Best Technology Award',
        image: BestTechonologyAward,
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="award" className="panelA">
      <h5>UTM RBC 22/23</h5>
      <h2>Achievements</h2>
      <h3>Robocon 2023</h3>   
        <div className="container panel_container">
        {panels.map((image, index) => (
            <div
            key={index}
            className={`panel ${activeIndex === index ? 'active' : 'non'}`}
            style={{ backgroundImage: `url(${image.image})` }}
            onClick={() => handleClick(index)}
            >
            <h3>{image.title}</h3>
            </div>
        ))}
        </div>

    </section>
  );
};

export default ExpandingCards;
