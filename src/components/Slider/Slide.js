import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ imageUrl, ariaHidden, zIndex, left }) => {
  return (
    <div
      className="slider__slide"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        zIndex: zIndex,
        left: left,
      }}
      aria-hidden={ariaHidden}
    />
  );
};

Slide.propTypes = {
  imageUrl: PropTypes.string,
  ariaHidden: PropTypes.bool,
  zIndex: PropTypes.number,
  left: PropTypes.number,
};

export default React.memo(Slide);
