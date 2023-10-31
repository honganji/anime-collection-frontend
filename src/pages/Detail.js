import React, { useState, useEffect } from 'react';
import './Detail.css';
import DetailHero from '../components/DetailHero';
import animeList from '../data/anime';
import { useSearchParams } from 'react-router-dom';
import DetailBody from '../components/DetailBody';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

export default function Detail() {
  const [params] = useSearchParams();
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);

  let result;
  async function getAnimeData() {
    console.log(params.get("id"));
    result = await axios.get(`http://localhost:8080/api/animes/${params.get("id")}`);
    console.log(result.data);
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    setData(result.data[0]);
    setIsFetched(true);
  }

  useEffect(() => {
    getAnimeData();
  }, []);
  return (
    isFetched ?
      <div id='detail'>
        <DetailHero anime={data} />
        <DetailBody anime={data} />
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
