import React from "react";
import Translate from "../../translations/Translate";

export default class StoryItem extends React.Component {
  render() {
    let image = this.props.image;
    console.log(this.props.image);
    return (
      <div className="story-item-main__container">
        <div className="story-item-main__image-container">
          <img className="story-item-main__image" src={image} alt="story" />
        </div>
        <div className="story-item-main__textcontent">
          <p className="story-item-main__title">
            <Translate string={"test.year"} />
          </p>

          <p className="story-item-main__bodytext">
            <Translate string={"test.lorem_long"} />
          </p>
        </div>
      </div>
    );
  }
}