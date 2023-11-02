import React, { useEffect, useState } from 'react';
import "./Home.css";
import Hero from '../components/HomeHero';
import HomeBody from '../components/HomeBody';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

export default function Home() {

  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);

  const apiUrl = process.env.REACT_APP_IS_DEV !== "true" ? process.env.REACT_APP_LOCALHOST_API_URL : process.env.REACT_APP_GCLOUD_API_URL;

  let result;
  async function getAnimeData() {
    result = await axios.get(`${apiUrl}/api/animes`);
    setData(result.data);
    setIsFetched(true);
  }

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    getAnimeData();
  }, []);

  return (
    isFetched ?
      <div>
        <Hero animeList={data} />
        <HomeBody animeList={data} />
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
        />
      </div>
  );
}
