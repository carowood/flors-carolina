import React from "react";
import { Link } from "react-router-dom";
import Translate from "../translations/Translate";

class Navigation extends React.Component {
  render() {
    return (
      <ul className="">
        {/* <li className="">
          <Link to="/">
            <Translate string={"navigation.home"} />
          </Link>
        </li> */}
        <li className="">
          <Link to="/ourstory">
            <Translate string={"navigation.ourstory"} />
          </Link>
        </li>
        <li className="">
          <Link to="/services">
            <Translate string={"navigation.services"} />
          </Link>
        </li>
        <li className="">
          <Link to="/gallery">
            <Translate string={"navigation.gallery"} />
          </Link>
        </li>
        <li className="">
          <Link to="/contact">
            <Translate string={"navigation.contact"} />
          </Link>
        </li>
        <li className="">
          <Link to="/press">
            <Translate string={"navigation.press"} />
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
