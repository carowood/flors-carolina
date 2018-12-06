import React, { PureComponent } from "react";

export default class LanguagePicker extends PureComponent {
  render() {
    const { changeLanguage } = this.props;
    return (
      <div>
        <ul className="nav justify-content-end">
          <li id="en" className="nav-item" onClick={changeLanguage}>
            EN
          </li>
          <li id="es" className="nav-item" onClick={changeLanguage}>
            ES
          </li>
          <li id="cat" className="nav-item" onClick={changeLanguage}>
            CAT
          </li>
        </ul>
      </div>
    );
  }
}
