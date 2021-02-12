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
          <p className="hidden">
            <input name="false-field" />
          </p>
          <p>
            <label>
              Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Subject: <input type="text" name="subject" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
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
