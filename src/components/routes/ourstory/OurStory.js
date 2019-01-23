import React from "react";
import StoryGridContainer from "../../StoryGrid/StoryGridContainer";
import StoryContainer from "../../StoryContainer/StoryContainer";
import Translate from "../../../translations/Translate";
import PageTitle from "../../PageTitle/PageTitle";

export default class OurStory extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="ourstory-container">
        <PageTitle>
          <Translate string={"ourstory.header"} />
        </PageTitle>
        <StoryGridContainer />
        <StoryContainer />
      </div>
    );
  }
}
