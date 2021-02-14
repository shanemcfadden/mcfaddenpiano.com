import PropTypes from 'prop-types';
import React from 'react';

export const Dot = ({ active, onClick }) => (
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

// const Dots = ({ slides, activeSlideIndex }) => (
//   <div className="slider__dot-row">
//     {slides.map((slide, i) => (
//       <Dot key={slide} active={activeSlideIndex === i} />
//     ))}
//   </div>
// );

// Dots.propTypes = {
//   activeSlideIndex: PropTypes.number.isRequired,
//   slides: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default Dots;
