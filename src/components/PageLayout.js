import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import 'normalize.css';
import '../styles/styles.scss';
import Slider from './Slider/Slider';

const PageLayout = ({ slider, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            relativePath: { glob: "slider/*" }
          }
        ) {
          edges {
            node {
              publicURL
              childrenImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );
  const startingImgData =
    data.allFile.edges[0].node.childrenImageSharp[0].fluid;
  const allImages = data.allFile.edges.map(({ node }) => node.publicURL);

  return (
    <>
      {slider && (
        <Slider
          slides={allImages}
          startingImgData={startingImgData}
          autoPlay={4}
        />
      )}
      <div className="content-container">
        <h1>Shane McFadden</h1>
        <h2>Collaborative Pianist</h2>
        <NavBar />
        <div>{children}</div>
      </div>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  slider: PropTypes.bool,
};

PageLayout.defaultProps = {
  slider: false,
};

export default PageLayout;
