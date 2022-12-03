import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/PageLayout';

const ContactPage = ({ data, location }) => {
  const image = getImage(data.file);
  return (
    <PageLayout location={location}>
      <Helmet>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Helmet>
      <div className="collapsing-columns">
        <div>
          <GatsbyImage
            image={image}
            alt="Shane McFadden at the piano onstage"
          />
        </div>
        <form
          name="contact"
          method="POST"
          action="/success"
          data-netlify-recaptcha="true"
          // eslint-disable-next-line react/no-unknown-property
          netlify-honeypot="false-field"
          data-netlify="true"
          aria-label="Contact form"
        >
          <input type="hidden" name="form-name" value="contact" />
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
              <textarea
                name="message"
                id="message"
                maxLength="500"
                required
              ></textarea>
            </label>
          </div>
          <div
            className="g-recaptcha float-left"
            data-sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
            data-theme="dark"
          ></div>
          <button
            className="float-right"
            type="submit"
            aria-label="submit form"
          >
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
        gatsbyImageData: PropTypes.shape({}),
      }),
    }),
  }),
  location: PropTypes.object,
};

export default ContactPage;

export const query = graphql`
  {
    file(relativePath: { eq: "AOF6.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
