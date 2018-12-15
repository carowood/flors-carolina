import React from "react";
import Translate from "../../translations/Translate";
import StoryItem from "../../components/StoryGrid/StoryItem";
import StoryGridContainer from "../../components/StoryGrid/StoryGridContainer";

export default function OurStory(props) {
  return (
    <React.Fragment>
      {/* <h1>
        <Translate string={"ourstory.header"} />
      </h1>
      <p>
        <Translate string={"ourstory.description"} />
      </p> */}

      <StoryGridContainer>
        <StoryItem image="/images/background.jpg">
          <Translate string={"test.lorem_short"} />
          <Translate string={"test.lorem_medium"} />
        </StoryItem>
        <StoryItem image="/images/background.jpg">
          <Translate string={"test.lorem_short"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem image="/images/background.jpg">
          <Translate string={"test.lorem_short"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem image="/images/background.jpg">
          <Translate string={"test.lorem_short"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem image="/images/background.jpg">
          <Translate string={"test.lorem_short"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem image="/images/background.jpg">
          <Translate string={"test.lorem_short"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
        <StoryItem image="/images/background.jpg">
          <Translate string={"test.lorem_short"} />
          <Translate string={"test.lorem_long"} />
        </StoryItem>
      </StoryGridContainer>
    </React.Fragment>
  );
}
