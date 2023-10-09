import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./Navbar.css";
import Logo from '../components/parts/Logo';

export default function Navbar() {
  const navigator = useNavigate();
  const url = useLocation();
  const pattern = /signup|login/g;
  const result = pattern.test(url.pathname);
  return (
    <div id='top-nav'>
      <div className='container' onClick={() => navigator('/')}>
        <Logo />
      </div>
      <div className='menu'>
        {
          result
            ? <></>
            : <div className='upper-menu'>
              <div className='greet'>Welcome Guest</div>
              <button className='btn colored-btn' onClick={() => navigator('/signup')}>Signup</button>
              <button className='btn colored-btn' onClick={() => navigator('/login')}>Log in</button>
            </div>
        }
        <div className='lower-menu'>
          <div>Genre</div>
          <div>Timeline</div>
        </div>
      </div>
    </div>
  );
}
