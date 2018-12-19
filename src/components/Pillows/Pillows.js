import React from "react";
import Translate from "../../translations/Translate";

export default function Pillows() {
  return (
    <div>
      <div className="pillows__title">
        <Translate string={"services.pheader1"} />
      </div>
        <div className="pillows__description">
          <ul>
            <li><Translate string={"services.pdescription1"}/></li>
            <li><Translate string={"services.pdescription2"}/></li>
            <li><Translate string={"services.pdescription3"}/></li>
            <li><Translate string={"services.pdescription4"}/></li>
          </ul>
        </div>
    </div>

  );
}
