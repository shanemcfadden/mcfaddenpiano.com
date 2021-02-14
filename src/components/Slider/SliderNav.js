import PropTypes from 'prop-types';
import React from 'react';
import { Dot } from './Dots';
import Arrow from './Arrow';

const SliderNav = ({
  slides,
  activeSlideIndex,
  nextSlide,
  prevSlide,
  goToSlide,
}) => {
  return (
    <div className="slider__dot-row">
      <Arrow direction={'left'} handleClick={prevSlide} />
      {slides.map((slide, i) => (
        <Dot
          key={slide.src}
          onClick={() => goToSlide(i)}
          active={activeSlideIndex === i}
        />
      ))}
      <Arrow direction={'right'} handleClick={nextSlide} />
    </div>
  );
};

SliderNav.propTypes = {
  activeSlideIndex: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  goToSlide: PropTypes.func.isRequired,
};

export default SliderNav;
