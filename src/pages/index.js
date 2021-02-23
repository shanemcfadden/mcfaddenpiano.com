import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import Img from 'gatsby-image';
import PageLayout from '../components/PageLayout';

const IndexPage = ({ data, location }) => {
  return (
    <PageLayout slider={true} location={location}>
      <div className="float--right-half float--no-margin-top">
        <Img
          alt="Shane McFadden headshot"
          fluid={data.file.childImageSharp.fluid}
        />
      </div>
      <div
        id="bio"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      ></div>
    </PageLayout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}),
      }),
    }),
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
  location: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "HSPTL.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(frontmatter: { slug: { eq: "/bio" } }) {
      html
    }
  }
`;
