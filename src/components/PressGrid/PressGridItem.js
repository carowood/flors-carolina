import React from "react";

export default class PressGridItem extends React.Component {
  render() {
    return (
      <div className="press-grid-item">
        <h1>{this.props.title}</h1>
        <p>{this.props.bodytext}</p>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          {this.props.readMoreLink}
        </a>
      </div>
    );
  }
}
