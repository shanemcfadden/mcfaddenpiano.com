import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ imageUrl, ariaHidden, zIndex, leftPosition }) => {
  return (
    <div
      className="slider__slide"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        zIndex: zIndex,
        left: leftPosition,
      }}
      aria-hidden={ariaHidden}
    />
  );
};

Slide.propTypes = {
  imageUrl: PropTypes.string,
  ariaHidden: PropTypes.bool,
  zIndex: PropTypes.number,
  leftPosition: PropTypes.number,
};

export default React.memo(Slide);
