import React from "react";
import Translate from "../../../translations/Translate";
import Wedding from "../../Wedding/Wedding";
import Bouquets from "../../Bouquets/Bouquets";
import Pillows from "../../Pillows/Pillows";
import BtnWedding from "../../Btn-wedding/BtnWedding";
import Company from "../../Company/Company";
import BtnCompany from "../../Btn-company/BtnCompany";

export default function Services() {
  return (
    <div>
      <div className="wedding">
        <Wedding/>
        <BtnWedding/>
      </div>
      <div className="bouquets">
        <Bouquets/>
      </div>
      <div className="pillows">
        <Pillows/>
      </div>
      <div className="company">
        <Company/>
      </div>
      <div className="contact-btn">
        <BtnCompany/>
      </div>
    </div>
  );
}
