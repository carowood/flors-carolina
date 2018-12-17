import React from "react";
import Translate from "../../translations/Translate";

export default function Contact() {
  return (
    <div>
      <h1>
        <Translate string={"contact.header"} />
      </h1>
      <p>
        <Translate string={"contact.description"} />
      </p>
    </div>
  );
}
