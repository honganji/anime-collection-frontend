import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./AnimeItem.css";

export default function AnimeItem(props) {
  const data = props.data;
  const navigator = useNavigate();
  return (
    <div id='home-anime-item'>
      <img className='img' src={data["image_url"]} alt='trailer' onClick={() => navigator(`/detail?id=${data["id"]}`)} />
      <div className='info-container'>
        <div className='anime-title' onClick={() => navigator(`/detail?id=${data["id"]}`)}>{data["name"]}</div>
        <div className='item'><div className='subtitle'>Author:</div>&nbsp;&nbsp;{data["author"]}</div>
        <div className='item'><div className='subtitle'>Episodes:</div>&nbsp;&nbsp;{data["episodes"]}, Serises: {data["serises"]}</div>
        <div className='item'><div className='subtitle'>Desription:</div>&nbsp;&nbsp;{data["description"]}</div>
      </div>
    </div>
  );
}
