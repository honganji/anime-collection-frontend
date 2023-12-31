import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomeHero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircle, faHandPointLeft, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero(props) {
  const navigator = useNavigate();

  // variable to control video type
  const [isMad, setIsMad] = useState(true);

  // index to control slide image
  const [slideIndex, setSlideIndex] = useState(1);
  const data = props.animeList;

  function switchVideoType() {
    setIsMad(!isMad);
  }

  // generate box that is put under the images
  function generateDots() {
    let dotList = [];
    for (let i = 1; i <= 4; i++) {
      dotList.push(
        <FontAwesomeIcon className='dot' icon={faCircle} key={i} style={i === slideIndex ? { color: "#E8582E", } : { color: "#B8B8B8", }} />
      );
    }
    return dotList;
  }

  useEffect(() => {
    var heroZone = document.getElementById("home-hero");
    heroZone.addEventListener('touchstart', handleTouchStart, false);
    heroZone.addEventListener('touchmove', handleTouchMove, false);
  });

  // enable to swipe on a mobile device
  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        // right swipe
        if (slideIndex < 4) {
          setSlideIndex(slideIndex + 1);
        }
      } else {
        // left swipe
        if (slideIndex > 1) {
          setSlideIndex(slideIndex - 1);
        }
      }
    }
    // reset values
    xDown = null;
    yDown = null;
  };

  return (
    <div id='home-hero'>
      {slideIndex === 1
        ? <div style={{ width: "64px" }}></div>
        :
        <div onClick={() => setSlideIndex(slideIndex - 1)}>
          <FontAwesomeIcon className='sp-fa' icon={faHandPointLeft} />
        </div>
      }
      <div className='content-container'>
        <div className="container">
          {slideIndex === 1
            ? <div style={{ width: "96px" }}></div>
            :
            <div onClick={() => setSlideIndex(slideIndex - 1)}>
              <FontAwesomeIcon className='fa' icon={faArrowLeft} />
            </div>
          }
          <div>
            <iframe className='video-iframe' src={`https://www.youtube.com/embed/${isMad ? data[slideIndex - 1]["mad_id"] : data[slideIndex - 1]["trailer_id"]}`} title='trailer'></iframe>
            <div className='btn-container'>
              <button className='btn monotone_btn' disabled={!isMad ? true : false} onClick={() => switchVideoType()}>Trailer</button>
              <button className='btn monotone_btn' disabled={isMad ? true : false} onClick={() => switchVideoType()}>MAD</button>
            </div>
          </div>
          <div className='info-container'>
            <img className='anime_img' src={data[slideIndex - 1]["image_url"]} alt='trailer' />
            <button className='btn monotone_btn detail_button' onClick={() => navigator(`/detail?id=${data[slideIndex - 1]["anime_id"]}`)}>
              Detail Page
            </button>
          </div>
          {slideIndex === 4
            ? <div style={{ width: "96px" }}></div>
            :
            <div onClick={() => setSlideIndex(slideIndex + 1)}>
              <FontAwesomeIcon className='fa' icon={faArrowRight} />
            </div>
          }
        </div>
        <div className='dot-container'>{generateDots()}</div>
      </div>
      {slideIndex === 4
        ? <div style={{ width: "64px" }}></div>
        :
        <div onClick={() => setSlideIndex(slideIndex + 1)}>
          <FontAwesomeIcon className='sp-fa' icon={faHandPointRight} />
        </div>
      }
    </div>
  );
}
