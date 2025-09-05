// App.js

import React from 'react';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import AboutMe from './components/about/AboutMe';
import Skills from './components/about/Skills';
import Work from './components/work/Work';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import './index.css';  // Import Tailwind CSS here
import './App.css';  // Import Tailwind CSS here

function App() {
  return (
    <div className=''>
      <Navbar />
      <section id="about">
        <About />
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
