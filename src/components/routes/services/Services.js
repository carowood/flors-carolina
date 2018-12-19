import React from "react";
//import Translate from "../../../translations/Translate";
import Wedding from "../../Wedding/Wedding.js";
import Bouquets from "../../Bouquets/Bouquets.js";
import Pillows from "../../Pillows/Pillows.js";
import BtnWedding from "../../Btn-wedding/BtnWedding.js";
import Company from "../../Company/Company.js";
import BtnCompany from "../../Btn-company/BtnCompany.js";

export default function Services() {
  return (
    <div className="services">
      <div className="wedding">
        <Wedding />
        <BtnWedding />
      </div>
      <div className="bouquets">
        <Bouquets />
      </div>
      <div className="pillows">
        <Pillows />
      </div>
      <div className="company">
        <Company />
      </div>
      <div className="contact-btn">
        <BtnCompany />
      </div>
    </div>
  );
}
