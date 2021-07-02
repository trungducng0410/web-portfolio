import React, { useState, useEffect } from 'react';
import Hero from './containers/Hero/Hero';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './containers/Skill/Skill';
import Education from './containers/Education/Education';
import Work from './containers/Work/Work';
// import Certification from './containers/Certification/Certification';

import { PortfolioProvider } from './context/context';

import {
  languageData,
  databaseData,
  frameworkData,
  toolData,
  educationsData,
  experienceData,
  projectsData,
  contactData,
} from './mock/data';

function App() {
  const [languages, setLanguages] = useState([]);
  const [databases, setDatabases] = useState([]);
  const [frameworks, setFrameworks] = useState([]);
  const [tools, setTools] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    setLanguages([...languageData]);
    setDatabases([...databaseData]);
    setFrameworks([...frameworkData]);
    setTools([...toolData]);
    setEducations([...educationsData]);
    setExperiences([...experienceData]);
    setProjects([...projectsData]);
    setContacts([...contactData]);
  }, []);

  return (
    <PortfolioProvider
      value={{
        languages,
        databases,
        frameworks,
        tools,
        educations,
        experiences,
        projects,
        contacts,
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Education />
      <Work />
      {/* Add certification when have enough ones */}
      {/* <Certification /> */}
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
