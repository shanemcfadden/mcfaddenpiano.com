import PropTypes from 'prop-types';
import React, { useEffect, useRef, useReducer } from 'react';
import SliderContent from './SliderContent';
import SliderNav from './SliderNav';
import reducer from './sliderReducer';
import Img from 'gatsby-image';

const Slider = ({
  slides,
  startingImgData,
  autoPlay = 0,
  isFullScreen = false,
}) => {
  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const sliderRef = useRef();
  const autoPlayInterval = useRef();

  const [state, dispatch] = useReducer(reducer, {
    browserWidth: 0,
    translate: 0,
    transition: 0.45,
    activeSlideIndex: 0,
    loadedSlides: [slides[0]],
  });

  const {
    translate,
    transition,
    loadedSlides,
    activeSlideIndex,
    browserWidth,
  } = state;

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    dispatch({
      type: 'browserWidth',
      browserWidth: window.innerWidth,
    });
    window.onresize = () => {
      dispatch({
        type: 'browserWidth',
        browserWidth: window.innerWidth,
      });
    };

    const play = () => {
      autoPlayRef.current();
    };
    const smooth = () => {
      transitionRef.current();
    };

    autoPlayInterval.current =
      autoPlay === 0 ? null : setInterval(play, autoPlay * 1000);
    document
      .querySelector('.slider__content')
      .addEventListener('transitionend', smooth);
    return () => {
      clearInterval(autoPlayInterval.current);
      window.onresize = null;
      document
        .querySelector('.slider__content')
        .removeEventListener('transitionend', smooth);
    };
  }, []);

  useEffect(() => {
    if (loadedSlides.length === 1) {
      // Initial load, browser width set for the first time
      // load photos for SliderContent and translate them without a visible transition
      dispatch({ type: 'smoothTransition', slides: slides });
    } else {
      // Adjust translation as browser width changes
      dispatch({
        type: 'translate',
        value: Math.floor((slides.length - 1) / 2) * browserWidth,
      });
    }
  }, [browserWidth]);

  useEffect(() => {
    if (transition === 0) {
      dispatch({
        type: 'transition',
        value: 0.45,
      });
    }
  }, [transition]);

  const nextSlide = () => {
    const nextSlideIndex = (activeSlideIndex + 1) % slides.length;
    dispatch({
      type: 'goToSlide',
      newSlideIndex: nextSlideIndex,
      slides: slides,
    });
  };

  const prevSlide = () => {
    const prevSlideIndex =
      activeSlideIndex > 0 ? activeSlideIndex - 1 : slides.length - 1;
    dispatch({
      type: 'goToSlide',
      newSlideIndex: prevSlideIndex,
      slides: slides,
    });
  };

  const goToSlide = (i) => {
    dispatch({ type: 'goToSlide', newSlideIndex: i, slides: slides });
  };

  const smoothTransition = () => {
    dispatch({ type: 'smoothTransition', slides: slides });
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval.current);
  };

  return (
    <div
      className={`slider ${isFullScreen ? 'slider--fullscreen' : ''}`}
      ref={sliderRef}
    >
      {loadedSlides.length === 1 && (
        // Shows blurred image before inital image loads
        <Img
          className="slider__starting-img"
          alt="Shane McFadden at the piano accompanying a singer"
          fluid={startingImgData}
        />
      )}
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
      <SliderContent
        translate={translate}
        transition={transition}
        width={browserWidth * loadedSlides.length}
        slides={loadedSlides}
      />
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
