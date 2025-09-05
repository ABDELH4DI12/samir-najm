// App.js

import React from 'react';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import AboutMe from './components/about/AboutMe';
import Skills from './components/about/Skills';
import Work from './components/work/Work';
import './index.css';  // Import Tailwind CSS here
import './App.css';  // Import Tailwind CSS here
import Services from './components/services/Services';

function App() {
  return (
    <div className=''>
      <Navbar />
      <About />
      <AboutMe />
      <Skills />
      <Work />
      <Services />
    </div>
  );
}

export default App;
