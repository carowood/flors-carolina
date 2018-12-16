import React from "react";
import Translate from "../../../translations/Translate";

export default function Services() {
  return (
    <div>
      <h1>
        <Translate string={"services.wheader1"} />
      </h1>
      <div className="service-list">
        <ul>
          <li><Translate string={"services.wdescription"}/></li>
          <li><Translate string={"services.woption1"} /></li>
          <li><Translate string={"services.woption2"} /></li>
          <li><Translate string={"services.woption3"} /></li>
          <li><Translate string={"services.woption4"} /></li>
          <li><Translate string={"services.woption5"} /></li>
        </ul>
      </div>
    </div>
  );
}
