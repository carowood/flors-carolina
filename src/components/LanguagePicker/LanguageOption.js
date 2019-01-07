import React from "react";
import { LocaleContext } from "../../translations/LocaleContext";

export default class LanguageOption extends React.Component {
  // Assign a contextType to read the current locale context.
  // React will find the closest locale Provider above and use its value.

  static contextType = LocaleContext;
  render() {
    // get the language from context
    let selectedLanguage = this.context;

    // get the language from the list props
    let language = this.props.language;

    // Compare the two languages.
    // If the props language and context language are the same,
    // add "selected" to the className, otherwise leave off.
    // We do this so we can show the user which language
    // they've chosen with styling.

    let classNameString =
      selectedLanguage === language
        ? "languagepicker" + this.props.theme + "__list__item__a--selected "
        : "languagepicker" + this.props.theme + "__list__item__a";

    console.log("THEME", this.props.theme);
    return (
      <li
        id={language}
        className={"languagepicker" + this.props.theme + "__list__item "}
        onClick={this.props.changeLanguage}
      >
        <span className={classNameString}>{language.toUpperCase()}</span>
      </li>
    );
  }
}
