import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Main from './Main'
import AboutMe from './AboutMe'
import Certifications from './Certifications'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <AboutMe/>
      <Certifications/>
      <Contact/>
    </div>
  );
}

export default App;
