import React from "react";
import StoryGridContainer from "../../StoryGrid/StoryGridContainer";
import StoryContainer from "../../StoryContainer/StoryContainer";

export default function OurStory(props) {
  return (
    <div className="page-container">
      <StoryGridContainer />
      <StoryContainer />
    </div>
  );
}
