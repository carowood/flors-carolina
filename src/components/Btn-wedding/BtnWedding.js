import React from "react";
import Translate from "../../translations/Translate";

export default function BtnWedding() {
  return (
    <div>
      <a href="/Contact">
        <div className="btn">
          <ul>
            <li><Translate string={"services.wbtn"}/></li>
            <li><button><Translate string={"services.wbtncontact"}/></button></li>
          </ul>
        </div>
      </a>
    </div>

  );
}
