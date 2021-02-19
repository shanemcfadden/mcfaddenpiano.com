import PropTypes from 'prop-types';
import React from 'react';
import leftArrow from '../../images/icons/keyboard_arrow_left-24px.svg';
import rightArrow from '../../images/icons/keyboard_arrow_right-24px.svg';

const Arrow = ({ direction, handleClick }) => (
  <div
    onKeyDown={(e) => {
      console.log(e.key);

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleClick();
      }
    }}
    onClick={handleClick}
    className="slider__arrow"
    tabIndex="0"
  >
    <img
      src={direction === 'left' ? leftArrow : rightArrow}
      alt={`${direction} image slider arrow`}
    />
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  handleClick: PropTypes.func,
};

export default Arrow;
