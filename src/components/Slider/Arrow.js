import PropTypes from 'prop-types';
import React from 'react';
import leftArrow from '../../images/icons/keyboard_arrow_left-24px.svg';
import rightArrow from '../../images/icons/keyboard_arrow_right-24px.svg';

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    className="slider__arrow"
    style={{
      [direction]: '25px',
    }}
  >
    <img
      style={{
        transform: `translateX(${direction === 'left' ? '-' : ''}2px)`,
      }}
      src={direction === 'left' ? leftArrow : rightArrow}
    />
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  handleClick: PropTypes.func,
};

export default Arrow;
