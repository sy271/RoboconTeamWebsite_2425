import React, { useState } from 'react';
import './DarkMode.css';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to the body element
  document.body.classList.toggle('dark-mode', isDarkMode);

  return (
    <div className="ChangeTheme">
    <button onClick={toggleDarkMode} className="ButtonChangeTheme">
      {isDarkMode ? <BsSunFill /> : <BsFillMoonFill />}
    </button>
    </div>
  );
};

export default DarkMode;
