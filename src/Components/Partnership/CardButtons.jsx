import React from 'react';

const CardButtons = ({ activeSection, setActiveSection }) => {
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sponsoring-buttons">
      <button
        className={activeSection === '#about' ? 'is-active' : ''}
        onClick={() => handleButtonClick('#about')}
      >
        ABOUT
      </button>
      <button
        className={activeSection === '#contact' ? 'is-active' : ''}
        onClick={() => handleButtonClick('#contact')}
      >
        CONTACT
      </button>
    </div>
  );
};

export default CardButtons;
