import React from 'react';
import "./BottomBar.css";
import Logo from '../components/parts/Logo';
import linkedIn from '../assets/linkedin.svg';
import medium from '../assets/medium.svg';
import twitter from '../assets/twitter.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function BottomBar() {
  const navigator = useNavigate();
  const url = useLocation();
  const pattern = /signup|login/g;
  const result = pattern.test(url.pathname);
  return (
    result
      ? <></>
      : <div id='bottom-bar'>
        <div className='left'>
          <div className='container' onClick={() => navigator('/')}>
            <Logo />
          </div>
          <div className='copyright'>(c) copyright Yuji Toshihiro 2023. All right reserves</div>
        </div>
        <div className='right'>
          <Link to={'https://www.linkedin.com/in/yuji-toshihiro-526244269/'}><img className='icon' alt='icon' src={linkedIn} /></Link>
          <Link to={'https://medium.com/@yujitoshi'}><img className='icon' alt='icon' src={medium} /></Link>
          <Link to={'https://twitter.com/yujicavs'}><img className='icon' alt='icon' src={twitter} /></Link>
        </div>
      </div>
  );
}
