import React from "react";

export default class Video extends React.Component {
  render() {
    return (
      <div className="player-wrapper">
        <iframe
          title="Flors Carolina"
          className="react-player"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/mNDA-o9yJNw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
