import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages 
import Home from './pages/Home'
import About from './pages/About'
import CourseLesson from './pages/courseLesson'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/about" element={<About />} />
        <Route path="/courseLesson/:courseId" element={<CourseLesson />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
