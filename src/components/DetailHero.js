import React, { useState, useEffect } from 'react';
import "./DetailHero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCircle, faHandPointLeft, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

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

  useEffect(() => {
    var heroZone = document.getElementById("detail-hero");
    console.log(heroZone);
    heroZone.addEventListener('touchstart', handleTouchStart, false);
    heroZone.addEventListener('touchmove', handleTouchMove, false);
  });

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
        /* right swipe */
        if (slideIndex < 5) {
          setSlideIndex(slideIndex + 1);
        }
      } else {
        /* left swipe */
        if (slideIndex > 1) {
          setSlideIndex(slideIndex - 1);
        }
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };
  return (
    <div id='detail-hero'>
      {slideIndex === 1
        ? <div style={{ width: "64px" }}></div>
        :
        <div onClick={() => setSlideIndex(slideIndex - 1)}>
          <FontAwesomeIcon className='sp-fa' icon={faHandPointLeft} />
        </div>
      }
      <div className='content-container'>
        <div className="container">
          <div className='sub-container'>
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
          <div className='sub-container'>
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
      {slideIndex === 5
        ? <div style={{ width: "64px" }}></div>
        :
        <div onClick={() => setSlideIndex(slideIndex + 1)}>
          <FontAwesomeIcon className='sp-fa' icon={faHandPointRight} />
        </div>
      }
    </div>
  );
}
