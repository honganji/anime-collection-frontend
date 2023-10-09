import React from 'react';
import "./AnimeItem.css";

export default function AnimeItem() {
  return (
    <div id='home-anime-item'>
      <img className='img' src='https://s.animeanime.jp/imgs/p/X2bKTbbkhKNuuQZDts1HWTagH66grq_oqaqr/491839.jpg' alt='trailer' />
      <div className='info-container'>
        <div className='anime-title'>Jujutsu Kaisen</div>
        <div className='item'><div className='subtitle'>Author:</div>&nbsp;&nbsp;Gege Akutami</div>
        <div className='item'><div className='subtitle'>Episodes:</div>&nbsp;&nbsp;24, Serises: 2</div>
        <div className='item'><div className='subtitle'>Desription:</div>&nbsp;&nbsp;The story follows high school student Yuji Itadori as he joins a secret organization
          of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom
          Yuji becomes the host.</div>
      </div>
    </div>
  );
}
