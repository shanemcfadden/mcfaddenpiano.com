import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';

const Slider = ({ slides }) => {
  const [browserWidth, setBrowserWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [transition, setTransition] = useState(0.45);

  useEffect(() => {
    setBrowserWidth(window.innerWidth);
    window.onresize = () => {
      setBrowserWidth(window.innerWidth);
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <div className="slider">
      <SliderContent
        translate={translate}
        transition={transition}
        width={browserWidth * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string),
};

export default Slider;
