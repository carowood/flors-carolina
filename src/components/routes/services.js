import React from "react";
import Translate from "../../translations/translate";

export default function services() {
  return (
    <div>
      <h1>
        <Translate string={"services.header"} />
      </h1>
      <p>
        <Translate string={"services.description"} />
      </p>
    </div>
  );
}
