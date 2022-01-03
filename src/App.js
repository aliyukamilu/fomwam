import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages 
import Home from './pages/Home'
import Course from './pages/Course'
import Courselesson from './pages/Courselesson'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/course" element={<Course />} />
        <Route path="/courseLesson/:courseId" element={<Courselesson />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
