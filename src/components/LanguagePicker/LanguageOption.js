import React from "react";

export default class LanguageOption extends React.Component {
  render() {
    let language = this.props.language;
    let classNameString = "languagepicker__list-item " + this.props.classType;
    return (
      <li
        id={language}
        className={classNameString}
        onClick={this.props.changeLanguage}
      >
        {language.toUpperCase()}
      </li>
    );
  }
}
