import React from "react";
import StoryGridContainer from "../../StoryGrid/StoryGridContainer";
import StoryContainer from "../../StoryContainer/StoryContainer";

export default class OurStory extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="page-container">
        <StoryGridContainer />
        <StoryContainer />
      </div>
    );
  }
}
