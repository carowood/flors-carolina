import React from "react";
import Translate from "../../../translations/Translate";
import Ggrid from "../../Ggrid/Ggrid.js";

export default class Gallery extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="page-container">
        <Ggrid/>
      </div>
    );
  }
}
