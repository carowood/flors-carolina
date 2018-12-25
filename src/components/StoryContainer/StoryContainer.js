import React from "react";
import StoryItem from "./StoryItem";

export default class StoryContainer extends React.Component {
  render() {
    return (
      <div>
        <StoryItem image="/images/shopfront.jpg" />
      </div>
    );
  }
}
