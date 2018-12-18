import React from "react";

export default class StoryItem extends React.Component {
  render() {
    let selected = "";
    let image = this.props.image;
    if (this.props.selected === this.props.sid) {
      selected = " selected";
    }
    return (
      <div
        id={this.props.sid}
        className={"story-item__container" + selected}
        onClick={this.props.onClick}
      >
        <div className="story-item__content">
          <div className="story-item__image-container">
            <img className="story-item__image" src={image} alt="story" />
            <p className="story-item__title">
              <a href="/">{this.props.children[0]}</a>
            </p>
          </div>
        </div>

        <p className="story-item__bodytext">{this.props.children[1]}</p>
      </div>
    );
  }
}
