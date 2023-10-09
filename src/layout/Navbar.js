import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import icon from '../assets/package.png';

export default function Navbar() {
  return (
    <div>
      <div className='nav'>
        <div className='logo-title'>
          <img alt='icon' src={icon} style={{ width: "64px" }} className='icon' />
          <div className='title'>Anime Collection</div>
        </div>
        <div className='menu'>
          <div className='upper-menu'>
            <div className='term'>Welcome Guest</div>
            <div className='btn colored-btn'>Signup</div>
            <div className='btn colored-btn'>Log in</div>
          </div>
          <div className='lower-menu'>
            <div className='item'>Genre</div>
            <div className='item'>Timeline</div>
          </div>
        </div>
      </div>
    </div >
  );
}
