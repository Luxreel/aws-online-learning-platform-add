import React from "react";
import PropTypes from "prop-types";

export default function VideoPlayer({ title, embedId }) {
  return (
    <div className="video-responsive">
      <h1>{title}</h1>
      <iframe
        width='672'
        height='378'
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  embedId: PropTypes.string.isRequired
};