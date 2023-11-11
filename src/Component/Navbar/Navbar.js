import React from 'react';
import './navbar.css';

export default function Navbar({ toggleComponents }) {
  return (
    <>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn" onClick={toggleComponents}>
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>
    </>
  );
}
