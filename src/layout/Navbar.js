import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from '../components/parts/Logo';

export default function Navbar() {
  return (
    <div>
      <div className='nav'>
        <div id='top-logo-container'>
          <Logo />
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
