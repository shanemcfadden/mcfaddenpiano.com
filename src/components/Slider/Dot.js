import PropTypes from 'prop-types';
import React, { memo } from 'react';

const Dot = ({ active, onClick, index }) => (
  <span
    className="slider__dot"
    onClick={onClick}
    style={{
      background: `${active ? '#333' : 'white'}`,
    }}
    role="button"
    aria-label={`View slideshow image ${index + 1}`}
  />
);

Dot.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  index: PropTypes.number,
};

export default memo(Dot);
