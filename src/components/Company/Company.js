import React from "react";
import Translate from "../../translations/Translate";

export default function Company() {
  return (
    <div>
      <div className="company_title">
        <Translate string={"services.cheader"} />
      </div>
        <div className="company_description">
          <Translate string={"services.cdescription"}/>
        </div>
    </div>

  );
}
