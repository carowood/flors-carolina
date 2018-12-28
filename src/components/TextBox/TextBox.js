import React from "react";

export default class TextBox extends React.Component {
  render() {
    return (
      <div className="home-textbox">
        <p>{this.props.text}</p>
      </div>
    );
  }
}
