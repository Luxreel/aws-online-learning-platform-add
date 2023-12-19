import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ title, embedId }) => (
  <div className="video-responsive">
    <iframe
      width='560'
      height='315'
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;