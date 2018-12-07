import React from "react";
import Translate from "../../translations/translate";

export default function home() {
  return (
    <div>
      <h1>
        <Translate string={"home.header"} />
      </h1>
      <p>
        <Translate string={"home.description"} />
      </p>
    </div>
  );
}
