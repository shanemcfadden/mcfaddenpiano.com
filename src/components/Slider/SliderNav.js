import PropTypes from 'prop-types';
import React from 'react';
import Dot from './Dot';
import Arrow from './Arrow';

const SliderNav = ({
  slides,
  activeSlideIndex,
  nextSlide,
  prevSlide,
  goToSlide,
  stopAutoPlay,
}) => {
  return (
    <div
      onClick={() => {
        stopAutoPlay();
      }}
      className="slider-nav"
    >
      <Arrow
        direction={'left'}
        handleClick={() => {
          prevSlide();
          stopAutoPlay();
        }}
      />
      <div className="slider__dot-row">
        {slides.map((slide, i) => (
          <Dot
            key={'nav-dot' + i}
            onClick={() => goToSlide(i)}
            active={activeSlideIndex === i}
          />
        ))}
      </div>
      <Arrow
        direction={'right'}
        handleClick={() => {
          nextSlide();
          stopAutoPlay();
        }}
      />
    </div>
  );
};

SliderNav.propTypes = {
  activeSlideIndex: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  stopAutoPlay: PropTypes.func.isRequired,
  goToSlide: PropTypes.func.isRequired,
};

export default SliderNav;
