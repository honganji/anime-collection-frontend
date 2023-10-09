import React from 'react';
import "./Hero.css";

export default function Hero() {
  return (
    <div id='home-hero'>
      <div>
        <iframe className='video-iframe' src='https://www.youtube.com/embed/O6qVieflwqs' title='trailer'></iframe>
        <div className='btn-container'>
          <button className='btn monotone_btn'>Trailer</button>
          <button className='btn monotone_btn' disabled>MAD</button>
        </div>
      </div>
      <div className='info-container'>
        <img className='anime_img' src='https://s.animeanime.jp/imgs/p/X2bKTbbkhKNuuQZDts1HWTagH66grq_oqaqr/491839.jpg' alt='trailer' />
        <div className='btn monotone_btn detail_button'>
          <div>Detail Page</div>
        </div>
      </div>
    </div>
  );
}
