import React, { useEffect, useState } from 'react';
import "./Home.css";
import Hero from '../components/HomeHero';
import HomeBody from '../components/HomeBody';
import Indicator from '../components/parts/Indicator';
import { request } from '../helpers/axios_helpers';

export default function Home() {

  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);

  async function getAnimeData() {
    const result = await request(
      "GET",
      "/api/animes"
    );
    setData(result.data);
    setIsFetched(true);
  }

  useEffect(() => {
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
