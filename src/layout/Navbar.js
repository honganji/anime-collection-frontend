import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from '../components/parts/Logo';

export default function Navbar() {
  return (
    <div id='top-nav'>
      <div className='container'>
        <Logo />
      </div>
      <div className='menu'>
        <div className='upper-menu'>
          <div className='greet'>Welcome Guest</div>
          <div className='btn colored-btn'>Signup</div>
          <div className='btn colored-btn'>Log in</div>
        </div>
        <div className='lower-menu'>
          <div>Genre</div>
          <div>Timeline</div>
        </div>
      </div>
    </div>
  );
}
