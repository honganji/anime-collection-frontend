import React from 'react';
import "./BottomBar.css";
import Logo from '../components/parts/Logo';
import linkedIn from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

export default function BottomBar() {
  return (
    <div id='bottom-bar'>
      <div className='left'>
        <Logo />
        <div className='copyright'>(c) copyright Yuji Toshihiro 2023. All right reserves</div>
      </div>
      <div className='right'>
        <img alt='icon' src={linkedIn} style={{ width: "64px" }} />
        <img alt='icon' src={twitter} style={{ width: "64px" }} />
        <img alt='icon' src={instagram} style={{ width: "64px" }} />
      </div>
    </div>
  );
}
