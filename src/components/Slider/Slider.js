import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide';
import SliderNav from './SliderNav';
import { isInRange, relativeIndexDifference } from '../../util/arrays';
import { useStaticQuery, graphql } from 'gatsby';

const Slider = ({ autoPlay = 0, isFullScreen = false }) => {
  const data = useStaticQuery(query);
  const slides = data.allFile.edges.map(({ node }) => {
    return node.childImageSharp.fluid;
  });
  const autoPlayRef = useRef();
  const sliderRef = useRef();
  const autoPlayInterval = useRef();

  const [width, setWidth] = useState(3000);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [prevActiveSlideIndex, setPrevActiveSlideIndex] = useState(0);
  const loadedSlidesRef = useRef(0);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    setWidth(document.querySelector('.slider').clientWidth);
    window.onresize = () => {
      setWidth(document.querySelector('.slider').clientWidth);
    };

    return () => {
      clearInterval(autoPlayInterval.current);
      window.onresize = null;
    };
  }, []);

  const incrementLoadedSlides = () => {
    loadedSlidesRef.current = loadedSlidesRef.current + 1;
    if (loadedSlidesRef.current === slides.length) {
      startAutoPlay();
    }
  };

  const goToSlide = (i) => {
    setPrevActiveSlideIndex(activeSlideIndex);
    setActiveSlideIndex(i);
  };

  const nextSlide = () => {
    const nextSlideIndex = (activeSlideIndex + 1) % slides.length;
    goToSlide(nextSlideIndex);
  };

  const prevSlide = () => {
    const prevSlideIndex =
      activeSlideIndex > 0 ? activeSlideIndex - 1 : slides.length - 1;
    goToSlide(prevSlideIndex);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval.current);
  };

  const startAutoPlay = () => {
    const play = () => {
      autoPlayRef.current();
    };

    autoPlayInterval.current =
      autoPlay === 0 ? null : setInterval(play, autoPlay * 1000);
  };

  const hasHighZIndex = (i) => {
    const stepsToLeft = relativeIndexDifference(
      prevActiveSlideIndex,
      activeSlideIndex,
      slides.length
    );
    const stepsToRight = relativeIndexDifference(
      activeSlideIndex,
      prevActiveSlideIndex,
      slides.length
    );

    return stepsToLeft < stepsToRight
      ? isInRange(i, activeSlideIndex, prevActiveSlideIndex)
      : isInRange(i, prevActiveSlideIndex, activeSlideIndex);
  };

  const getLeftPosition = (i) => {
    let leftPositionFactor = i - activeSlideIndex;

    // activeSlide is in 0th position. Slides to left have a negative position. Those to right have a positive one
    const leftMostSlidePosition = -1 * Math.floor((slides.length - 1) / 2);
    const rightMostSlidePostion = Math.floor(slides.length / 2);

    // adjust leftPositionFactor to be within the available positions
    if (leftPositionFactor < leftMostSlidePosition) {
      leftPositionFactor += slides.length;
    } else if (leftPositionFactor > rightMostSlidePostion) {
      leftPositionFactor -= slides.length;
    }

    return leftPositionFactor * width;
  };

  return (
    <div
      className={`slider ${isFullScreen ? 'slider--fullscreen' : ''}`}
      style={{
        height: isFullScreen ? null : 0.56 * width,
      }}
      ref={sliderRef}
    >
      <div className="slider__overlay-container">
        <div
          className={`slider__overlay ${
            isFullScreen ? 'slider__overlay--fullscreen' : ''
          }`}
          itemScope
          itemType="https://schema.org/Person"
        >
          <h1 itemProp="name">Shane McFadden</h1>
          <h2 itemProp="jobTitle">Collaborative Pianist</h2>
        </div>
      </div>

      {slides.map((slide, i) => (
        <Slide
          key={'image-' + i}
          zIndex={hasHighZIndex(i) ? 1 : 0}
          leftPosition={getLeftPosition(i)}
          imageFluidData={slide}
          ariaHidden={activeSlideIndex !== i}
          onLoad={incrementLoadedSlides}
        />
      ))}

      <SliderNav
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        stopAutoPlay={stopAutoPlay}
        slides={slides}
        activeSlideIndex={activeSlideIndex}
        goToSlide={goToSlide}
      />
    </div>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.number.isRequired,
  isFullScreen: PropTypes.bool,
};

export default Slider;

const query = graphql`
  {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativePath: { glob: "slider/*" }
      }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
