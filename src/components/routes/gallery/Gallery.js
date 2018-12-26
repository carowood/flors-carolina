import React from "react";
import Translate from "../../../translations/Translate";

export default class Gallery extends React.Component {
  componentDidMount() {
    this.props.changeTheme("");
  }
  render() {
    return (
      <div className="page-container">
        <h1>
          <Translate string={"gallery.header"} />
        </h1>
        <p>
          <Translate string={"gallery.description"} />
        </p>
      </div>
    );
  }
}
