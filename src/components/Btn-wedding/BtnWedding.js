import React from "react";
import Translate from "../../translations/Translate";

export default function BtnWedding() {
  return (
    <div>
        <div className="btn">
          <ul>
            <li><Translate string={"services.wbtn1"}/></li>
            <li><Translate string={"services.wbtn2"}/></li>
            <li><button><Translate string={"services.wbtn3"}/></button></li>
          </ul>
        </div>
    </div>

  );
}
