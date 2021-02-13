import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef, useReducer } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

function reducer(state, action) {
  switch (action.type) {
    case 'browserWidth':
      return { ...state, browserWidth: action.value };
    case 'nextSlide':
      return {
        ...state,
        translate: state.translate + state.browserWidth,
        activeSlideIndex: (state.activeSlideIndex + 1) % action.numberOfSlides,
      };
    case 'prevSlide':
      return {
        ...state,
        translate: 0,
        activeSlideIndex:
          state.activeSlideIndex === 0
            ? action.numberOfSlides - 1
            : state.activeSlideIndex - 1,
      };
    case 'smoothTransition':
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
      return { ...state, transition: action.value };
    case 'translate':
      return { ...state, translate: action.value };
    default:
      throw new Error('Invalid action type');
  }
}

const Slider = ({ slides, autoPlay }) => {
  // const lastSlide = slides[slides.length - 1];
  const firstSlide = slides[0];
  const secondSlide = slides[1];

  const autoPlayRef = useRef();
  const transitionRef = useRef();

  const [state, dispatch] = useReducer(reducer, {
    browserWidth: 0,
    translate: 0,
    transition: 0.45,
    activeSlideIndex: 0,
    loadedSlides: [firstSlide, secondSlide],
  });

  // const [browserWidth, setBrowserWidth] = useState(0);
  // const [currentState, setState] = useState({
  //   translate: 0,
  //   transition: 0.45,
  //   activeSlideIndex: 0,
  //   loadedSlides: [firstSlide, secondSlide],
  // });
  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    dispatch({
      type: 'browserWidth',
      value: window.innerWidth,
    });
    // setBrowserWidth(window.innerWidth);
    window.onresize = () => {
      // setBrowserWidth(window.innerWidth);
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
    dispatch({
      type: 'translate',
      value: state.activeSlideIndex * state.browserWidth,
    });
    // setState({
    //   ...currentState,
    //   translate: currentState.activeSlideIndex * browserWidth,
    // });
  }, [state.browserWidth]);

  useEffect(() => {
    if (state.transition === 0) {
      dispatch({
        type: 'transition',
        value: 0.45,
      });
      // setState({
      //   ...currentState,
      //   transition: 0.45,
      // });
    }
  }, [state.transition]);

  const nextSlide = () => {
    dispatch({ type: 'nextSlide', numberOfSlides: slides.length });
    // setState({
    //   ...currentState,
    //   translate: currentState.translate + browserWidth,
    //   activeSlideIndex: (currentState.activeSlideIndex + 1) % slides.length,
    // });
  };

  const prevSlide = () => {
    dispatch({ type: 'prevSlide', numberOfSlides: slides.length });
    // setState({
    //   ...currentState,
    //   translate: 0,
    //   activeSlideIndex:
    //     currentState.activeSlideIndex === 0
    //       ? slides.length - 1
    //       : currentState.activeSlideIndex - 1,
    // });
  };

  const smoothTransition = () => {
    // const { activeSlideIndex } = currentState;
    // const slidesLength = slides.length;

    dispatch({ type: 'smoothTransition', slides: slides });
    console.log(state.loadedSlides);
    // setState((prevState) => ({
    //   ...prevState,
    //   transition: 0,
    //   translate: browserWidth,
    //   loadedSlides: [
    //     slides[activeSlideIndex > 0 ? activeSlideIndex - 1 : slidesLength - 1],
    //     slides[activeSlideIndex],
    //     slides[(activeSlideIndex + 1) % slidesLength],
    //   ],
    // }));
  };

  const {
    translate,
    transition,
    loadedSlides,
    activeSlideIndex,
    browserWidth,
  } = state;

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
