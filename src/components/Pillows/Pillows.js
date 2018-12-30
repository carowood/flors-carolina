import React from "react";
import Translate from "../../translations/Translate";
import Imagesix from "../../assets/images/services/Wsix.png";
import Imageseven from "../../assets/images/services/Wseven.png";


export default function Pillows() {
  return (
    <div>
      <div className="pillows_title">
        <Translate string={"services.pheader"} />
      </div>
      <div className="pillows_description">
        <Translate string={"services.pdescription"}/>
      </div>
      <div className="pillows_grid-mobile">
        <ul>
             <li>
                   <div className="pillows_image6">
                     <img src={Imagesix}  alt="Imagesix" />
                   </div>
             </li>
             <li>
                  <div className="pillows_image7">
                     <img src={Imageseven}  alt="Imageseven" />
                  </div>
              </li>
        </ul>
      </div>
    </div>

  );
}
