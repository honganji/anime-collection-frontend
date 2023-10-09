import React from 'react';
import "./Home.css";
import Hero from '../components/Hero';
import Body from '../components/Body';
import animeList from "../data/anime";

export default function Home() {
  return (
    <div>
      <Hero animeList={animeList} />
      <Body animeList={animeList} />
    </div>
  );
}
