import React from 'react';
import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';
import Work from '../Work';
import Contact from '../Contact';
import Photos from '../Photos';
import ScrollToTopButton from '../ScrollToTopButton';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Photos />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
