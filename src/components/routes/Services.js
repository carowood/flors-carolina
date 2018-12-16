import React from "react";
import Translate from "../../translations/Translate";

export default function Services() {
  return (
    <div>
      <h1>
        <Translate string={"services.wedding.header"} />
      </h1>
      <p>
        <Translate string={"services.wedding.description"} />
      </p>

    {/* <p>
        <Translate string={"services.wedding.option1"} />
        <Translate string={"services.wedding.option2"} />
        <Translate string={"services.wedding.option3"} />
        <Translate string={"services.wedding.option4"} />
        <Translate string={"services.wedding.option5"} />
      </p>

      JSON :
      "services.wedding": {
            "header":"Weddings",
            "description": "On your special day we would love to create the most personalized flower arrangements.The services we offer are:",
            "option1": "- Bride bouquet & groom detail.",
            "option2": "- Restaurant decoration & center pieces.",
            "option3": "- Groom party details.",
            "option4": "- Church decoration.",
            "option5": "- Special gifts such as parents bouquets",
      }
      */}

    </div>
  );
}
