import React from "react";
import Translate from "../../translations/Translate";

export default function OurStory() {
  return (
    <div>
      <h1>
        <Translate string={"ourstory.header"} />
      </h1>
      <p>
        <Translate string={"ourstory.description"} />
      </p>
    </div>
  );
}
