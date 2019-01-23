import React from "react";
import StoryItem from "./StoryItem";
import StoryItemImage from "../../assets/images/ourstory/ourstory-main.png";

export default class StoryContainer extends React.Component {
  render() {
    return (
      <div>
        <StoryItem image={StoryItemImage} />
      </div>
    );
  }
}
