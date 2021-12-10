import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout';

const IndexPage = ({ data, location }) => {
  const image = getImage(data.file);
  return (
    <PageLayout slider={true} location={location}>
      <div className="float--right-half float--no-margin-top">
        <GatsbyImage image={image} alt="Shane McFadden headshot" />
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
        gatsbyImageData: PropTypes.shape({}),
      }).isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }),
  location: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  {
    file(relativePath: { eq: "HSPTL.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    markdownRemark(frontmatter: { slug: { eq: "/bio" } }) {
      html
    }
  }
`;
