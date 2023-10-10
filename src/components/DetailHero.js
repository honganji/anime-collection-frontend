import React, { useState } from 'react';
import "./DetailHero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';

export default function DetailHero(props) {
  const [slideIndex, setSlideIndex] = useState(1);
  const data = props.anime;
  console.log(data);
  const imageUrlList = data["images"];
  console.log(imageUrlList);
  console.log(slideIndex);

  function generateDots() {
    let dotList = [];
    for (let i = 1; i <= 5; i++) {
      dotList.push(
        <FontAwesomeIcon className='dot' icon={faCircle} style={i === slideIndex ? { color: "#E8582E", } : { color: "#B8B8B8", }} />
      );
    }
    return dotList;
  }
  return (
    <div id='detail-hero'>
      <div className="container">
        <div className='left-container'>
          {slideIndex === 1
            ? <div style={{ width: "96px" }}></div>
            :
            <div onClick={() => setSlideIndex(slideIndex - 1)}>
              <FontAwesomeIcon className='fa' icon={faArrowLeft} />
            </div>
          }
          {slideIndex > 1 ? <img className='sub-image' src={imageUrlList[slideIndex - 2]} alt='anime_image' /> : <div className='sub-image'></div>}
        </div>
        <img className='main-image' src={imageUrlList[slideIndex - 1]} alt='anime_image' />

        <div className='left-container'>
          {slideIndex === 5
            ? <div style={{ width: "96px" }}></div>
            :
            <div onClick={() => setSlideIndex(slideIndex + 1)}>
              <FontAwesomeIcon className='fa' icon={faArrowRight} />
            </div>
          }
          {slideIndex < 5 ? <img className='sub-image' src={imageUrlList[slideIndex]} alt='anime_image' /> : <div className='sub-image'></div>}
        </div>
      </div>
      <div className='dot-container'>{generateDots()}</div>
    </div>
  );
}
