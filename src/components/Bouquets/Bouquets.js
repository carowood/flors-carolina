import React from "react";
import Translate from "../../translations/Translate";
import Imagesfour from "../../assets/images/services/Wfour.jpg";
import Imagesfive from "../../assets/images/services/Wfive.jpg";
import Imageseight from "../../assets/images/services/Weight.jpg";

export default function Bouquets() {
  return (
    <>
      <div className="container_bouquets">
        <div className="container_title">
          <h2>
            <Translate string={"services.bheader"} />
          </h2>
        </div>

        <div className="container_description1">
          <p>
            <Translate string={"services.bdescription"} />
          </p>
        </div>
        <div className="container_description2">
          <ul>
            <li>
              <Translate string={"services.boption1"} />
            </li>
            <li>
              <Translate string={"services.boption2"} />
            </li>
            <li>
              <Translate string={"services.boption3"} />
            </li>
            <li>
              <Translate string={"services.boption4"} />
            </li>
            <li>
              <Translate string={"services.boption5"} />
            </li>
          </ul>
        </div>

        <div className="container_imgfour">
          <img src={Imagesfour} alt="Floral arrangement" />
        </div>

        <div className="container_imgfive">
          <img src={Imagesfive} alt="Birthday floral arrangement" />
        </div>

        <div className="container_imgeight">
          <img src={Imageseight} alt="Table centerpiece" />
        </div>
      </div>
    </>
  );
}
