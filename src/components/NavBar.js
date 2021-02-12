import { Link } from 'gatsby';
import * as React from 'react';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link activeClassName="active" to="/#bio">
        Bio
      </Link>
      <Link activeClassName="active" to="/listen">
        Listen
      </Link>
      <Link activeClassName="active" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
