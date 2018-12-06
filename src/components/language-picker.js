import React, { PureComponent } from "react";

export default class LanguagePicker extends PureComponent {
  render() {
    const { changeLanguage } = this.props;
    return (
      <div>
        <ul className="language-picker">
          <li id="en" className="languagepicker-item" onClick={changeLanguage}>
            EN
          </li>
          <li id="es" className="languagepicker-item" onClick={changeLanguage}>
            ES
          </li>
          <li id="cat" className="languagepicker-item" onClick={changeLanguage}>
            CAT
          </li>
        </ul>
      </div>
    );
  }
}
