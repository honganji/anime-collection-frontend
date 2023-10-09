import React from 'react';
import "./Home.css";
import arrowIcon from '../assets/arrow-bar-right.svg';

export default function Home() {
  return (
    <div className='container'>
      <div>
        <iframe className='video' src='https://www.youtube.com/embed/UM9XNpgrqVk' title='trailer'></iframe>
        <div className='btn-container'>
          <button className='monotone_btn'>Trailer</button>
          <button className='monotone_btn' disabled>MAD</button>
        </div>
      </div>
      <div className='info-container'>
        <img src='https://s.animeanime.jp/imgs/p/X2bKTbbkhKNuuQZDts1HWTagH66grq_oqaqr/491839.jpg' alt='trailer' className='anime_img' />
        <div className='monotone_btn detail_button'>
          <div>Detail Page</div>
          <img src={arrowIcon} className='arrow-icon' alt='arrow' style={{ width: "25px", height: "25px" }} />
        </div>
      </div>
    </div>
  );
}
