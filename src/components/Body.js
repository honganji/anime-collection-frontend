import React from 'react';
import "./Body.css";
import AnimeItem from './parts/AnimeItem';

export default function Body() {
  const animeTitleList = ["Jujutsu Kaisen", "Kingdom", "Demon Slayer", "Nisekoi"];
  return (
    <div id='home-body-container'>
      <div id='home-body-title'>Anime List</div>
      {
        animeTitleList.map((animeTitle) => <AnimeItem />)
      }
    </div>
  );
}
