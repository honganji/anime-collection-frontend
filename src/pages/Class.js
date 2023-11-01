import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TabBlock from '../components/parts/TabBlock';
import AnimeItem from '../components/parts/AnimeItem';
import "./Class.css";
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

export default function Class() {
  const [params] = useSearchParams();
  const term = (params.get("term")).charAt(0).toUpperCase() + (params.get("term")).slice(1);
  // let item = "";
  let list = [];
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");

  let result;
  async function getAnimeData() {
    result = await axios.get("https://anime-collection-api-v2.de.r.appspot.com/api/animes");
    console.log(result.data);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // define item and classified anime list following the term
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
        console.log(Number.parseInt(anime.started_date.slice(0, 4)));
        if (Number.parseInt(anime.started_date.slice(0, 4)) >= params.get("item") && Number.parseInt(anime.started_date.slice(0, 4)) <= Number(params.get("item")) + 9) {
          return anime;
        }
      }).map((filteredAnime) => filteredAnime);
    }
    setData(list);
    setIsFetched(true);
  }

  useEffect(() => {
    getAnimeData();
  }, [params.get("item")]);

  // get tabs
  function getTabs() {
    const numOfTabs = Math.floor(data.length / 10);
    return <TabBlock numOfTabs={numOfTabs} />;
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
      : <div className='tail-spin'>
        <TailSpin height="80"
          width="80"
          color="#DC8C37"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /> </div>
  );
}
