import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';

const SliderContent = (props) => {
  const { translate, transition, width, slides } = props;
  const activeSlideIndex = Math.floor((slides.length - 1) / 2);
  return (
    <div
      className="slider__content"
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        height: '100%',
        width: `${width}px`,
        display: 'flex',
      }}
    >
      {slides.map((slide, i) => (
        <Slide
          key={'image-' + i}
          imageUrl={slide}
          ariaHidden={activeSlideIndex !== i}
        />
      ))}
    </div>
  );
};

SliderContent.propTypes = {
  translate: PropTypes.number,
  transition: PropTypes.number,
  width: PropTypes.number,
  slides: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
};

export default React.memo(SliderContent);
