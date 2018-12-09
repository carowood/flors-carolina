import React from "react";
import SidebarToggleButton from "../SideBar/SidebarToggleButton";
import Navigation from "../Navigation";
import LanguagePicker from "../LanguagePicker/LanguagePicker";

class navbar extends React.Component {
  render() {
    console.log("this", this.context.value);
    return (
      <header className="navbar">
        <nav className="navbar__navigation">
          <div className="navbar__logo">
            <a href="/">Flors Carolina</a>
          </div>
          <div className="spacer" />
          <div className="navbar__navigation-items">
            <LanguagePicker changeLanguage={this.props.changeLanguage} />
            <Navigation />
          </div>
          <div className="navbar__toggle-button">
            <SidebarToggleButton click={this.props.drawerClickHandler} />
          </div>
        </nav>
      </header>
    );
  }
}

export default navbar;
