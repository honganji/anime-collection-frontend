import React from 'react';
import icon from '../../assets/package.png';
import "./Logo.css";

// logo and this service name
// put on the top and bottom navigation bar
export default function Logo() {
  return (
    <div id='logo-title'>
      <img alt='icon' src={icon} className='logo-icon' />
      <div id='title'>Anime Collection</div>
    </div>
  );
}
