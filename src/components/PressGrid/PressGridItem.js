import React from "react";

export default class PressGridItem extends React.Component {
  render() {
    let url = this.props.url;
    let item = this.props.children;
    let title = item[0];
    let bodyText = item[1];
    let linkText = item[2];

    return (
      <div className="press-grid-item">
        <h1 className="press-grid-item__title">{title}</h1>
        <p className="press-grid-item__bodytext">{bodyText}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="press-grid-item__url"
        >
          {linkText}
        </a>
      </div>
    );
  }
}
