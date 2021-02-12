import PropTypes from 'prop-types';
import React from 'react';

const Dot = ({ active }) => (
  <span
    style={{
      padding: '10px',
      marginRight: '5px',
      cursor: 'pointer',
      borderRadius: '50%',
      background: `${active ? 'black' : 'white'}`,
    }}
  />
);

Dot.propTypes = {
  active: PropTypes.bool,
};

const Dots = ({ slides, activeIndex }) => (
  <div
    style={{
      position: 'absolute',
      bottom: '25px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
);

Dots.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dots;
