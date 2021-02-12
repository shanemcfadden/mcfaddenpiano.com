import React from 'react';
import PropTypes from 'prop-types';

const VideoCard = ({ title, watchLink, performers, venue }) => {
  const videoId = watchLink.split('?v=')[1];
  return (
    <div>
      <h2>{title}</h2>
      <div className="youtube-video__container">
        <iframe
          className="youtube-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
        ></iframe>
      </div>
      <p>
        {performers.map((p, i) => {
          return <div key={p}>{p}</div>;
        })}
        {venue && <div>{venue}</div>}
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
