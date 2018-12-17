import React from "react";
import Translate from "../../translations/Translate";

export default function Bouquets() {
  return (
    <div>
      <div className="bouquets_title">
        <Translate string={"services.bheader1"} />
      </div>
        <div className="bouquets_description">
          <ul>
            <li><Translate string={"services.bdescription1"}/></li>
            <li><Translate string={"services.bdescription2"}/></li>
            <li><Translate string={"services.bdescription3"}/></li>
            <li><Translate string={"services.bdescription4"}/></li>
          </ul>
        </div>
        <div className="bouquets_options">
          <ul>
            <li><Translate string={"services.boption1"} /></li>
            <li><Translate string={"services.boption2"} /></li>
            <li><Translate string={"services.boption3"} /></li>
            <li><Translate string={"services.boption4"} /></li>
            <li><Translate string={"services.boption5"} /></li>
          </ul>
       </div>
    </div>

  );
}
