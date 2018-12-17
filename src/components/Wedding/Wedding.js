import React from "react";
import Translate from "../../translations/Translate";

export default function Wedding() {
  return (
    <div>
      <div className="wedding_title">
        <Translate string={"services.wheader1"} />
      </div>
        <div className="wedding_description">
          <ul>
            <li><Translate string={"services.wdescription1"}/></li>
            <li><Translate string={"services.wdescription2"}/></li>
            <li><Translate string={"services.wdescription3"}/></li>
          </ul>
        </div>
        <div className="wedding_options">
          <ul>
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
