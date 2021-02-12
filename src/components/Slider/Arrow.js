import React from 'react';
import leftArrow from '../../images/icons/keyboard_arrow_left-24px.svg';
import rightArrow from '../../images/icons/keyboard_arrow_right-24px.svg';

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    style={{
      display: 'flex',
      position: 'absolute',
      top: '50%',
      [direction]: '25px',
      //   ${direction === 'right' ? `right: 25px` : `left: 25px`},
      height: '50px',
      width: '50px',
      justifyContent: 'center',
      background: 'white',
      borderRadius: '50%',
      cursor: 'pointer',
      alignItems: 'center',
      transition: 'transform ease-in 0.1s',
      //   &:hover {
      //     transform: scale(1.1),
      //   }
      //   img {
      //     transform: translateX(${direction === 'left' ? '-2' : '2'}px),
      //     &:focus {
      //       outline: 0,
      //     }
    }}
  >
    {direction === 'left' ? (
      <img
        style={{
          transform: `translateX(-2px)`,
          // &:focus {
          //   outline: 0,
          // }
        }}
        src={leftArrow}
      />
    ) : (
      <img
        style={{
          transform: `translateX(2px)`,
          // &:focus {
          //   outline: 0,
          // }
        }}
        src={rightArrow}
      />
    )}
  </div>
);

export default Arrow;
