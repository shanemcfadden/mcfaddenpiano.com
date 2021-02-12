import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

const Slider = ({ slides, autoPlay }) => {
  const lastSlide = slides[slides.length - 1];
  const firstSlide = slides[0];
  const secondSlide = slides[1];

  const autoPlayRef = useRef();
  const transitionRef = useRef();

  const [browserWidth, setBrowserWidth] = useState(0);
  const [currentState, setState] = useState({
    translate: browserWidth,
    transition: 0.45,
    activeSlideIndex: 0,
    loadedSlides: [lastSlide, firstSlide, secondSlide],
  });
  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
  });

  useEffect(() => {
    setBrowserWidth(window.innerWidth);
    window.onresize = () => {
      setBrowserWidth(window.innerWidth);
    };

    const play = () => {
      autoPlayRef.current();
    };

    const smooth = () => {
      transitionRef.current();
    };

    const interval = setInterval(play, autoPlay * 1000);
    window.addEventListener('transitionend', smooth);
    return () => {
      clearInterval(interval);
      window.onresize = null;
      window.removeEventListener('transitionend', smooth);
    };
  }, []);

  useEffect(() => {
    setState({
      ...currentState,
      translate: currentState.activeSlideIndex * browserWidth,
    });
  }, [browserWidth]);

  useEffect(() => {
    if (currentState.transition === 0) {
      setState({
        ...currentState,
        transition: 0.45,
      });
    }
  }, [currentState.transition]);

  const nextSlide = () => {
    setState({
      ...currentState,
      translate: currentState.translate + browserWidth,
      activeSlideIndex:
        currentState.activeSlideIndex === slides.length - 1
          ? 0
          : currentState.activeSlideIndex + 1,
    });
  };

  const prevSlide = () => {
    setState({
      ...currentState,
      translate: 0,
      activeSlideIndex:
        currentState.activeSlideIndex === 0
          ? slides.length - 1
          : currentState.activeSlideIndex - 1,
    });
  };

  const smoothTransition = () => {
    let _slides = [];
    const { activeSlideIndex } = currentState;

    // TODO: REFACTOR WITH MODULO?
    if (activeSlideIndex === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    else if (activeSlideIndex === 0)
      _slides = [lastSlide, firstSlide, secondSlide];
    else _slides = slides.slice(activeSlideIndex - 1, activeSlideIndex + 2);

    setState({
      ...currentState,
      transition: 0,
      translate: browserWidth,
      loadedSlides: _slides,
    });
  };

  const {
    translate,
    transition,
    loadedSlides,
    activeSlideIndex,
  } = currentState;

  return (
    <div className="slider">
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
