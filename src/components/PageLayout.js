import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import NavBar from './NavBar';

const PageLayout = ({children}) => {
    return (
        <div className="content-container">
            <NavBar /> 
            {children}
        </div>
    );
};

PageLayout.propTypes = {
    children: PropTypes.oneOfType([arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
export default PageLayout;
