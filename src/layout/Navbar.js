import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Navbar.css";
import Logo from '../components/parts/Logo';
import termList from '../data/term';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const navigator = useNavigate();
  const url = useLocation();

  // check current login state
  // For Dev
  const state = url.state ?? { name: "Guest" };
  const pattern = /signup|login/g;
  const result = pattern.test(url.pathname);

  // control details elements open state
  var details = [...document.querySelectorAll('details')];
  document.addEventListener('click', function (e) {
    if (!details.some(f => f.contains(e.target))) {
      details.forEach(f => f.removeAttribute('open'));
    } else {
      details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
    }
  });

  // generate summery items function
  function generateSummery(term) {
    let uiList = [];
    const termObject = termList.filter((object) => {
      if (object["term"] === term) {
        return object;
      }
    });
    termObject[0]["items"].map((item) => {
      const title = term === "genre" ? item.charAt(0).toUpperCase() + item.slice(1) : `${item} ~ ${item + 9}`;
      uiList.push(<div onClick={() => { navigator(`/class?term=${term}&item=${item}`); }}>{title}</div>);
    });
    return uiList;
  }

  function hundleMenu() {
    var content = document.querySelector("#top-nav").querySelector(".hamburger-menu-content");
    var icon = document.querySelector("#top-nav").querySelector(".hamburger-menu-icon");
    if (content.style.display === "none") {
      content.style.display = "block";
      icon.style.opacity = "0.30";
    } else {
      content.style.display = "none";
      icon.style.opacity = "0.90";
    }
  }

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
              <div className='greet'>Welcome {state.name}</div>
              {
                !url.state
                  ? <div>
                    <button className='btn colored-btn' onClick={() => navigator('/signup')}>Signup</button>
                    <button className='btn colored-btn' onClick={() => navigator('/login')}>Log in</button>
                  </div>
                  : <button className='btn colored-btn' onClick={() => navigator('/')}>Log Out</button>
              }
            </div>
        }
        <div className='lower-menu'>
          <details className='dropdown'>
            <summary>Genre</summary>
            <div className='dropdown-container'>
              {generateSummery("genre")}
            </div>
          </details>
          <details className='dropdown'>
            <summary>Timeline</summary>
            <div className='dropdown-container'>
              {generateSummery("timeline")}
            </div>
          </details>
        </div>
      </div>
      <div className='hamburger-menu-container'>
        <div className='hamburger-menu-content'>
          <div className='hamburger-menu-content-container'>
            {
              !url.state
                ? <div>
                  <div className='dropdown-item' onClick={() => navigator('/signup')}>Signup</div>
                  <div className='dropdown-item' onClick={() => navigator('/login')}>Log in</div>
                </div>
                : <div className='dropdown-item' onClick={() => navigator('/')}>Log Out</div>
            }
            <details className='dropdown'>
              <summary>Genre</summary>
              <div className='dropdown-container'>
                {generateSummery("genre")}
              </div>
            </details>
          </div>
        </div>
        <div className='hamburger-menu-icon' onClick={() => hundleMenu()}>
          <FontAwesomeIcon className='sp-fa' icon={faBars} />
        </div>
      </div>
    </div>
  );
}
