import React from "react";
import Translate from "../../translations/Translate";

export default function BtnCompany() {
  return (
    <div>
        <div className="btn">
          <ul>
            <li><Translate string={"services.cbtn"}/></li>
            <li><button><Translate string={"services.cbtncontact"}/></button></li>
          </ul>
        </div>
    </div>

  );
}
