import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import 'normalize.css';
import '../styles/styles.scss';
import Slider from './Slider/Slider';

// TODO: CHANGE IMG to fluid instead of flexible
// TODO: Make a margin that covers the left and right edges (51vw)
// TODO: Make a height of 100vw * 9/16 for mobile devices

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
  const fluidImages = data.allFile.edges.map(
    ({ node }) => node.childrenImageSharp[0].fluid
  );
  console.log(data);

  return (
    <>
      {slider && <Slider slides={fluidImages} autoPlay={4} />}
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
