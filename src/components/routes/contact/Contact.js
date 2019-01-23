import React from "react";
import Translate from "../../../translations/Translate";
import PageTitle from "../../PageTitle/PageTitle";
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
        <PageTitle>
          <Translate string={"contact.heading"} />
        </PageTitle>
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
