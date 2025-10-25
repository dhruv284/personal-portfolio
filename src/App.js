import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { TechStack } from './components/TechStack.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';

function App() {
  const bannerRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const techStackRef = useRef(null);


  const scrollToSection = (section) => {
    if(section === "home" && bannerRef.current) bannerRef.current.scrollIntoView({ behavior: "smooth" });
    if(section === "skills" && skillsRef.current) skillsRef.current.scrollIntoView({ behavior: "smooth" });
    if(section === "techstack" && techStackRef.current) techStackRef.current.scrollIntoView({ behavior: "smooth" });
    if(section === "projects" && projectsRef.current) projectsRef.current.scrollIntoView({ behavior: "smooth" });
    if(section === "contact" && contactRef.current) contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='App'>
      <NavBar onNavClick={scrollToSection} /> {/* Pass scroll function */}

      <div ref={bannerRef}><Banner /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={techStackRef}><TechStack /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
      
      <Footer />
    </div>
  );
}

export default App;
