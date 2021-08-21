import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import 'normalize.css';
import '../styles/styles.scss';
import Slider from './Slider/Slider';
import SEO from './SEO';

const PageLayout = ({ slider, children }) => {
  return (
    <>
      <SEO />
      {slider && <Slider autoPlay={4} isFullScreen={true} />}
      <div className="content-container">
        <div
          id="content"
          className="site-header"
          itemType="https://schema.org/Person"
          itemScope
        >
          <Link to="/" itemProp="url">
            <h1 id="content" itemProp="name">
              Shane McFadden
            </h1>
            <h2 itemProp="jobTitle">Collaborative Pianist</h2>
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
