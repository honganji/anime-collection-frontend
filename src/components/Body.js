import React from 'react';
import "./Body.css";
import AnimeItem from './parts/AnimeItem';
import TabBlock from './parts/TabBlock';

export default function Body(props) {

  const dataList = props.animeList;
  function getTabs() {
    const numOfTabs = Math.floor(dataList.length / 10);
    return <TabBlock numOfTabs={numOfTabs} />;
  }

  return (
    <div id='home-body'>
      <div className='title'>Anime List</div>
      {
        dataList.map((data) => <AnimeItem data={data} />)
      }
      {
        getTabs()
      }
    </div>
  );
}
