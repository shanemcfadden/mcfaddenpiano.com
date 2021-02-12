import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ content }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url('${content}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></div>
  );
};

Slide.propTypes = {
  content: PropTypes.string,
};

export default Slide;
