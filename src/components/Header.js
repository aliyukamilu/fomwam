import React from "react";
import { NavLink } from 'react-router-dom'
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container d-flex align-items-center">
        <div className="logoContainer">
          <h1>FomWam</h1>
        </div>
        <nav>
          <NavLink to="/" className={(navData) => navData.isActive ? "links active" : "links"}>Home</NavLink>
          <NavLink className={(navData) => navData.isActive ? "links active" : "links"} to="/about">Activity</NavLink>
          <NavLink className={(navData) => navData.isActive ? "links active" : "links"} to="/about">Discussion</NavLink>
          <NavLink className={(navData) => navData.isActive ? "links active" : "links"} to="/about">Immersion</NavLink>
        </nav>
        <div className="justify-content-end d-flex rightNav align-items-center">
          <div className="d-flex rightContents align-items-center">
            <img src={require('../img/icons/profile.png')} alt="notification" className="profile" />
            <p className="mb-0" style={{marginLeft: 8}}>Aisha</p>
          </div>
          <div className="d-flex rightContents align-items-center">
            <img src={require('../img/icons/gems.png')} alt="notification" className="profile" />
            <p className="mb-0">190</p>
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