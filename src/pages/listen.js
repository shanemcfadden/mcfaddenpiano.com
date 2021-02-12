import * as React from 'react';
import PageLayout from '../components/PageLayout';
import VideoCard from '../components/VideoCard';

const sampleData = {
  title: 'Khachaturian Trio for Violin, Clarinet, and Piano',
  watchLink: 'https://www.youtube.com/watch?v=8jr2z99YjmI',
  performers: ['Mickayla Chapman, clarinet', 'Chase Ward, violin'],
  venue: 'Curtiss Hall, Chicago, IL',
};

const ListenPage = () => {
  const { title, watchLink, performers, venue } = sampleData;
  return (
    <PageLayout>
      <VideoCard
        title={title}
        watchLink={watchLink}
        performers={performers}
        venue={venue}
      />
    </PageLayout>
  );
};

export default ListenPage;
