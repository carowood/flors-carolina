import React from "react";
import Translate from "../../translations/Translate";
import Imagesfour from "../../assets/images/services/Wfour.png";
import Imagesfive from "../../assets/images/services/Wfive.png";
import Imageseight from "../../assets/images/services/Weight.png";

export default function Bouquets() {
  return (
    <>
      <div className="container_bouquets">

          <div className="container_title">
            <h1>
            <Translate string={"services.bheader"} />
            </h1>
          </div>

          <div className="container_description1">
            <p>
            <Translate string={"services.bdescription"}/>
            </p>
            <ul>
              <li><Translate string={"services.boption1"} /></li>
              <li><Translate string={"services.boption2"} /></li>
              <li><Translate string={"services.boption3"} /></li>
              <li><Translate string={"services.boption4"} /></li>
              <li><Translate string={"services.boption5"} /></li>
            </ul>
          </div>

          <div className="container_imgfour">
             <img src={Imagesfour}  alt="Imagesix"/>
          </div>

          <div className="container_imgfive">
            <img src={Imagesfive}  alt=""/>
          </div>

          <div className="container_imgeight">
            <img src={Imageseight}  alt=""/>
          </div>
      </div>
    </>

  );
}
