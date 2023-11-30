import React, { useEffect, useState } from 'react';
import "./Home.css";
import Hero from '../components/HomeHero';
import HomeBody from '../components/HomeBody';
import Indicator from '../components/parts/Indicator';
import { request } from '../helpers/axios_helpers';
import animeList from '../data/anime';

export default function Home() {

  // variable to judge if the data is fetched
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);

  async function getAnimeData() {
    // fetch data from DB
    // const result = await request(
    //   "GET",
    //   "/api/animes"
    // );

    // use local data
    const result = animeList;
    setData(result.data);
    setIsFetched(true);
  }

  useEffect(() => {
    // go to the top area
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    getAnimeData();
  }, []);

  return (
    isFetched ?
      <div id='home'>
        <Hero animeList={data} />
        <HomeBody animeList={data} />
      </div>
      : <Indicator />
  );
}
