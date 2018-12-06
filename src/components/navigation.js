import React from "react";
import { Link } from "react-router-dom";
import LanguagePicker from "../components/language-picker";
import Translate from "../translations/translate";

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul id="navigation">
          <LanguagePicker changeLanguage={this.props.changeLanguage} />
          <li className="nav-item">
            <Link to="/">
              <Translate string={"navigation.home"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ourstory">
              <Translate string={"navigation.ourstory"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services">
              <Translate string={"navigation.services"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery">
              <Translate string={"navigation.gallery"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">
              <Translate string={"navigation.contact"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/press">
              <Translate string={"navigation.press"} />
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navigation;
