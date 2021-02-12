import * as React from 'react';
import PageLayout from '../components/PageLayout';

const ListenPage = () => {
  return (
    <PageLayout>
      <h2>Khachaturian Trio for Violin, Clarinet, and Piano</h2>
      <div className="youtube-video__container">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/8jr2z99YjmI"
          frameBorder="0"
        ></iframe>
      </div>
      <p>
        Mickayla Chapman, clarinet
        <br />
        Chase Ward, violin
        <br />
        Curtiss Hall, Chicago, IL
      </p>
    </PageLayout>
  );
};

export default ListenPage;
