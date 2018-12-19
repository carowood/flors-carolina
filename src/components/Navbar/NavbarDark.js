import React from "react";
import SidebarToggleButton from "../SideBar/SidebarToggleButton";
import Navigation from "../Navigation";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import Logo from "../../assets/logo/logo.svg";

class NavbarDark extends React.Component {
  render() {
    return (
      <header className="navbar">
        <nav className="navbar__navigation">
          <div className="navbar__logo">
          <img src={Logo}  alt="logo" />
            <a href="/">Flors Carolina</a>
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

export default NavbarDark;
