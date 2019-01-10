import React from "react";

export default class BackgroundImageContainer extends React.Component {
  render() {
    return (
      <div id="backgroundchange">
        <div className="backgroundimg" id="back1" />
        <div className="backgroundimg" id="back2" />
        <div className="backgroundimg" id="back3" />
        <div className="backgroundimg" id="back4" />
        <div className="backgroundimg" id="back5" />
      </div>
    );
  }
}
