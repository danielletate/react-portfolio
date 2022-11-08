import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
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
  </div>
  );
}

export default App;
