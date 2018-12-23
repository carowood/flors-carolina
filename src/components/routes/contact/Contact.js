import React from "react";
import Translate from "../../../translations/Translate";
import Heading from "../../Headings/H1/H1";
import Form from "../../Form/Form";
import Map from "../../Map/Map";
import Address from "../../Address/Address";

export default function Contact() {
  return (
    <div className="page-container">
      <Heading>
        <Translate string={"contact.heading"} />
      </Heading>
      <div className="contact-flex-container">
        <div className="form-container">
          <Form />
        </div>
        <div className="address-map-container">
          <Address />
          <Map />
        </div>
      </div>
    </div>
  );
}
