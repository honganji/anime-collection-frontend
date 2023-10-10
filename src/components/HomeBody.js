import React from 'react';
import "./HomeBody.css";
import AnimeItem from './parts/AnimeItem';
import TabBlock from './parts/TabBlock';
import { useSearchParams } from 'react-router-dom';
import animeList from '../data/anime';

export default function HomeBody(props) {
  const [params] = useSearchParams();
  const tabNum = params.get("tab") ?? 1;
  console.log(tabNum);
  const dataList = props.animeList.slice((tabNum - 1) * 10, tabNum * 10);
  console.log(dataList);
  function getTabs() {
    const numOfTabs = Math.floor(animeList.length / 10 + 1);
    return <TabBlock numOfTabs={numOfTabs} />;
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
