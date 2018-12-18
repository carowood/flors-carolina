import React from "react";
import Translate from "../../translations/Translate";

export default function BtnCompany() {
  return (
    <div>
        <div className="btn">
          <ul>
            <li><Translate string={"services.cbtn1"}/></li>
            <li><Translate string={"services.cbtn2"}/></li>
            <li><button><Translate string={"services.cbtn3"}/></button></li>
          </ul>
        </div>
    </div>

  );
}
