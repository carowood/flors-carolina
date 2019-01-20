import React from "react";
import { NavLink } from "react-router-dom";
import Translate from "../translations/Translate";

class Navigation extends React.Component {
  render() {
    let style = {
      color: "#93278f",
      borderBottom: "1px solid #93278f",
      paddingBottom: "2px"
    };
    console.log("props", this.props);
    return (
      <ul className="menu">
        {/*<li className="">
          <Link to="/">
            <Translate string={"navigation.home"} />
          </Link>
        </li> */}
        <li className="menu__item">
          <NavLink
            to="/ourstory"
            activeStyle={style}
            onClick={this.props.click}
          >
            <Translate string={"navigation.ourstory"} />
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/services"
            activeStyle={style}
            onClick={this.props.click}
          >
            <Translate string={"navigation.services"} />
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/gallery" activeStyle={style} onClick={this.props.click}>
            <Translate string={"navigation.gallery"} />
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/contact" activeStyle={style} onClick={this.props.click}>
            <Translate string={"navigation.contact"} />
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/press" activeStyle={style} onClick={this.props.click}>
            <Translate string={"navigation.press"} />
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
