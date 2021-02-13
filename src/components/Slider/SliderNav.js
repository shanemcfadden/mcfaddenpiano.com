import PropTypes from 'prop-types';
import React from 'react';
import { Dot } from './Dots';

const SliderNav = ({ slides, activeSlideIndex }) => {
  return (
    <div className="slider__dot-row">
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeSlideIndex === i} />
      ))}
    </div>
  );
};

SliderNav.propTypes = {
  activeSlideIndex: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderNav;
