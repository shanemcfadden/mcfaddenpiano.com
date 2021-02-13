import React from 'react';
import PropTypes from 'prop-types';

const SliderContent = (props) => {
  const { translate, transition, width } = props;
  return (
    <div
      className="slider__content"
      style={{
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
        height: '100%',
        width: `${width}px`,
        display: 'flex',
      }}
    >
      {props.children}
    </div>
  );
};

SliderContent.propTypes = {
  translate: PropTypes.number,
  transition: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SliderContent;
