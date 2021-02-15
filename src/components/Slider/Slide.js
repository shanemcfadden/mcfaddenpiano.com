import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ content }) => {
  return (
    <div
      className="slider__slide"
      style={{
        backgroundImage: `url('${content}')`,
      }}
    ></div>
  );
};

Slide.propTypes = {
  content: PropTypes.string,
};

export default React.memo(Slide);
