import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const VideoCard = ({ title, watchLink, performers, venue }) => {
  const videoId = watchLink.split('?v=')[1];
  return (
    <div className="content-card">
      <h2>{title}</h2>
      <div className="youtube-video__container">
        <iframe
          className="youtube-video"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        {performers.map((p, i) => {
          return (
            <Fragment key={p}>
              {i > 0 && <br />}
              <strong>{p}</strong>
            </Fragment>
          );
        })}
        {venue && (
          <Fragment>
            <br />
            {venue}
          </Fragment>
        )}
      </p>
    </div>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  watchLink: PropTypes.string.isRequired,
  performers: PropTypes.arrayOf(PropTypes.string).isRequired,
  venue: PropTypes.string,
};

export default VideoCard;
