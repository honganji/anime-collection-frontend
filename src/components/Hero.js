import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Hero.css";

export default function Hero(props) {
  const navigator = useNavigate();
  const [isMad, setIsMad] = useState(true);
  const data = props.animeList;
  function switchVideoType() {
    setIsMad(!isMad);
  }
  return (
    <div id='home-hero'>
      <div>
        <iframe className='video-iframe' src={`https://www.youtube.com/embed/${isMad ? data[0]["mad_id"] : data[0]["tailer_id"]}`} title='trailer'></iframe>
        <div className='btn-container'>
          <button className='btn monotone_btn' disabled={!isMad ? true : false} onClick={() => switchVideoType()}>Trailer</button>
          <button className='btn monotone_btn' disabled={isMad ? true : false} onClick={() => switchVideoType()}>MAD</button>
        </div>
      </div>
      <div className='info-container'>
        <img className='anime_img' src={data[0]["image_url"]} alt='trailer' />
        <button className='btn monotone_btn detail_button' onClick={() => navigator('/detail')}>
          Detail Page
        </button>
      </div>
    </div>
  );
}
