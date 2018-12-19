import React from "react";
import Translate from "../../../translations/Translate";
import StoryGridContainer from "../../StoryGrid/StoryGridContainer";
import StoryContainer from "../../StoryContainer/StoryContainer";
import Heading from "../../Headings/H1/H1";

export default function OurStory(props) {
  return (
    <React.Fragment>
      {/* <h1>
        <Translate string={"ourstory.header"} />
      </h1>
      <p>
        <Translate string={"ourstory.description"} />
      </p> */}
 {/*    <Heading>
        <Translate string={"test.lorem_short"} />
      </Heading> */}
      <StoryGridContainer />
      <StoryContainer />
    </React.Fragment>
  );
}
