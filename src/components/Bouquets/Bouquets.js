import React from "react";
import Translate from "../../translations/Translate";
import Imagesfour from "../../assets/images/services/Wfour.png";
import Imagesfive from "../../assets/images/services/Wfive.png";
import Imageseight from "../../assets/images/services/Weight.png";

export default function Bouquets() {
  return (
    <div>
    <div className="bouquets_wrapp">
        <div className="bouquets_title">
          <Translate string={"services.bheader"} />
        </div>
          <div className="bouquets_description">
           <Translate string={"services.bdescription"}/>
          </div>
          <div className="bouquets_options">
            <ul>
              <li><Translate string={"services.boption1"} /></li>
              <li><Translate string={"services.boption2"} /></li>
              <li><Translate string={"services.boption3"} /></li>
              <li><Translate string={"services.boption4"} /></li>
              <li><Translate string={"services.boption5"} /></li>
            </ul>
         </div>
      </div>

       <div className="bouquets_grid-mobile">
         <ul>
              <li>
                    <div className="bouquets_image4">
                      <img src={Imagesfour}  alt="Imagesix" />
                    </div>
              </li>
              <li>
                   <div className="bouquets_image5">
                      <img src={Imagesfive}  alt="Imageseight" />
                   </div>
               </li>
              <li>
                   <div className="bouquets_image8">
                      <img src={Imageseight}  alt="Imageseven" />
                   </div>
               </li>
        {/*       <li>
                     <div className="bouquets_image6">
                       <img src={Imagesix}  alt="Imagesix" />
                     </div>
               </li>  */}
         </ul>
       </div>

    </div>

  );
}
