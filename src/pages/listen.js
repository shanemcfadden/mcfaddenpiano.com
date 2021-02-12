import * as React from 'react';
import PageLayout from '../components/PageLayout';

const ListenPage = () => {
  return (
    <PageLayout>
      <div> Listen Page </div>
      <div className="youtube-video__container">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/8jr2z99YjmI"
          frameBorder="0"
        ></iframe>
      </div>
    </PageLayout>
  );
};

export default ListenPage;
