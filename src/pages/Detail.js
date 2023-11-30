import React, { useState, useEffect } from 'react';
import './Detail.css';
import DetailHero from '../components/DetailHero';
import { useSearchParams } from 'react-router-dom';
import DetailBody from '../components/DetailBody';
import CommentContainer from '../components/parts/CommentContainer';
import Indicator from '../components/parts/Indicator';
// import { request } from '../helpers/axios_helpers';
import animeList from '../data/anime';

export default function Detail() {
  const [params] = useSearchParams();

  // variable to judge if the data is fetched
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);

  async function getAnimeData() {
    // fetch data from DB
    // const result = await request(
    //   "GET",
    //   `/api/animes/${params.get("id")}`
    // );
    // setData(result.data[0]);

    // use local data
    setData(animeList.data[`${params.get("id") - 1}`]);
    setIsFetched(true);
  }

  useEffect(() => {
    // go to the top area
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    getAnimeData();
  }, []);

  return (
    isFetched ?
      <div id='detail'>
        {/* <CommentContainer id={data["anime_id"]} /> */}
        <DetailHero anime={data} />
        <DetailBody anime={data} />
      </div>
      : <Indicator />
  );
}
