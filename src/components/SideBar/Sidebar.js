import React from "react";
import Navigation from "../Navigation";
import LanguagePicker from "../LanguagePicker";

const sideBar = props => {
  let drawerClasses = "sidebar";

  if (props.show) {
    drawerClasses = "sidebar open";
  }

  return (
    <nav className={drawerClasses}>
      <button className="sidebar-button" onClick={props.close}>
        X
      </button>
      <Navigation />
      <LanguagePicker changeLanguage={props.changeLanguage} />
    </nav>
  );
};

export default sideBar;
