import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import PageLayout from '../components/PageLayout';
import VideoCard from '../components/VideoCard';

const ListenPage = ({ data }) => {
  return (
    <PageLayout>
      {data.allVideoCardJson.edges.map(({ node }) => {
        const { title, watchLink, performers, venue } = node;
        return (
          <VideoCard
            title={title}
            watchLink={watchLink}
            performers={performers}
            venue={venue}
            key={watchLink}
          />
        );
      })}
    </PageLayout>
  );
};

ListenPage.propTypes = {
  data: PropTypes.shape({
    allVideoCardJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            title: PropTypes.string.isRequired,
            watchLink: PropTypes.string.isRequired,
            performers: PropTypes.arrayOf(PropTypes.string).isRequired,
            venue: PropTypes.string,
          }),
        })
      ),
    }),
  }),
};

export default ListenPage;

export const query = graphql`
  query MyQuery {
    allVideoCardJson {
      edges {
        node {
          performers
          title
          venue
          watchLink
        }
      }
    }
  }
`;
