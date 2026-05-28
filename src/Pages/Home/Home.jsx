import React from 'react'

import Header from '../../Components/Header/Header.jsx';
import Introduction from '../../Components/About/Introduction.jsx';
import News from '../../Components/News/News.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

const Home = () => {
  return (
    <>
        <Header />
        <Introduction />
        <News/>
        <Footer />
    </>
  )
}

export default Home