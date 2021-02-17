import React from 'react';
import PropTypes from 'prop-types';

const VideoCard = ({ title, watchLink, performers, venue }) => {
  const videoId = watchLink.split('?v=')[1];
  return (
    <div className="content-card">
      <h2>{title}</h2>
      <div className="youtube-video__container">
        <iframe
          className="youtube-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        {performers.map((p) => {
          return (
            <div key={p}>
              <strong>{p}</strong>
            </div>
          );
        })}
        {venue && <div className="font-weight--light">{venue}</div>}
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
