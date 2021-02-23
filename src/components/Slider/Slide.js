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

    const elem = document.createElement('canvas');

    if (elem.getContext && elem.getContext('2d')) {
      // was able or not to get WebP representation
      // uses WebP src for all browsers supporting .webp
      // EXCEPT Firefox 65 & Edge 18
      bgImg.src = imageFluidData.srcWebp;
    } else {
      // very old browser like IE 8, canvas not supported
      bgImg.src = imageFluidData.src;
    }
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
    srcWebp: PropTypes.string.isRequired,
  }).isRequired,
  ariaHidden: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired,
  leftPosition: PropTypes.number.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default React.memo(Slide);
