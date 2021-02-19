import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import Img from 'gatsby-image';
import PageLayout from '../components/PageLayout';

const ContactPage = ({ data, location }) => {
  return (
    <PageLayout location={location}>
      <div className="collapsing-columns">
        <div>
          <Img
            alt="Shane McFadden at the piano onstage"
            fluid={data.file.childImageSharp.fluid}
          />
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify-recaptcha="true"
          netlify-honeypot="false-field"
          data-netlify="true"
        >
          <div>
            <label htmlFor="name">
              <h4>Name:</h4>
              <input type="text" name="name" id="name" required />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <h4>Email:</h4>
              <input type="email" name="email" id="email" required />
            </label>
          </div>
          <div>
            <label htmlFor="subject">
              <h4>Subject:</h4>
              <input type="text" name="subject" id="subject" required />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              <h4>Message:</h4>
              <textarea name="message" id="message" maxLength="500"></textarea>
            </label>
          </div>
          <button className="float-right" type="submit">
            Send
          </button>
          <p className="hidden">
            <input name="false-field" id="false-field" />
          </p>
        </form>
      </div>
    </PageLayout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
    }),
  }),
  location: PropTypes.object,
};

export default ContactPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "AOF6.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { slug: { eq: "/bio" } }) {
      html
    }
  }
`;
