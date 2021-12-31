import React from "react";
import { Link } from 'react-router-dom'
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container d-flex align-items-center">
        <div className="logoContainer">
          <h1>FomWam</h1>
        </div>
        <nav>
          <Link to="/"><a className="links active" href="/">Home</a></Link>
          <a className="links" href="/">Activity</a>
          <a className="links" href="/">Discussion</a>
          <a className="links" href="/">Immersion</a>
        </nav>
        <div className="justify-content-end d-flex rightNav align-items-center">
          <div className="d-flex rightContents align-items-center">
            <img src={require('../img/icons/profile.png')} alt="notification" className="profile" />
            <p class="mb-0" style={{marginLeft: 8}}>Fatima</p>
          </div>
          <div className="d-flex rightContents align-items-center">
            <img src={require('../img/icons/gems.png')} alt="notification" className="profile" />
            <p class="mb-0">237</p>
          </div>
          <div className="d-flex rightContents align-items-center">
            <img src={require('../img/icons/bell.png')} alt="notification" className="profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header