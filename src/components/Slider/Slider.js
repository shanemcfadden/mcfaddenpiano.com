import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';

const Slider = ({ slides }) => {
  const [browserWidth, setBrowserWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0.45);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setBrowserWidth(window.innerWidth);
    window.onresize = () => {
      setBrowserWidth(window.innerWidth);
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  useEffect(() => {
    setTranslate(activeIndex * browserWidth);
  }, [browserWidth]);

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      setTranslate(0);
      setActiveIndex(0);

      return;
    }

    setTranslate((activeIndex + 1) * browserWidth);
    setActiveIndex(activeIndex + 1);
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      setTranslate((slides.length - 1) * browserWidth);
      setActiveIndex(slides.length - 1);
      return;
    }

    setTranslate((activeIndex - 1) * browserWidth);
    setActiveIndex(activeIndex - 1);
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
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string),
};

export default Slider;
