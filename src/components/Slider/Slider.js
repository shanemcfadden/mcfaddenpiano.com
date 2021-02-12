import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

const Slider = ({ slides, autoPlay }) => {
  const autoPlayRef = useRef();
  const [browserWidth, setBrowserWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0.45);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    setBrowserWidth(window.innerWidth);
    window.onresize = () => {
      setBrowserWidth(window.innerWidth);
    };
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, autoPlay * 1000);
    return () => {
      window.onresize = null;
      return () => clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setTranslate(activeSlide * browserWidth);
  }, [browserWidth]);

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setTranslate(0);
      setActiveSlide(0);

      return;
    }

    setTranslate((activeSlide + 1) * browserWidth);
    setActiveSlide(activeSlide + 1);
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setTranslate((slides.length - 1) * browserWidth);
      setActiveSlide(slides.length - 1);
      return;
    }

    setTranslate((activeSlide - 1) * browserWidth);
    setActiveSlide(activeSlide - 1);
  };

  return (
    <div className="slider">
      <SliderContent
        translate={translate}
        transition={transition}
        width={browserWidth * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={slides} activeSlide={activeSlide} />
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoPlay: PropTypes.number.isRequired,
};

export default Slider;
