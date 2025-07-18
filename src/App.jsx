import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Universe from './components/Universe';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <Solutions />
      <TrustedBy />
      <About />
      <Portfolio />
      <Universe />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
