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
  const stopAutoPlayAnd = (otherFcn, args = []) => {
    return function () {
      otherFcn(...args);
      stopAutoPlay();
    };
  };

  return (
    <div className="slider-nav">
      <Arrow direction={'left'} handleClick={stopAutoPlayAnd(prevSlide)} />
      <div className="slider__dot-row">
        {slides.map((slide, i) => (
          <Dot
            key={'nav-dot' + i}
            onClick={stopAutoPlayAnd(goToSlide, [i])}
            active={activeSlideIndex === i}
            index={i}
          />
        ))}
      </div>
      <Arrow direction={'right'} handleClick={stopAutoPlayAnd(nextSlide)} />
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
