import React from "react";

export default class PressGridItem extends React.Component {
  render() {
    let url = this.props.url;
    let item = this.props.children;

    return (
      <div className="press-grid-item">
        <h1 className="press-grid-item__title">{item[0]}</h1>
        <p className="press-grid-item__bodytext">{item[1]}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="press-grid-item__url"
        >
          {item[2]}
        </a>
      </div>
    );
  }
}
