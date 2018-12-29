import React from "react";

export default class PressGridItem extends React.Component {
  render() {
    console.log("presspage", this.props.url);
    return (
      <div className="press-grid-item">
        <h1 className="press-grid-item__title">{this.props.title}</h1>
        <p className="press-grid-item__bodytext">{this.props.bodytext}</p>
        <a
          href={this.props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="press-grid-item__url"
        >
          {this.props.readMoreLink}
        </a>
      </div>
    );
  }
}
