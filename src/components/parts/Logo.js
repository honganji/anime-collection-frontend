import React from 'react';
import icon from '../../assets/package.png';
import "./Logo.css";

export default function Logo() {
  return (
    <div id='logo-title'>
      <img alt='icon' src={icon} className='logo-icon' />
      <div id='title'>Anime Collection</div>
    </div>
  );
}
