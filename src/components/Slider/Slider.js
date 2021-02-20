import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide';
import SliderNav from './SliderNav';
import Img from 'gatsby-image';

const Slider = ({
  slides,
  // startingImgData,
  autoPlay = 0,
  isFullScreen = false,
}) => {
  const autoPlayRef = useRef();
  const sliderRef = useRef();
  const autoPlayInterval = useRef();

  const [width, setWidth] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [prevActiveSlideIndex, setPrevActiveSlideIndex] = useState(0);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = () => {
      setWidth(window.innerWidth);
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
    if (activeSlideIndex === prevActiveSlideIndex)
      return i === activeSlideIndex;
    const stepsToLeft =
      prevActiveSlideIndex >= activeSlideIndex
        ? prevActiveSlideIndex - activeSlideIndex
        : prevActiveSlideIndex + slides.length - activeSlideIndex;
    const stepsToRight =
      prevActiveSlideIndex >= activeSlideIndex
        ? activeSlideIndex + slides.length - prevActiveSlideIndex
        : activeSlideIndex - prevActiveSlideIndex;

    const isInRange = (i, rangeStart, rangeEnd) => {
      if (i < 0) return null;
      if (rangeStart < rangeEnd) return i >= rangeStart && i <= rangeEnd;
      return i >= rangeStart || i <= rangeEnd;
    };

    return stepsToLeft < stepsToRight
      ? isInRange(i, activeSlideIndex, prevActiveSlideIndex)
      : isInRange(i, prevActiveSlideIndex, activeSlideIndex);
  };

  const getLeftValue = (i) => {
    let leftFactor = i - activeSlideIndex;

    if (leftFactor < -1 * Math.floor((slides.length - 1) / 2)) {
      leftFactor += slides.length;
    } else if (leftFactor > Math.floor(slides.length / 2)) {
      leftFactor -= slides.length;
    }

    return leftFactor * width;
  };

  return (
    <div
      className={`slider ${isFullScreen ? 'slider--fullscreen' : ''}`}
      ref={sliderRef}
    >
      {
        // TODO: Get blurred image?
        // {loadedSlides.length === 1 && (
        //   // Shows blurred image before inital image loads
        //   <Img
        //     className="slider__starting-img"
        //     alt="Shane McFadden at the piano accompanying a singer"
        //     fluid={startingImgData}
        //   />
        // )}
      }
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
          left={getLeftValue(i)}
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
