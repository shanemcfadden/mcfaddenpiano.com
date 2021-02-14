import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Slide = ({ imageData }) => {
  console.log(imageData, typeof imageData === 'string');
  return (
    <div
      className="slider__slide"
      style={{
        backgroundImage: `${
          typeof imageData === 'string' ? `url('${imageData}')` : 'none'
        }`,
      }}
    >
      {typeof imageData !== 'string' && <Img fluid={imageData} />}
    </div>
  );
};

Slide.propTypes = {
  imageData: PropTypes.string,
};

export default React.memo(Slide);
