import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import PageLayout from '../components/PageLayout';

const SuccessPage = ({ location }) => {
  return (
    <PageLayout location={location}>
      <div className="center-text">
        <h1>Success!</h1>
        <p>Your form has been submitted. </p>
        <Link to="/">Return to the homepage.</Link>
      </div>
    </PageLayout>
  );
};

SuccessPage.propTypes = {
  location: PropTypes.object,
};

export default SuccessPage;
