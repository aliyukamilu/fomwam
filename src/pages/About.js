import React from "react";
import { Link } from 'react-router-dom'
import "../styles/Header.css";

import Header from '../components/Header';


function About() {
    return (
        <div className="container">
            <Header />
            <p>About oo</p>
        </div>
    )
}

export default About