import PropTypes from 'prop-types';
import React, { memo } from 'react';

const Dot = ({ active, onClick }) => (
  <span
    className="slider__dot"
    onClick={onClick}
    style={{
      background: `${active ? 'black' : 'white'}`,
    }}
  />
);

Dot.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default memo(Dot);
