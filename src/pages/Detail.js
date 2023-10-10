import React from 'react';
import './Detail.css';
import DetailHero from '../components/DetailHero';
import animeList from '../data/anime';
import { useSearchParams } from 'react-router-dom';
import DetailBody from '../components/DetailBody';

export default function Detail() {
  const [params] = useSearchParams();
  return (
    <div id='detail'>
      <DetailHero anime={animeList[params.get("id") - 1]} />
      <DetailBody anime={animeList[params.get("id") - 1]} />
    </div>
  );
}
