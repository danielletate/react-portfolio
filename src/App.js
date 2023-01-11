import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import GoToTop from './components/GoToTop';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import PhotographyPage from './components/pages/PhotographyPage';
import Photos from './components/Photos';

function App() {
  return (
    <>
      <GoToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/photography-page" element={<PhotographyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
