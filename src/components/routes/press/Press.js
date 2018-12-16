import React from "react";
import Translate from "../../../translations/Translate";

export default function Press() {
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
