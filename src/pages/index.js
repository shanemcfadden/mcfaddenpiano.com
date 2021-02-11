import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import Img from 'gatsby-image';
import PageLayout from '../components/PageLayout';

const IndexPage = ({ data }) => {
  return (
    <PageLayout>
      <div> Home Page </div>
      <div className="float--right-half">
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      {/* 
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
*/}
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
      html: PropTypes.shape({}),
    }),
  }),
};

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "HSPTL.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
//     # query {
//     allMarkdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//       }
//     }
//     # file(relativePath: { eq: "HSPTL.png" }) {
//     #  childImageSharp {
//     # Specify the image processing specifications right in the query.
//     # Makes it trivial to update as your page's design changes.
//     #   fluid(maxWidth: 600) {
//     # ...GatsbyImageSharpFluid
//     #  }
//     # }
//     # }
//   }
// `;
//   query {
//     file(relativePath: { eq: "HSPTL.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
