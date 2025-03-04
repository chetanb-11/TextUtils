import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#072e67";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        {/* <Routes>
            <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter text to analyze!!" mode={mode} />}/>
        </Routes> */}
      {/* </Router> */}
      <TextForm heading="Enter text to analyze!!" mode={mode} />
    </>
  );
}

export default App;