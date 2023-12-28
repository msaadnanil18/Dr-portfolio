import React from 'react';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contect';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
     <AppHeader />
      <div id="home" className="section">
     
      </div>
      <div id="about" className="section">
      <About />
      
      </div>

      <div id="Services" className="section">
      <Services />
      </div>

      <div id="experience" className="section">
      <Experience />
      </div>
      <div id="contact" className="section">
      <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;

