import React from "react";
import Translate from "../../translations/translate";

export default function gallery() {
  return (
    <div>
      <h1>
        <Translate string={"gallery.header"} />
      </h1>
      <p>
        <Translate string={"gallery.description"} />
      </p>
    </div>
  );
}
