import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import NavBar from './NavBar';
import 'normalize.css';
import '../styles/styles.scss';

const PageLayout = ({ children }) => {
  return (
    <div className="content-container">
      <h1>Shane McFadden</h1>
      <h2>Collaborative Pianist</h2>
      <NavBar />
      {children}
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};
export default PageLayout;
