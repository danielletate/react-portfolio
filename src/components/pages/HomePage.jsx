import React from 'react';
import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';
import Work from '../Work';
import Contact from '../Contact';
import Photos from '../Photos';
import ScrollToTop from '../ScrollToTop';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ScrollToTop />
      <Skills />
      <Work />
      <Contact />
      <Photos />
    </>
  );
};

export default HomePage;
