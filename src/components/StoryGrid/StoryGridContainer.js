import React from "react";
import Translate from "../../translations/Translate";
import StoryItem from "./StoryItem";

export default class StoryGridContainer extends React.Component {
  state = {
    selected: "story-item-1"
  };

  storyItemClickHandler = event => {
    console.log(event.currentTarget);
    let gridItemID = event.currentTarget.id;
    this.setState({ selected: gridItemID });
  };

  render() {
    return (
      <div className="story-grid__container">
        <StoryItem
          sid="story-item-1"
          image="/images/HP0019.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"ourstory.title2"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem
          sid="story-item-2"
          image="/images/HP0006.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"ourstory.title3"} />
          <Translate string={"ourstory.bodytext3"} />
        </StoryItem>
        <StoryItem
          sid="story-item-3"
          image="/images/HP0007.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"ourstory.title4"} />
          <Translate string={"ourstory.bodytext4"} />
        </StoryItem>
        <StoryItem
          sid="story-item-4"
          image="/images/HP0013.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"ourstory.title5"} />
          <Translate string={"ourstory.bodytext5"} />
        </StoryItem>
        <StoryItem
          sid="story-item-5"
          image="/images/HP0018.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"ourstory.title6"} />
          <Translate string={"ourstory.bodytext6"} />
        </StoryItem>
        <StoryItem
          sid="story-item-6"
          image="/images/shopfront.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"ourstory.title1"} />
          <Translate string={"ourstory.bodytext1-paragraph1"} />
        </StoryItem>
      </div>
    );
  }
}
