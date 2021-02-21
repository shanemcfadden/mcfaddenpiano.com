import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide';
import SliderNav from './SliderNav';
import { isInRange, relativeIndexDifference } from '../../util/arrays';
import Img from 'gatsby-image';

const Slider = ({
  slides,
  startingImgData,
  autoPlay = 0,
  isFullScreen = false,
}) => {
  const autoPlayRef = useRef();
  const sliderRef = useRef();
  const autoPlayInterval = useRef();

  const [width, setWidth] = useState(3000);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [prevActiveSlideIndex, setPrevActiveSlideIndex] = useState(0);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    setWidth(document.querySelector('.slider').clientWidth);
    window.onresize = () => {
      setWidth(document.querySelector('.slider').clientWidth);
    };

    const play = () => {
      autoPlayRef.current();
    };

    autoPlayInterval.current =
      autoPlay === 0 ? null : setInterval(play, autoPlay * 1000);
    return () => {
      clearInterval(autoPlayInterval.current);
      window.onresize = null;
    };
  }, []);

  const goToSlide = (i) => {
    setPrevActiveSlideIndex(activeSlideIndex);
    setActiveSlideIndex(i);
  };

  const nextSlide = () => {
    const nextSlideIndex = (activeSlideIndex + 1) % slides.length;
    goToSlide(nextSlideIndex);
  };

  const prevSlide = () => {
    const prevSlideIndex =
      activeSlideIndex > 0 ? activeSlideIndex - 1 : slides.length - 1;
    goToSlide(prevSlideIndex);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval.current);
  };

  const hasHighZIndex = (i) => {
    const stepsToLeft = relativeIndexDifference(
      prevActiveSlideIndex,
      activeSlideIndex,
      slides.length
    );
    const stepsToRight = relativeIndexDifference(
      activeSlideIndex,
      prevActiveSlideIndex,
      slides.length
    );

    return stepsToLeft < stepsToRight
      ? isInRange(i, activeSlideIndex, prevActiveSlideIndex)
      : isInRange(i, prevActiveSlideIndex, activeSlideIndex);
  };

  const getLeftPosition = (i) => {
    let leftPositionFactor = i - activeSlideIndex;

    // activeSlide is in 0th position. Slides to left have a negative position. Those to right have a positive one
    const leftMostSlidePosition = -1 * Math.floor((slides.length - 1) / 2);
    const rightMostSlidePostion = Math.floor(slides.length / 2);

    // adjust leftPositionFactor to be within the available positions
    if (leftPositionFactor < leftMostSlidePosition) {
      leftPositionFactor += slides.length;
    } else if (leftPositionFactor > rightMostSlidePostion) {
      leftPositionFactor -= slides.length;
    }

    return leftPositionFactor * width;
  };

  return (
    <div
      className={`slider ${isFullScreen ? 'slider--fullscreen' : ''}`}
      style={{
        height: isFullScreen ? null : 0.56 * width,
      }}
      ref={sliderRef}
    >
      <Img
        className="slider__starting-img"
        alt="Shane McFadden at the piano accompanying a singer"
        fluid={startingImgData}
        style={{
          position: 'absolute',
        }}
        aria-hidden="true"
      />
      <div className="slider__overlay-container">
        <div
          className={`slider__overlay ${
            isFullScreen ? 'slider__overlay--fullscreen' : ''
          }`}
        >
          <h1>Shane McFadden</h1>
          <h2>Collaborative Pianist</h2>
        </div>
      </div>

      {slides.map((slide, i) => (
        <Slide
          key={'image-' + i}
          zIndex={hasHighZIndex(i) ? 1 : 0}
          leftPosition={getLeftPosition(i)}
          imageUrl={slide}
          ariaHidden={activeSlideIndex !== i}
        />
      ))}

      <SliderNav
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        stopAutoPlay={stopAutoPlay}
        slides={slides}
        activeSlideIndex={activeSlideIndex}
        goToSlide={goToSlide}
      />
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoPlay: PropTypes.number.isRequired,
  startingImgData: PropTypes.object.isRequired,
  isFullScreen: PropTypes.bool,
};

export default Slider;
