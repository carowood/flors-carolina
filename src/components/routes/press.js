import React from "react";
import Translate from "../../translations/translate";

export default function press() {
  return (
    <div>
      <h1>
        <Translate string={"press.header"} />
      </h1>
      <p>
        <Translate string={"press.description"} />
      </p>
    </div>
  );
}
