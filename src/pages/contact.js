import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import Img from 'gatsby-image';
import PageLayout from '../components/PageLayout';

const ContactPage = ({ data }) => {
  return (
    <PageLayout>
      <div className="collapsing-columns">
        <div className="">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify-recaptcha="true"
          netlify-honeypot="false-field"
          data-netlify="true"
        >
          <p>
            <label htmlFor="name">
              <h4>Name:</h4>
              <input type="text" name="name" id="name" required />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              <h4>Email:</h4>
              <input type="email" name="email" id="email" required />
            </label>
          </p>
          <p>
            <label htmlFor="subject">
              <h4>Subject:</h4>
              <input type="text" name="subject" id="subject" required />
            </label>
          </p>
          <p>
            <label htmlFor="message">
              <h4>Message:</h4>
            </label>
            <textarea name="message" id="message" maxLength="500"></textarea>
          </p>
          <p className="hidden">
            <input name="false-field" id="false-field" />
          </p>
          <button className="float-right" type="submit">
            Send
          </button>
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
