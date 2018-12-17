import React from "react";
import Translate from "../../../translations/Translate";
import StoryItem from "../../StoryGrid/StoryItem";

import StoryGridContainer from "../../StoryGrid/StoryGridContainer";

export default function OurStory(props) {
  return (
    <React.Fragment>
      {/* <h1>
        <Translate string={"ourstory.header"} />
      </h1>
      <p>
        <Translate string={"ourstory.description"} />
      </p> */}

      <StoryGridContainer />
    </React.Fragment>
  );
}
