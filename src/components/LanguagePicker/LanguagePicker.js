import React, { PureComponent } from "react";
import { LocaleContext } from "../../translations/LocaleContext";
import LanguageOption from "./LanguageOption";

export default class LanguagePicker extends PureComponent {
  render() {
    const { changeLanguage } = this.props;

    return (
      <LocaleContext.Consumer>
        {value => {
          let selectedClass = "";
          const languageList = ["en", "es", "cat"];
          let returnOutput = languageList.map(lang => {
            selectedClass = lang === value ? "selected" : "";

            return (
              <LanguageOption
                key={lang}
                changeLanguage={changeLanguage}
                language={lang}
                classType={selectedClass}
              />
            );
          });

          return (
            <div className="languagepicker">
              <ul className="languagepicker__list">
                {returnOutput}
                {/* <LanguageOption
                  changeLanguage={changeLanguage}
                  language={"en"}
                  classType={classType}
                />
                <LanguageOption
                  changeLanguage={changeLanguage}
                  language={"es"}
                />
                <LanguageOption
                  changeLanguage={changeLanguage}
                  language={"cat"}
                /> */}
              </ul>
            </div>
          );
        }}
      </LocaleContext.Consumer>
    );
  }
}
