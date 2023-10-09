import React from 'react';
import "./BottomBar.css";
import Logo from '../components/parts/Logo';
import linkedIn from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

export default function BottomBar() {
  return (
    <div id='bottom-bar-container'>
      <div id='bottom-bar-left'>
        <Logo id='bottom-logo' />
        <div id='bottom-bar-left-copyright'>(c) copyright Yuji Toshihiro 2023. All right reserves</div>
      </div>
      <div id='bottom-bar-right'>
        <img alt='icon' src={linkedIn} style={{ width: "64px" }} id='icon' />
        <img alt='icon' src={twitter} style={{ width: "64px" }} id='icon' />
        <img alt='icon' src={instagram} style={{ width: "64px" }} id='icon' />
      </div>
    </div>
  );
}
