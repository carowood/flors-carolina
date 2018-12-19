import React from "react";
import Translate from "../../../translations/Translate";

export default function Gallery() {
  return (
    <div className="page-container">
      <h1>
        <Translate string={"gallery.header"} />
      </h1>
      <p>
        <Translate string={"gallery.description"} />
      </p>
    </div>
  );
}
