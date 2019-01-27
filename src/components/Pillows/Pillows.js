import React from "react";
import Translate from "../../translations/Translate";
import Imagesix from "../../assets/images/services/Wsix.png";
import Imageseven from "../../assets/images/services/Wseven.png";

export default function Pillows() {
  return (
    <>
      <div className="cp_pillows">
        <div className="cp_title">
          <h2>
            <Translate string={"services.pheader"} />
          </h2>
        </div>
        <div className="cp_description">
          <p>
            <Translate string={"services.pdescription"} />
          </p>
        </div>
        <div className="cp_image6">
          <img src={Imagesix} alt="Bright floral wreath" />
        </div>
        <div className="cp_image7">
          <img src={Imageseven} alt="Seasonal wreath" />
        </div>
      </div>
    </>
  );
}
