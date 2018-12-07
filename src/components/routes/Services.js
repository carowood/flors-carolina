import React from "react";
import Translate from "../../translations/Translate";

export default function Services() {
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
