import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import OtherMenu from './components/OtherMenu';
import Review from './components/Review';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="menu">
        <Menu />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="otherMenu">
        <OtherMenu />
      </div>

      <div id="review">
        <Review />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
