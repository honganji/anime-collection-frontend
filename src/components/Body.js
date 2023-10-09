import React from 'react';
import "./Body.css";
import AnimeItem from './parts/AnimeItem';
import TabBlock from './parts/TabBlock';

export default function Body() {

  const animeTitleList = ["Jujutsu Kaisen", "Kingdom", "Demon Slayer", "Nisekoi", "Jujutsu Kaisen", "Kingdom", "Demon Slayer", "Nisekoi", "Demon Slayer", "Nisekoi"];
  function getTabs() {
    const numOfTabs = Math.floor(animeTitleList.length / 10);
    if (numOfTabs === 0) {
      return <>nothing</>;
    }
    return <TabBlock numOfTabs={numOfTabs} />;
  }

  return (
    <div id='home-body'>
      <div className='title'>Anime List</div>
      {
        animeTitleList.map((animeTitle) => <AnimeItem />)
      }
      {
        getTabs()
      }
    </div>
  );
}
