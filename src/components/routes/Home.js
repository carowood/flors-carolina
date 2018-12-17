import React from "react";
import Translate from "../../translations/Translate";

export default function Home() {
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
