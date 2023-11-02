import React, { useState, useEffect } from 'react';
import './Detail.css';
import DetailHero from '../components/DetailHero';
import { useSearchParams } from 'react-router-dom';
import DetailBody from '../components/DetailBody';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import CommentContainer from '../components/parts/CommentContainer';

export default function Detail() {
  const [params] = useSearchParams();
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);

  const apiUrl = process.env.REACT_APP_IS_DEV !== "true" ? process.env.REACT_APP_LOCALHOST_API_URL : process.env.REACT_APP_GCLOUD_API_URL;

  let result;
  async function getAnimeData() {
    result = await axios.get(`${apiUrl}/api/animes/${params.get("id")}`);
    setData(result.data[0]);
    setIsFetched(true);
  }

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    getAnimeData();
  }, []);
  return (
    isFetched ?
      <div id='detail'>
        <CommentContainer id={data["anime_id"]} />
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
