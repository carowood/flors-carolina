import React, { PureComponent } from "react";
import LanguageOption from "./LanguageOption";

export default class LanguagePicker extends PureComponent {
  render() {
    // pass the changelanguage function via props
    const changeLanguage = this.props.changeLanguage;

    return (
      <div className="languagepicker">
        <ul className="languagepicker__list">
          {/* Pass the changeLanguage props to the LanguageOption component */}
          <LanguageOption changeLanguage={changeLanguage} language={"en"} />
          <LanguageOption changeLanguage={changeLanguage} language={"es"} />
          <LanguageOption changeLanguage={changeLanguage} language={"cat"} />
        </ul>
      </div>
    );
  }
}
