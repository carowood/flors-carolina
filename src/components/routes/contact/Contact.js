import React from "react";
import Translate from "../../../translations/Translate";
import Heading from "../../Headings/H1/H1";
import Form from "../../Form/Form";

export default function Contact() {
  return (
    <div className="page-container">
      <Heading>
        <Translate string={"contact.heading"} />
      </Heading>
      <Form />
    </div>
  );
}
