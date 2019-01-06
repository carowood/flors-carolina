import React from "react";
import Translate from "../../../translations/Translate";
import Heading from "../../Headings/H1/H1";
import Form from "../../Form/Form";
import Mapin from "../../Map/Map";
import Address from "../../Address/Address";

export default class Contact extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }

  render() {
    return (
      <div className="contact-container">
        <Heading>
          <Translate string={"contact.heading"} />
        </Heading>
        <div className="contact-flex-container">
          <div className="form-container">
            <Form />
          </div>
          <div className="address-map-container">
            <Address />
            <Mapin />
          </div>
        </div>
      </div>
    );
  }
}
