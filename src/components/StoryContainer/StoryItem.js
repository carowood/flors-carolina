import React from "react";
import Translate from "../../translations/Translate";

export default class StoryItem extends React.Component {
  render() {
    let image = this.props.image;

    return (
      <div className="largestoryitemcontainer">
        <div className="largestoryitemcontainer__imagecontainer">
          <img
            className="largestoryitemcontainer__imagecontainer__image"
            src={image}
            alt="story"
          />
        </div>
        <div className="largestoryitemcontainer__textcontent">
          <p className="largestoryitemcontainer__textcontent__title">
            <Translate string={"ourstory.title1"} />
          </p>
          <p className="largestoryitemcontainer__textcontent__bodytext">
            <Translate string={"ourstory.bodytext1-paragraph1"} />
          </p>
        </div>
      </div>
    );
  }
}
