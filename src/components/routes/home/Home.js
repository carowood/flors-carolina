import React from "react";
//import Translate from "../../../translations/Translate";
//import Logo from "../../logo/Logo.js";
import ImageContainerLarge from "../../ImageContainerLarge/ImageContainerLarge";

export default class Home extends React.Component {
  componentDidMount() {
    this.props.changeTheme("light");
    document.body.style.border = "none";
  }

  componentWillUnmount() {
    document.body.style.border = "2px solid #93278f";
  }

  render() {
    return (
      <div className="page-container">
        <ImageContainerLarge />
      </div>
    );
  }
}
