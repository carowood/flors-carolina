import React from "react";
import { Link } from "react-router-dom";
import Translate from "../translations/Translate";

class Navigation extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <ul className="">
        {/*<li className="">
          <Link to="/">
            <Translate string={"navigation.home"} />
          </Link>
        </li> */}
        <li className="">
          <Link to="/ourstory" onClick={this.props.click}>
            <Translate string={"navigation.ourstory"} />
          </Link>
        </li>
        <li className="">
          <Link to="/services" onClick={this.props.click}>
            <Translate string={"navigation.services"} />
          </Link>
        </li>
        <li className="">
          <Link to="/gallery" onClick={this.props.click}>
            <Translate string={"navigation.gallery"} />
          </Link>
        </li>
        <li className="">
          <Link to="/contact" onClick={this.props.click}>
            <Translate string={"navigation.contact"} />
          </Link>
        </li>
        <li className="">
          <Link to="/press" onClick={this.props.click}>
            <Translate string={"navigation.press"} />
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
