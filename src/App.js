import React, { useEffect } from 'react';
//import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme';
import Navbar from './components/Navbar.js';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <ThemeProvider theme={ theme}>
      <GlobalStyle/>
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
    </ThemeProvider>
  );
}

export default App;
