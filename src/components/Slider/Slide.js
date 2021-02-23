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
    />
    // <div
    //   className="slider__slide"
    //   style={{
    //     backgroundImage: `url('${imageUrl}')`,
    //     zIndex: zIndex,
    //     left: leftPosition,
    //   }}
    //   aria-hidden={ariaHidden}
    // />
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
