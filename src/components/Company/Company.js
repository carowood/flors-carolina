import React from "react";
import Translate from "../../translations/Translate";
import BtnCompany from "../Btn-company/BtnCompany";

export default function Company() {
  return (
    <div className="company_container">
      <div className="company_title">
       <Translate string={"services.cheader"} /> 
      </div>
      <div className="company_description">
        <p> <Translate string={"services.cdescription"}/> </p>
      </div>
      <div className="company_button">
        <BtnCompany/>
      </div>
    </div>

  );
}
