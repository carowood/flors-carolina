import React from "react";
import StoryGridContainer from "../../StoryGrid/StoryGridContainer";
import StoryContainer from "../../StoryContainer/StoryContainer";
import Translate from "../../../translations/Translate";
import Heading from "../../Headings/H1/H1";

export default class OurStory extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="ourstory-container">
        <Heading>
          <Translate string={"ourstory.header"} />
        </Heading>
        <StoryGridContainer />
        <StoryContainer />
      </div>
    );
  }
}
