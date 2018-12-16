import React from "react";
import Translate from "../../translations/Translate";
import StoryItem from "./StoryItem";

export default class StoryGridContainer extends React.Component {
  render() {
    return <div className="story-grid__container">{this.props.children}</div>;
  }
}
