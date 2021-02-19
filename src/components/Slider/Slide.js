import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ imageUrl, ariaHidden }) => {
  return (
    <div
      className="slider__slide"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
      aria-hidden={ariaHidden}
    />
  );
};

Slide.propTypes = {
  imageUrl: PropTypes.string,
  ariaHidden: PropTypes.bool,
};

export default React.memo(Slide);
