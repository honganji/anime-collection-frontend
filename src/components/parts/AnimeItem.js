import React from 'react';
import "./AnimeItem.css";

export default function AnimeItem() {
  return (
    <div id='anime-item-container'>
      <img src='https://s.animeanime.jp/imgs/p/X2bKTbbkhKNuuQZDts1HWTagH66grq_oqaqr/491839.jpg' alt='trailer' id='home_body_anime_img' />
      <div id='anime-item-info-container'>
        <div id='anime-item-info-title' className='anime-item-info-item'>Jujutsu Kaisen</div>
        <div className='anime-item-info-item'><div className='anime-item-info-strong'>Author:</div>&nbsp;&nbsp;Gege Akutami</div>
        <div className='anime-item-info-item'><div className='anime-item-info-strong'>Episodes:</div>&nbsp;&nbsp;24, Serises: 2</div>
        <div className='anime-item-info-item'><div className='anime-item-info-strong'>Desription:</div>&nbsp;&nbsp;The story follows high school student Yuji Itadori as he joins a secret organization
          of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom
          Yuji becomes the host.</div>
      </div>
    </div>
  );
}
