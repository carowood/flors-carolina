import React, { PureComponent } from "react";
import LanguageOption from "./LanguageOption";

export default class LanguagePicker extends PureComponent {
  render() {
    // pass the changelanguage function via props
    const changeLanguage = this.props.changeLanguage;
    let themeClass = "languagepicker" + this.props.theme.toString();

    return (
      <div className={"languagepicker " + themeClass}>
        <ul className={"languagepicker__list " + themeClass + "__list"}>
          {/* Pass the changeLanguage props to the LanguageOption component */}
          <LanguageOption
            changeLanguage={changeLanguage}
            language={"en"}
            theme={this.props.theme}
          />
          <LanguageOption
            changeLanguage={changeLanguage}
            language={"es"}
            theme={this.props.theme}
          />
          <LanguageOption
            changeLanguage={changeLanguage}
            language={"cat"}
            theme={this.props.theme}
          />
        </ul>
      </div>
    );
  }
}
