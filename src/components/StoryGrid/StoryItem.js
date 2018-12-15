import React from "react";
import Translate from "../../translations/Translate";

export default class StoryItem extends React.Component {
  render() {
    let image = this.props.image;
    return (
      <div className="story-item__container">
        <div className="story-item__image-container">
          <img className="story-item__image" src={image} alt="story" />
          <p className="story-item__title">{this.props.children[0]}</p>
        </div>

        <p className="story-item__bodytext">{this.props.children[1]}</p>
      </div>
    );
  }
}
