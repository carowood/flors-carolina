import React from "react";
import Navigation from "../Navigation";
import LanguagePicker from "../LanguagePicker/LanguagePicker";

export default function sideBar(props) {
  let sideBarClasses = "sidebar";

  if (props.show) {
    sideBarClasses = "sidebar open";
  }

  return (
    <nav className={sideBarClasses}>
      <button className="sidebar-button" onClick={props.close} />
      <Navigation />
      <LanguagePicker changeLanguage={props.changeLanguage} />
    </nav>
  );
}
