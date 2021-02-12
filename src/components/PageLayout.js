import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import 'normalize.css';
import '../styles/styles.scss';
import Slider from './Slider/Slider';

const PageLayout = ({ children }) => {
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
            }
          }
        }
      }
    `
  );
  const imageUrls = data.allFile.edges.map(({ node }) => node.publicURL);

  return (
    <>
      <Slider slides={imageUrls} autoPlay={4} />
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
};

export default PageLayout;
