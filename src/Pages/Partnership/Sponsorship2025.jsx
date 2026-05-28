import React from 'react'
import Partnership from '../../Components/Partnership/Sponsorship2025'
import Footer from '../../Components/Footer/Footer'

const OurPartnership = () => {
  // Force content to be properly layered and reduce layout shifts
  React.useEffect(() => {
    // Add a class to enable hardware acceleration on the page
    document.body.classList.add('hardware-accelerated');
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('hardware-accelerated');
    };
  }, []);

  return (
    <>
      <Partnership />
      <Footer />
    </>
  )
}

export default OurPartnership