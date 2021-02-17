import { Link } from 'gatsby';
import * as React from 'react';

const isActiveWithHash = ({ location, href }) => {
  console.log('location', location);
  console.log('href', href);
  return location.pathname === href.split('#')[0]
    ? { className: 'active' }
    : {};
};

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link getProps={isActiveWithHash} to="/#content">
        <h3>Bio</h3>
      </Link>
      <Link activeClassName="active" to="/listen">
        <h3>Listen</h3>
      </Link>
      <Link activeClassName="active" to="/contact">
        <h3>Contact</h3>
      </Link>
    </div>
  );
};

export default NavBar;
