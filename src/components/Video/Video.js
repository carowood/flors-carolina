import React from "react";
import ReactPlayer from "react-player";

export default class Video extends React.Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/embed/qqQTuMeHDFw"
          youtubeConfig={{ playerVars: { showinfo: 0 } }}
          playing
          controls
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
