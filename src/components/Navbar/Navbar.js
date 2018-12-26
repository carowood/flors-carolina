import React from "react";
import SidebarToggleButton from "../SideBar/SidebarToggleButton";
import Navigation from "../Navigation";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import logo from "../../assets/logo/logo.svg";
//import Home from "../routes/home/Home"

class navbar extends React.Component {
  render() {
    return (
      <header className={"navbar " + this.props.theme}>
        <nav className="navbar__navigation">
          <div className="navbar__logo">
            <a href="/Home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="spacer" />
          <div className="navbar__navigation-items">
            <LanguagePicker changeLanguage={this.props.changeLanguage} />
            <Navigation />
          </div>
          <div className="navbar__toggle-button">
            <SidebarToggleButton click={this.props.menuSidebarClickHandler} />
          </div>
        </nav>
      </header>
    );
  }
}

export default navbar;
