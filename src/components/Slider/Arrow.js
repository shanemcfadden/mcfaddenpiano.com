import PropTypes from 'prop-types';
import React from 'react';
import leftArrow from '../../images/icons/keyboard_arrow_left-24px.svg';
import rightArrow from '../../images/icons/keyboard_arrow_right-24px.svg';

const Arrow = ({ direction, handleClick }) => (
  <div onClick={handleClick} className="slider__arrow">
    <img src={direction === 'left' ? leftArrow : rightArrow} />
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  handleClick: PropTypes.func,
};

export default Arrow;
