import React from 'react';
import "./Home.css";
import Hero from '../components/HomeHero';
import HomeBody from '../components/HomeBody';
import animeList from "../data/anime";

export default function Home() {
  return (
    <div>
      <Hero animeList={animeList} />
      <HomeBody animeList={animeList} />
    </div>
  );
}
