import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TabBlocks from '../components/parts/TabBlocks';
import AnimeItem from '../components/parts/AnimeItem';
import "./Class.css";
import Indicator from '../components/parts/Indicator';
import { request } from '../helpers/axios_helpers';

export default function Class() {
  const [params] = useSearchParams();
  const term = (params.get("term")).charAt(0).toUpperCase() + (params.get("term")).slice(1);
  let list = [];

  // variable to judge if the data is fetched
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");

  async function getAnimeData() {
    setIsFetched(false);
    const result = await request(
      "GET",
      "/api/animes"
    );

    // depending on the term and its item, extract data
    if (term === "Genre") {
      setItem((params.get("item")).charAt(0).toUpperCase() + (params.get("item")).slice(1));
      list = result.data.filter((anime) => {
        if (anime.genre.includes(params.get("item"))) {
          return anime;
        }
      }).map((filteredAnime) => filteredAnime);
    } else {
      setItem(`${params.get("item")} ~ ${Number(params.get("item")) + 9}`);
      list = result.data.filter((anime) => {
        if (Number.parseInt(anime.started_date.slice(0, 4)) >= params.get("item") && Number.parseInt(anime.started_date.slice(0, 4)) <= Number(params.get("item")) + 9) {
          return anime;
        }
      }).map((filteredAnime) => filteredAnime);
    }
    setData(list);
    setIsFetched(true);
  }

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    getAnimeData();
  }, [params.get("item")]);

  function getTabs() {
    const numOfTabs = Math.floor(data.length / 10);
    return <TabBlocks numOfTabs={numOfTabs} />;
  }

  return (
    isFetched ?
      <div id='class'>
        <div className='title'>{term}: {item}</div>
        {
          data.map((anime) => <AnimeItem data={anime} />)
        }
        {
          getTabs()
        }
      </div>
      : <Indicator />
  );
}
