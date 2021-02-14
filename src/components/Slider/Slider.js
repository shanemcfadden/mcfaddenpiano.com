import PropTypes from 'prop-types';
import React, { useEffect, useRef, useReducer } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import SliderNav from './SliderNav';
import reducer from './sliderReducer';

const Slider = ({ slides, autoPlay }) => {
  const autoPlayRef = useRef();
  const transitionRef = useRef();

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
      value: window.innerWidth,
    });
    window.onresize = () => {
      console.log('onresize', window.innerWidth);
      dispatch({
        type: 'browserWidth',
        value: window.innerWidth,
      });
    };

    const play = () => {
      autoPlayRef.current();
    };

    const smooth = () => {
      transitionRef.current();
    };

    // const interval = setInterval(play, autoPlay * 1000);
    document
      .querySelector('.slider__content')
      .addEventListener('transitionend', smooth);
    return () => {
      // clearInterval(interval);
      window.onresize = null;
      document
        .querySelector('.slider__content')
        .removeEventListener('transitionend', smooth);
    };
  }, []);

  useEffect(() => {
    // Initial load, browser width set for the first time
    if (loadedSlides.length === 1) {
      // load 3 photos and arrange them accordingly
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

  return (
    <div className="slider">
      <div className="slider__overlay">
        <h1>Shane McFadden</h1>
        <h2>Collaborative Pianist</h2>
      </div>
      <SliderContent
        translate={translate}
        transition={transition}
        width={browserWidth * loadedSlides.length}
      >
        {loadedSlides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
      <SliderNav
        nextSlide={nextSlide}
        prevSlide={prevSlide}
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
};

export default Slider;
