import React from "react";
import Translate from "../../translations/Translate";
import Imageone from "../../assets/images/services/Wone.png";
import Imagetwo from "../../assets/images/services/Wtwo.png";
import Imagethree from "../../assets/images/services/Wthree.png";

export default function Wedding() {
  return (
    <div>
      <div className="wedding_title">
        <Translate string={"services.wheader1"} />
      </div>
        <div className="wedding_description">
          <ul>
            <li><Translate string={"services.wdescription1"}/></li>
            <li><Translate string={"services.wdescription2"}/></li>
            <li><Translate string={"services.wdescription3"}/></li>
          </ul>
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

       <div className="wedding_image1">
         <img src={Imageone}  alt="Imageone" />
       </div>
       <div className="wedding_image2">
         <img src={Imagetwo}  alt="Imagetwo" />
       </div>
       <div className="wedding_image3">
         <img src={Imagethree}  alt="Imagethree" />
       </div>
    </div>

  );
}
