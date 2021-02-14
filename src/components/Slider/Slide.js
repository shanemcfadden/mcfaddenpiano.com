import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Slide = ({ imageData }) => {
  return (
    <div
      className="slider__slide"
      // style={{
      //   backgroundImage: `url('${content}')`,
      // }}
    >
      <Img fluid={imageData} />
    </div>
  );
};

Slide.propTypes = {
  content: PropTypes.string,
};

export default React.memo(Slide);
