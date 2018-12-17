import React from "react";
import Translate from "../../../translations/Translate";
import Wedding from "../../Wedding/Wedding.js";
import Bouquets from "../../Bouquets/Bouquets.js";

export default function Services() {
  return (
    <div>
      <div className="wedding">
        <Wedding/>
      </div>
      <div className="bouquets">
        <Bouquets/>
      </div>
    </div>
  );
}
