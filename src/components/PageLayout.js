import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import NavBar from './NavBar';
import 'normalize.css';
import '@fontsource/josefin-sans';
import '@fontsource/mukta';
import '@fontsource/mukta/200.css';
import '@fontsource/mukta/800.css';
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
          sort: {
            order: ASC
            fields: childrenImageSharp___fixed___originalName
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
      <Helmet defaultTitle="Shane McFadden - Collaborative Pianist">
        <html lang="en" />
      </Helmet>
      {slider && (
        <Slider
          slides={allImages}
          startingImgData={startingImgData}
          autoPlay={4}
          isFullScreen={true}
        />
      )}
      <div className="content-container">
        <div id="content" className="site-header">
          <Link to="/">
            <h1 id="content">Shane McFadden</h1>
            <h2>Collaborative Pianist</h2>
          </Link>
        </div>
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
