import React from "react";
import Translate from "../../translations/Translate";

export default function BtnCompany() {
  return (
    <div>
     <div className="btn_company">
          <ul>
            <li><Translate string={"services.cbtn"}/></li>
            <li><a href="/Contact"><button><Translate string={"services.cbtncontact"}/></button></a></li>
          </ul>
        </div>
    </div>

  );
}
