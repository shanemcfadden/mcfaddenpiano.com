import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

const Slide = ({
  imageFluidData,
  ariaHidden,
  zIndex,
  leftPosition,
  onLoad,
}) => {
  useEffect(() => {
    const bgImg = new Image();
    bgImg.onload = () => {
      onLoad();
    };
    // TODO: Check for webP support
    bgImg.src = imageFluidData.src;
  }, []);

  return (
    <BackgroundImage
      fluid={imageFluidData}
      backgroundColor={'#111'}
      className="slider__slide"
      style={{
        zIndex: zIndex,
        left: leftPosition,
        position: 'absolute', // Won't work in class
        top: 0, // Won't work in class
      }}
      aria-hidden={ariaHidden}
    />
  );
};

Slide.propTypes = {
  imageFluidData: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  ariaHidden: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired,
  leftPosition: PropTypes.number.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default React.memo(Slide);
