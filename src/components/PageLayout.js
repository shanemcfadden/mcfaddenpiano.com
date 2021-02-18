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
        <meta
          type="description"
          content="A classical pianist, accompanist, and vocal coach based in Chicago."
        />

        {/* real favicon generator info */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* end real favicon generator info */}
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
        <main>{children}</main>
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
