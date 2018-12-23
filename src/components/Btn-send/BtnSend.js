import React from "react";

export default class BtnSend extends React.Component {
  render() {
    return (
      <div>
        <button className="send-button">{this.props.children}</button>
      </div>
    );
  }
}
