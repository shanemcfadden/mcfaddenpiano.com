import PropTypes from 'prop-types';
import React from 'react';

const Dot = ({ active }) => (
  <span
    className="slider__dot"
    style={{
      background: `${active ? 'black' : 'white'}`,
    }}
  />
);

Dot.propTypes = {
  active: PropTypes.bool,
};

const Dots = ({ slides, activeSlideIndex }) => (
  <div className="slider__dot-row">
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlideIndex === i} />
    ))}
  </div>
);

Dots.propTypes = {
  activeSlideIndex: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dots;
