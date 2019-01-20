import React from "react";
import Translate from "../../translations/Translate";

export default function BtnWedding() {
  return (
    <div>
      
        <div className="btn">
          <ul>
            <li><Translate string={"services.wbtn"}/></li>
            <li><a href="/Contact"><button><Translate string={"services.wbtncontact"}/></button></a></li>
          </ul>
        </div>
    
    </div>

  );
}
