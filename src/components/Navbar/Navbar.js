import React from "react";
import SidebarToggleButton from "../SideBar/SidebarToggleButton";
import Navigation from "../Navigation";
import LanguagePicker from "../LanguagePicker";

const navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__logo">
        <a href="/">Flors Carolina</a>
      </div>
      <div className="spacer" />
      <div className="navbar__navigation-items">
        <LanguagePicker changeLanguage={props.changeLanguage} />
        <Navigation />
      </div>
      <div className="navbar__toggle-button">
        <SidebarToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default navbar;
