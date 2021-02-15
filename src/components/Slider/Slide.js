import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ imageUrl }) => {
  return (
    <div
      className="slider__slide"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    />
  );
};

Slide.propTypes = {
  imageUrl: PropTypes.string,
};

export default React.memo(Slide);
