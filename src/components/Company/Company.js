import React from "react";
import Translate from "../../translations/Translate";

export default function Company() {
  return (
    <div>
      <div className="company_title">
        <Translate string={"services.cheader1"} />
      </div>
        <div className="company_description">
          <ul>
            <li><Translate string={"services.cdescription1"}/></li>
          </ul>
        </div>
    </div>

  );
}
