import React from "react";
//import Translate from "../../../translations/Translate";
import Wedding from "../../Wedding/Wedding.js";
import Bouquets from "../../Bouquets/Bouquets.js";
import Pillows from "../../Pillows/Pillows.js";
import BtnWedding from "../../Btn-wedding/BtnWedding.js";
import Company from "../../Company/Company.js";
import PageTitle from "../../PageTitle/PageTitle";

export default class Services extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="services">
        <div className="wedding">
          <Wedding />
          <BtnWedding />
        </div>
        <div className="bouquets">
          <Bouquets />
        </div>
        <div className="pillows">
          <Pillows />
        </div>
        <div className="company">
          <Company />
        </div>
      </div>
    );
  }
}
