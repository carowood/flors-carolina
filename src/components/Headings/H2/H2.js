import React from "react";

export default class H2 extends React.Component {
  render() {
    return (
      <div>
        <h2 className="heading-h2">{this.props.children}</h2>
      </div>
    );
  }
}
