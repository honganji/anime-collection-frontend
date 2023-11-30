import React, { useState } from 'react';
import "./DetailBody.css";

export default function DetailBody(props) {
  const data = props.anime;

  // control video type(mad or trailer)
  const [isMad, setIsMad] = useState(true);

  function switchVideoType() {
    setIsMad(!isMad);
  }

  return (
    <div id='detail-body'>
      <div className='title'>{data["name"]}</div>
      <div className='tv-container'>
        <img className='thumbnail' src={data["image_url"]} alt='author_img' />
        <div className='video-container'>
          <iframe className='video-iframe' src={`https://www.youtube.com/embed/${isMad ? data["mad_id"] : data["trailer_id"]}`} title='trailer'></iframe>
          <div className='btn-container'>
            <button className='btn monotone_btn' disabled={!isMad ? true : false} onClick={() => switchVideoType()}>Trailer</button>
            <button className='btn monotone_btn' disabled={isMad ? true : false} onClick={() => switchVideoType()}>MAD</button>
          </div>
        </div>
      </div>
      <div className='story-container'>
        <div className='story-title'>Story</div>
        <div>{data["story"]}</div>
      </div>
      <div className='author-container'>
        <div className='author-title'>Author</div>
        <img className='author-img' src={data["author_img"] === "" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg" : data["author_img"]} alt='author_img' />
        <div className='author-description'>Name:&nbsp;<div className='author-content'>{data["author"]}</div></div>
        <div className='author-description'>Work:&nbsp;<div className='author-content'>{`${data["author_works"]}, etc.`}</div></div>
      </div>
      <div className='cv-container'>
        <div className='cv-title'>Characters</div>
        <div className='cv-sub-container'>
          {
            data["characters"].map((character, index) => {
              return <div className='character-container' key={index}>
                <img className='character-img' src={character["img_url"]} alt='character_img' />
                <div className='author-description'>Name:&nbsp;<div className='author-content'>{character["name"]}</div></div>
                <div className='author-feature-description'>Feature:&nbsp;<div className='author-feature-content'>{character["feature"]}</div></div>
              </div>;
            })
          }
        </div>
      </div>
    </div>
  );
}
