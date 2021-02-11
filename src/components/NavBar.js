import { Link } from 'gatsby';
import * as React from 'react';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link to="/">Bio</Link>
            <Link to="/listen">Listen</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default NavBar;