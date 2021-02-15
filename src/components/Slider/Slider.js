import PropTypes from 'prop-types';
import React, { useEffect, useRef, useReducer } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

function reducer(state, action) {
  switch (action.type) {
    case 'browserWidth':
      console.log('action: browserWidth');
      return { ...state, browserWidth: action.value };
    case 'nextSlide':
      console.log('action: nextSlide');
      return {
        ...state,
        translate: state.translate + state.browserWidth,
        activeSlideIndex: (state.activeSlideIndex + 1) % action.numberOfSlides,
      };
    case 'prevSlide':
      console.log('action: prevSlide');
      return {
        ...state,
        translate: 0,
        activeSlideIndex:
          state.activeSlideIndex === 0
            ? action.numberOfSlides - 1
            : state.activeSlideIndex - 1,
      };
    case 'smoothTransition':
      console.log('action: smoothTransition');
      console.log(state);
      return {
        ...state,
        transition: 0,
        translate: state.browserWidth,
        loadedSlides: [
          action.slides[
            state.activeSlideIndex > 0
              ? state.activeSlideIndex - 1
              : action.slides.length - 1
          ],
          action.slides[state.activeSlideIndex],
          action.slides[(state.activeSlideIndex + 1) % action.slides.length],
        ],
      };
    case 'transition':
      console.log('action: transition');
      return { ...state, transition: action.value };
    case 'translate':
      console.log('action: translate');
      return { ...state, translate: action.value };
    default:
      throw new Error('Invalid action type');
  }
}

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
        value: browserWidth,
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
    dispatch({ type: 'nextSlide', numberOfSlides: slides.length });
  };

  const prevSlide = () => {
    dispatch({ type: 'prevSlide', numberOfSlides: slides.length });
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
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={slides} activeSlideIndex={activeSlideIndex} />
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoPlay: PropTypes.number.isRequired,
};

export default Slider;
