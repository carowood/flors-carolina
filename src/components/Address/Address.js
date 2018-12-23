import React from "react";
import Translate from "../../translations/Translate";

export default class Form extends React.Component {
  render() {
    return (
      <div className="address-container">
        <h2 className="address-title">
          <Translate string={"contact.address"} />
        </h2>
        <p className="address-line">La Rambla, 93</p>
        <p className="address-line">08002 Barcelona</p>
        <p className="address-line">Spain</p>
        <h2 className="address-title">
          <Translate string={"contact.telephone"} />
        </h2>
        <p className="address-line">93 302 3028</p>
      </div>
    );
  }
}
