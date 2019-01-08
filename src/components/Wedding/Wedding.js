import React from "react";
import Translate from "../../translations/Translate";
import Imageone from "../../assets/images/services/Wone.png";
import Imagethree from "../../assets/images/services/Wthree.png";
import Imagetwo from "../../assets/images/services/Wtwo.png";

export default function Wedding() {
  return (
    <div>
    <div className="wedding_wrapp">
        <div className="wedding_title">
          <Translate string={"services.wheader"} />
        </div>
        <div className="wedding_description">
          <Translate string={"services.wdescription"}/>
        </div>
        <div className="wedding_options">
          <ul>
            <li><Translate string={"services.woption1"} /></li>
            <li><Translate string={"services.woption2"} /></li>
            <li><Translate string={"services.woption3"} /></li>
            <li><Translate string={"services.woption4"} /></li>
            <li><Translate string={"services.woption5"} /></li>
          </ul>
       </div>
      </div>
       <div className="wedding_grid-mobile">
         <ul>
              <li>
                    <div className="wedding_image1">
                      <img src={Imageone}  alt="Imageone" />
                    </div>
              </li>
              <li>
                    <div className="wedding_image2">
                      <img src={Imagetwo}  alt="Imagetwo" />
                    </div>
              </li>

              <li>
                    <div className="wedding_image3">
                       <img src={Imagethree}  alt="Imagethree" />
                    </div>
              </li>
         </ul>
       </div>
    </div>

  );
}
