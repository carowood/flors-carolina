import React from "react";
import Translate from "../../../translations/Translate";

export default class Press extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="page-container">
        <h1>
          <Translate string={"press.header"} />
        </h1>
        <p>
          <Translate string={"press.description"} />
        </p>
      </div>
    );
  }
}
