import React from 'react';
import "./HomeBody.css";
import AnimeItem from './parts/AnimeItem';
import TabBlocks from './parts/TabBlocks';
import { useSearchParams } from 'react-router-dom';

export default function HomeBody(props) {
  const NUM_OF_ANIME = 7;
  const [params] = useSearchParams();
  const tabNum = params.get("tab") ?? 1;
  const dataList = props.animeList.slice((tabNum - 1) * NUM_OF_ANIME, tabNum * NUM_OF_ANIME);
  function getTabs() {
    const numOfTabs = Math.floor(props.animeList.length / NUM_OF_ANIME + 1);
    return <TabBlocks numOfTabs={numOfTabs} />;
  }

  return (
    <div id='home-body'>
      <div className='title'>Anime List</div>
      {
        dataList.map((data, index) => <AnimeItem data={data} index={index} />)
      }
      <div className='tab-container'>
        {
          getTabs()
        }
      </div>
    </div>
  );
}
