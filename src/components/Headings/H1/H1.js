import React from "react";

export default class Heading extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">{this.props.children}</h1>
      </div>
    );
  }
}
