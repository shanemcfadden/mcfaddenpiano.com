import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as React from 'react';
import PageLayout from '../components/PageLayout';
import VideoCard from '../components/VideoCard';

const ListenPage = ({ data }) => {
  return (
    <PageLayout>
      {data.allVideoCardJson.edges.map(({ node }, i) => {
        const { title, watchLink, performers, venue } = node;
        return (
          <div key={watchLink}>
            <VideoCard
              title={title}
              watchLink={watchLink}
              performers={performers}
              venue={venue}
            />
            {i !== data.allVideoCardJson.edges.length - 1 && <hr />}
          </div>
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
