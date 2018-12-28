import React from "react";

export default class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <iframe
          title="Flor Carolina"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qqQTuMeHDFw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
