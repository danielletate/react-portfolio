import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
  <div className="App">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Photos />
    <Footer />
    <ScrollToTop />
  </div>
  );
}

export default App;
