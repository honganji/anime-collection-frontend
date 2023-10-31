import React, { useEffect, useState } from 'react';
import "./Home.css";
import Hero from '../components/HomeHero';
import HomeBody from '../components/HomeBody';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

export default function Home() {

  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);

  let result;
  async function getAnimeData() {
    result = await axios.get("http://localhost:8080/api/animes");
    console.log(result.data);
    setData(result.data);
    setIsFetched(true);
  }

  useEffect(() => {
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
