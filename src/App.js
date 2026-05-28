import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Nav from './Components/Nav/Nav';
import Nav2 from './Components/Nav/FinalSmallNav';
import PopUp from './Components/PopUp/PopUp.jsx';
import Cover from './Components/Cover/Cover.jsx';
import HomePage from './Pages/Home/Home.jsx';
import AboutPage from './Pages/About/About.jsx';
import AutocarPage from './Pages/Event/Autocar.jsx';
import DepartmentPage from './Pages/About/Department.jsx';
import FaqPage from './Pages/About/Faq.jsx';
import MemberPage from './Pages/About/Organization.jsx';
import EventsPage from './Pages/Event/Event.jsx';
import UpcomingPage from './Pages/Event/Upcoming.jsx';
import PlanPage from './Pages/Event/Plan.jsx';
import PastPage from './Pages/Event/Previous.jsx';
import ExtraPreviousPage from './Pages/Event/ExtraPrevious.jsx';
import Achievements from './Pages/Achievement/Achievement';
// import Partnership from './Pages/Partnership/Partnership.jsx';
import Partnership from './Pages/Partnership/Sponsorship2025.jsx';
import ReviewPage from './Pages/Partnership/Review';
import ContactPage from './Pages/Contact/Contact.jsx';
import NotFoundPage from './Pages/NotFound/NotFound.jsx';
import Cookies from 'js-cookie';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false); // Default to false
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Only check cookie state once the app initially loads
  useEffect(() => {
    console.log('App mounted, checking cookie state');
    
    const popUpClosed = Cookies.get('popUpClosed');
    console.log('Cookie popUpClosed value:', popUpClosed);
    
    // Don't set the state here, we'll set it when content is shown
  }, []);

  const closePopUp = () => {
    console.log('Closing pop-up and setting cookie');
    setShowPopUp(false);
    // Set a cookie to remember that the user closed the pop-up
    Cookies.set('popUpClosed', 'true', { expires: 365 }); // Expires in 365 days
  };

  const handleCoverClick = () => {
    console.log('Cover clicked, showing content');
    setShowContent(true);
    
    // Always show popup when cover is clicked, regardless of cookie
    console.log('Forcing popup to show after cover click');
    setShowPopUp(true);
    
    // For testing - remove the cookie to ensure popup shows
    // Cookies.remove('popUpClosed');
  };

  // Debug log for render state
  console.log('Render state - showContent:', showContent, 'showPopUp:', showPopUp);

  return (
    <Router>
      {!showContent && <Cover onClick={handleCoverClick} />}
      {showContent && (
        <>
          {showPopUp && <PopUp closePopUp={closePopUp} />}
          {isSmallScreen ? <Nav2 /> : <Nav />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about-us/about" element={<AboutPage />} />
            <Route path="/about-us/management" element={<MemberPage />} />
            <Route path="/about-us/department" element={<DepartmentPage />} />
            <Route path="/about-us/faq" element={<FaqPage />} />
            <Route path="/our-event" element={<EventsPage />} />
            <Route path="/our-event/upcoming" element={<UpcomingPage />} />
            <Route path="/our-event/plan" element={<PlanPage />} />
            <Route path="/our-event/previous" element={<ExtraPreviousPage />} />
            <Route path="/our-event/autocar" element={<AutocarPage />} />
            <Route path="/achievement" element={<Achievements />} />
            <Route path="/our-partnership" element={<Partnership />} />
            <Route path="/our-partnership/partner" element={<Partnership />} />
            <Route path="/our-partnership/review" element={<ReviewPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
