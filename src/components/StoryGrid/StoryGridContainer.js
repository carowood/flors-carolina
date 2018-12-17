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
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_medium"} />
        </StoryItem>
        <StoryItem
          sid="story-item-2"
          image="/images/HP0019.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem
          sid="story-item-3"
          image="/images/HP0019.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem
          sid="story-item-4"
          image="/images/HP0019.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem
          sid="story-item-5"
          image="/images/HP0019.jpg"
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
      </div>
    );
  }
}
