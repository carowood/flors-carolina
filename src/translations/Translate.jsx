import React, { PureComponent } from "react";
import { LocaleContext } from "./LocaleContext";
import en from "./en.json";
import es from "./es.json";
import cat from "./cat.json";

export default class Translate extends PureComponent {
  state = {
    langs: {
      en,
      es,
      cat
    }
  };

  render() {
    const langs = this.state.langs;
    const string = this.props.string;

    // Context.Consumer renders output based on the context value,
    // which, in this case, is the language and corresponding string.
    // If there is no value or string found, we set a warning message
    // to help us identify any missing translations easily during testing.
    return (
      <LocaleContext.Consumer>
        {value =>
          langs[value][string] ||
          "!! Untranslated: " + string + "(" + value + ") !!"
        }
      </LocaleContext.Consumer>
    );
  }
}
