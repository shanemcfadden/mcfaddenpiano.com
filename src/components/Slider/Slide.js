import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Slide = ({ imageUrl, ariaHidden, zIndex, leftPosition, onLoad }) => {
  useEffect(() => {
    const bgImg = new Image();
    bgImg.onload = () => {
      onLoad();
      console.log('Image has loaded!!!');
    };
    bgImg.src = imageUrl;
  }, []);

  return (
    <div
      className="slider__slide"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        zIndex: zIndex,
        left: leftPosition,
      }}
      aria-hidden={ariaHidden}
    />
  );
};

Slide.propTypes = {
  imageUrl: PropTypes.string,
  ariaHidden: PropTypes.bool,
  zIndex: PropTypes.number,
  leftPosition: PropTypes.number,
  onLoad: PropTypes.func,
  currentLoadedSlides: PropTypes.number,
};

export default React.memo(Slide);
