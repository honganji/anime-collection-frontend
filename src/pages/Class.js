import React from 'react';
import { useSearchParams } from 'react-router-dom';
import animeList from '../data/anime';
import TabBlock from '../components/parts/TabBlock';
import AnimeItem from '../components/parts/AnimeItem';
import "./Class.css";

export default function Class() {
  const [params] = useSearchParams();
  const term = (params.get("term")).charAt(0).toUpperCase() + (params.get("term")).slice(1);
  let item = "";
  let classifiedAnimeList = [];

  // define item and classified anime list following the term
  if (term === "Genre") {
    item = (params.get("item")).charAt(0).toUpperCase() + (params.get("item")).slice(1);
    classifiedAnimeList = animeList.filter((anime) => {
      if (anime.genre.includes(params.get("item"))) {
        return anime;
      }
    }).map((filteredAnime) => filteredAnime);
  } else {
    item = `${params.get("item")} ~ ${Number(params.get("item")) + 9}`;
    classifiedAnimeList = animeList.filter((anime) => {
      if (anime.started_date >= params.get("item") && anime.started_date <= Number(params.get("item")) + 9) {
        return anime;
      }
    }).map((filteredAnime) => filteredAnime);
  }

  // get tabs
  function getTabs() {
    const numOfTabs = Math.floor(classifiedAnimeList.length / 10);
    return <TabBlock numOfTabs={numOfTabs} />;
  }

  return (
    <div id='class'>
      <div className='title'>{term}: {item}</div>
      {
        classifiedAnimeList.map((data) => <AnimeItem data={data} />)
      }
      {
        getTabs()
      }
    </div>
  );
}
