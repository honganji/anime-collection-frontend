import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Navbar.css";
import Logo from '../components/parts/Logo';
import termList from '../data/term';

export default function Navbar() {
  const navigator = useNavigate();
  const url = useLocation();
  const state = url.state ?? { name: "Guest" };
  const pattern = /signup|login/g;
  const result = pattern.test(url.pathname);
  var details = [...document.querySelectorAll('details')];
  document.addEventListener('click', function (e) {
    if (!details.some(f => f.contains(e.target))) {
      details.forEach(f => f.removeAttribute('open'));
    } else {
      details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
    }
  });
  function generateSummery(term) {
    let uiList = [];
    const termObject = termList.filter((object) => {
      if (object["term"] === term) {
        console.log(object);
        return object;
      }
    });
    termObject[0]["items"].map((item) => {
      const title = term === "genre" ? item.charAt(0).toUpperCase() + item.slice(1) : `${item} ~ ${item + 9}`;
      uiList.push(<div onClick={() => { navigator(`/class?term=${term}&item=${item}`); }}>{title}</div>);
    });
    return uiList;
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
    </div>
  );
}
