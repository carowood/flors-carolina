import React from "react";
import Translate from "../../translations/Translate";
import StoryItem from "./StoryItem";
import Image1 from "../../assets/images/ourstory/ourstory-1.png";
import Image2 from "../../assets/images/ourstory/ourstory-2.png";
import Image3 from "../../assets/images/ourstory/ourstory-3.png";
import Image4 from "../../assets/images/ourstory/ourstory-4.png";
import Image5 from "../../assets/images/ourstory/ourstory-5.png";
import Image6 from "../../assets/images/ourstory/ourstory-main.png";

export default class StoryGridContainer extends React.Component {
  state = {
    selected: "story-item-1"
  };

  storyItemClickHandler = event => {
    let gridItemID = event.currentTarget.id;
    this.setState({ selected: gridItemID });
  };

  render() {
    return (
      <div className="story-grid__container">
        <StoryItem
          sid="story-item-1"
          image={Image1}
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"ourstory.title2"} />
          <Translate string={"ourstory.bodytext2"} />
        </StoryItem>
        <StoryItem
          sid="story-item-2"
          image={Image2}
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem
          sid="story-item-3"
          image={Image3}
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem
          sid="story-item-4"
          image={Image4}
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem
          sid="story-item-5"
          image={Image5}
          selected={this.state.selected}
          onClick={this.storyItemClickHandler}
        >
          <Translate string={"test.year"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem
          sid="story-item-6"
          image={Image6}
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
